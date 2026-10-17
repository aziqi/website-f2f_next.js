/* ============================================================
   Flood2Food — Main Interactivity Script
   Engine: Pure Vanilla JS (Zero Dependencies)
   Features: Telemetry Simulator, AI Bimo Knowledge Engine,
             App Carousel, Animated Counters, Responsive Nav, PWA
   ============================================================ */

(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- 1. Nav: Scroll State & Sticky Header ---------- */
  var nav = document.getElementById('nav');
  function onScrollNav() {
    if (nav) {
      nav.classList.toggle('is-scrolled', window.scrollY > 12);
    }
  }
  onScrollNav();
  window.addEventListener('scroll', onScrollNav, { passive: true });

  /* ---------- 2. Nav: Mobile Drawer Menu ---------- */
  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!open));
      toggle.setAttribute('aria-label', open ? 'Buka menu navigasi' : 'Tutup menu navigasi');
      menu.classList.toggle('is-open', !open);
    });

    menu.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
        menu.classList.remove('is-open');
      }
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && menu.classList.contains('is-open')) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-label', 'Buka menu navigasi');
        menu.classList.remove('is-open');
        toggle.focus();
      }
    });
  }

  /* ---------- 3. Progressive Reveal on Scroll ---------- */
  var revealEls = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  revealEls.forEach(function (el) {
    var d = parseInt(el.getAttribute('data-delay') || '0', 10);
    el.style.setProperty('--d', String(d));
  });

  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealEls.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-in');
          revealObs.unobserve(entry.target);
        }
      });
    }, { rootMargin: '120px 0px 120px 0px', threshold: 0.01 });
    revealEls.forEach(function (el) { revealObs.observe(el); });
  }

  /* ---------- 4. Animated Numerical Stat Counters ---------- */
  var counters = Array.prototype.slice.call(document.querySelectorAll('[data-count]'));
  function formatVal(value, decimals) {
    return value.toLocaleString('id-ID', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals
    });
  }

  function setCounterFinal(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    el.textContent = formatVal(target, decimals);
  }

  function animateCounter(el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var decimals = parseInt(el.getAttribute('data-decimals') || '0', 10);
    var duration = 950;
    var start = null;

    function step(ts) {
      if (!start) start = ts;
      var p = Math.min((ts - start) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = formatVal(target * eased, decimals);
      if (p < 1) {
        requestAnimationFrame(step);
      } else {
        setCounterFinal(el);
      }
    }
    requestAnimationFrame(step);
  }

  if (counters.length) {
    if (reduceMotion || !('IntersectionObserver' in window)) {
      counters.forEach(setCounterFinal);
    } else {
      var countObs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            countObs.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      counters.forEach(function (el) { countObs.observe(el); });
    }
  }

  /* ---------- 5. Simulator Telemetri Interaktif ---------- */
  var telemetryData = {
    day1: {
      score: 15,
      status: 'Kondisi Kritis',
      statusClass: 'status--critical',
      color: '#F43F5E',
      params: {
        N: { text: '8.2 mg/kg', fill: '16%' },
        P: { text: '2.1 mg/kg', fill: '10%' },
        K: { text: '45.0 mg/kg', fill: '28%' },
        pH: { text: '4.20 pH', fill: '25%' },
        EC: { text: '380.0 µS/cm', fill: '90%' },
        M: { text: '78.3% · 28.4°C', fill: '80%' }
      },
      recomTitle: 'Tindakan Remediasi Prioritas Hari ke-1 (Status: Kritis)',
      recomDesc: 'Kadar asam akut (pH 4.2) dan kejenuhan air tinggi (78.3%). Lakukan pengatusan parit keliling sawah segera. Taburkan kapur dolomit 300 kg/ha untuk menetralkan racun aluminium sebelum pemberian pupuk dasar.'
    },
    day7: {
      score: 62,
      status: 'Remediasi Sedang',
      statusClass: 'status--medium',
      color: '#F0B429',
      params: {
        N: { text: '22.5 mg/kg', fill: '48%' },
        P: { text: '10.8 mg/kg', fill: '46%' },
        K: { text: '98.3 mg/kg', fill: '62%' },
        pH: { text: '5.40 pH', fill: '58%' },
        EC: { text: '210.0 µS/cm', fill: '55%' },
        M: { text: '55.2% · 27.1°C', fill: '55%' }
      },
      recomTitle: 'Tindakan Lanjutan Hari ke-7 (Status: Perbaikan Berjalan)',
      recomDesc: 'Kemasaman membaik ke arah pH 5.4. Lakukan pemupukan fosfat (SP-36 dosis 100 kg/ha) dan pupuk organik hayati untuk merangsang kolonisasi mikroba pengurai hara.'
    },
    day14: {
      score: 96,
      status: 'Siap Tanam (Ideal)',
      statusClass: 'status--ideal',
      color: '#22C55E',
      params: {
        N: { text: '35.5 mg/kg', fill: '85%' },
        P: { text: '18.0 mg/kg', fill: '82%' },
        K: { text: '149.7 mg/kg', fill: '92%' },
        pH: { text: '6.51 pH', fill: '88%' },
        EC: { text: '121.0 µS/cm', fill: '35%' },
        M: { text: '39.3% · 26.6°C', fill: '40%' }
      },
      recomTitle: 'Lahan Siap Ditanami Hari ke-14 (Status: Prima)',
      recomDesc: 'Seluruh 7 parameter berada dalam rentang optimal rekomendasi BPTP Sumut. Lahan siap untuk pembajakan akhir (rotary) dan penanaman bibit padi umur 15-21 HSS.'
    }
  };

  var simCircle = document.getElementById('sim-circle');
  var simScoreEl = document.getElementById('sim-health-score');
  var simBadgeEl = document.getElementById('sim-status-badge');
  var simRecomTitle = document.getElementById('sim-recom-title');
  var simRecomDesc = document.getElementById('sim-recom-desc');
  var simButtons = Array.prototype.slice.call(document.querySelectorAll('.sim-pill'));

  var currentSimScore = 15;
  var simAnimId = null;

  function animateSimScore(targetScore) {
    if (reduceMotion) {
      if (simScoreEl) simScoreEl.textContent = String(targetScore);
      currentSimScore = targetScore;
      return;
    }
    if (simAnimId) cancelAnimationFrame(simAnimId);
    var startScore = currentSimScore;
    var duration = 500;
    var startTime = null;

    function step(ts) {
      if (!startTime) startTime = ts;
      var p = Math.min((ts - startTime) / duration, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      var val = Math.round(startScore + (targetScore - startScore) * eased);
      if (simScoreEl) simScoreEl.textContent = String(val);
      if (p < 1) {
        simAnimId = requestAnimationFrame(step);
      } else {
        currentSimScore = targetScore;
        if (simScoreEl) simScoreEl.textContent = String(targetScore);
      }
    }
    simAnimId = requestAnimationFrame(step);
  }

  function applyScenario(scenarioKey) {
    var data = telemetryData[scenarioKey];
    if (!data) return;

    // Update buttons state
    simButtons.forEach(function (btn) {
      var isMatch = btn.getAttribute('data-scenario') === scenarioKey;
      btn.classList.toggle('is-active', isMatch);
      btn.setAttribute('aria-selected', String(isMatch));
    });

    // Update Health Score & Circle
    animateSimScore(data.score);
    if (simCircle) {
      simCircle.style.borderTopColor = data.color;
    }
    if (simBadgeEl) {
      simBadgeEl.textContent = data.status;
      simBadgeEl.className = 'sim-status-label ' + data.statusClass;
    }

    // Update 7 Parameter Bars
    ['N', 'P', 'K', 'pH', 'EC', 'M'].forEach(function (param) {
      var valEl = document.getElementById('sim-val-' + param);
      var fillEl = document.getElementById('sim-fill-' + param);
      if (valEl && data.params[param]) {
        valEl.textContent = data.params[param].text;
      }
      if (fillEl && data.params[param]) {
        fillEl.style.setProperty('--w', data.params[param].fill);
      }
    });

    // Update Recommendation Box
    if (simRecomTitle) simRecomTitle.textContent = data.recomTitle;
    if (simRecomDesc) simRecomDesc.textContent = data.recomDesc;
  }

  simButtons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var scenario = btn.getAttribute('data-scenario');
      applyScenario(scenario);
    });
  });

  /* ---------- 6. Tanya Bimo AI Knowledge Engine ---------- */
  var bimoKnowledge = [
    {
      keywords: ['ph', 'asam', 'kapur', 'dolomit', 'acidity'],
      response: 'Untuk menetralkan tanah yang masam (pH < 5.5) pascabanjir, taburkan kapur dolomit 300–400 kg/ha pada kondisi tanah macak-macak. Diamkan 3–5 hari agar racun aluminium dan besi mengendap sebelum pupuk dasar diberikan.'
    },
    {
      keywords: ['pupuk p', 'sp36', 'fosfor', 'fosfat', 'p-tersedia'],
      response: 'Genangan banjir sering mengikat ion fosfat dalam bentuk tidak larut. Gunakan pupuk SP-36 dengan dosis 100 kg/ha atau pupuk hayati pelarut fosfat (Pseudomonas) agar penyerapan unsur P kembali normal.'
    },
    {
      keywords: ['pupuk k', 'kcl', 'kalium', 'k-dd'],
      response: 'Kalium sangat penting untuk memperkuat dinding sel tanaman agar tidak roboh pascabanjir. Rekomendasi dosis KCl adalah 50–75 kg/ha saat tanaman padi memasuki fase anakan aktif (21–28 HSS).'
    },
    {
      keywords: ['pupuk n', 'urea', 'nitrogen', 'n-total'],
      response: 'Nitrogen dalam bentuk nitrat sangat mudah tercuci oleh arus banjir. Namun, jangan berikan Urea saat sawah masih tergenang pekat. Berikan 150 kg/ha terbagi 3 kali aplikasi setelah pH tanah mencapai rentang normal (6.0–6.8).'
    },
    {
      keywords: ['ec', 'salinitas', 'konduktivitas', 'garam', 'daya hantar'],
      response: 'Nilai EC di atas 250 µS/cm menandakan tingginya residu garam atau mineral terlarut dari endapan lumpur. Lakukan pengurasan (leaching) air sawah sebanyak 1–2 kali dengan air irigasi bersih untuk membilas garam berlebih.'
    },
    {
      keywords: ['waktu tanam', 'kapan tanam', 'siap tanam', 'bibit'],
      response: 'Lahan sawah siap ditanami kembali apabila nilai pH telah berada di atas 6.0, kadar EC di bawah 150 µS/cm, dan aerasi tanah (kelembapan <60%) sudah pulih. Berdasarkan uji lapangan kami, fase aman tercapai pada hari ke-14 pascabanjir.'
    },
    {
      keywords: ['lora', 'sinyal', 'frekuensi', 'jarak', 'km', 'blank spot'],
      response: 'Modul transmisi LoRa kami beroperasi pada frekuensi 930/915 MHz dengan daya pancar teroptimasi. Jangkauan sinyal teruji hingga 10,64 km di area blank spot sawah Pagar Merbau II tanpa memerlukan kartu SIM maupun kuota internet!'
    },
    {
      keywords: ['baterai', 'panel surya', 'lifepo4', 'catu daya', 'daya'],
      response: 'Sensor Node menggunakan panel surya 10 Wp, solar charge controller cerdas, dan baterai LiFePO4 12V 8Ah. Dilengkapi mode Deep Sleep hemat daya sehingga perangkat sanggup beroperasi nonstop 24/7 bahkan saat musim hujan berawan.'
    },
    {
      keywords: ['probe', 'sensor', 'karat', 'korosi', 'rusak'],
      response: 'Sensor kami menggunakan probe heavy-duty RS485 7-in-1 dengan elektroda baja tahan karat 316. Teruji selama 14 hari penuh terendam di lumpur sawah aktif tanpa korosi, berkat sertifikasi perlindungan IP68.'
    },
    {
      keywords: ['gateway', 'bluetooth', 'ble', 'lcd'],
      response: 'Gateway portabel ditempatkan di rumah atau pos petani, bertugas menangkap data LoRa dan meneruskannya ke ponsel via Bluetooth LE (Flood2Food_GW). Gateway juga memiliki layar LCD 20x4 dan slot MicroSD untuk pencatatan CSV otomatis.'
    },
    {
      keywords: ['lumpur', 'endapan', 'sedimen'],
      response: 'Endapan lumpur banjir membawa sedimen halus yang memadatkan pori aerasi tanah. Sangat disarankan melakukan pengolahan tanah (singkal/rotary) ringan dan menambahkan kompos jerami untuk mengembalikan sirkulasi udara di perakaran.'
    },
    {
      keywords: ['mikroba', 'bakteri', 'hayati', 'dekomposer'],
      response: 'Kondisi anaerob saat banjir mematikan banyak mikroba aerobik tanah yang menguntungkan. Aplikasi pupuk organik berbasis Trichoderma atau PGPR (Plant Growth-Promoting Rhizobacteria) akan sangat mempercepat revitalisasi biologi tanah.'
    },
    {
      keywords: ['biaya', 'gratis', 'harga', 'download'],
      response: 'Aplikasi Android Flood2Food dapat diunduh 100% gratis melalui tautan Google Drive resmi di website ini. Ini adalah prototipe penelitian inovatif hasil program PKM-KC 2026 Universitas Sumatera Utara.'
    }
  ];

  var chatLogs = document.getElementById('chat-logs');
  var chatForm = document.getElementById('chat-form');
  var chatInput = document.getElementById('chat-input');
  var promptChips = Array.prototype.slice.call(document.querySelectorAll('.prompt-chip'));

  function appendChat(role, message) {
    if (!chatLogs) return;
    var msgDiv = document.createElement('div');
    msgDiv.className = 'chat-msg chat-msg--' + role;
    msgDiv.innerHTML = message;
    chatLogs.appendChild(msgDiv);
    chatLogs.scrollTop = chatLogs.scrollHeight;
  }

  function handleBimoQuery(query) {
    var q = query.toLowerCase().trim();
    if (!q) return;

    appendChat('user', query);

    // Show temporary typing indicator
    var typingDiv = document.createElement('div');
    typingDiv.className = 'chat-msg chat-msg--bot';
    typingDiv.id = 'bimo-typing';
    typingDiv.textContent = 'Bimo sedang menganalisis data tanah...';
    chatLogs.appendChild(typingDiv);
    chatLogs.scrollTop = chatLogs.scrollHeight;

    setTimeout(function () {
      if (typingDiv && typingDiv.parentNode) {
        typingDiv.parentNode.removeChild(typingDiv);
      }

      var matchedResponse = null;
      for (var i = 0; i < bimoKnowledge.length; i++) {
        var item = bimoKnowledge[i];
        for (var j = 0; j < item.keywords.length; j++) {
          if (q.indexOf(item.keywords[j]) !== -1) {
            matchedResponse = item.response;
            break;
          }
        }
        if (matchedResponse) break;
      }

      if (!matchedResponse) {
        matchedResponse = 'Pertanyaan agronomi yang sangat bagus! Berdasarkan data kalibrasi lapangan Flood2Food, pastikan pH sawah berada di atas 6.0 dan nilai EC stabil di bawah 150 µS/cm sebelum menanam kembali. Apakah ada parameter spesifik (N, P, K, pH, atau EC) yang ingin Anda tanyakan?';
      }

      appendChat('bot', matchedResponse);
    }, 600);
  }

  if (chatForm && chatInput) {
    chatForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var q = chatInput.value;
      if (q.trim()) {
        handleBimoQuery(q);
        chatInput.value = '';
      }
    });
  }

  promptChips.forEach(function (chip) {
    chip.addEventListener('click', function () {
      var q = chip.getAttribute('data-q');
      if (q) {
        handleBimoQuery(q);
      }
    });
  });

  /* ---------- 7. Sticky CTA Trigger (Mobile Screens) ---------- */
  var stickyCta = document.getElementById('sticky-cta');
  var downloadSec = document.getElementById('download');

  function updateStickyCta() {
    if (!stickyCta) return;
    var isMobile = window.innerWidth <= 640;
    var scrolledPastHero = window.scrollY > 600;
    var isDownloadVisible = false;

    if (downloadSec) {
      var rect = downloadSec.getBoundingClientRect();
      isDownloadVisible = rect.top < window.innerHeight && rect.bottom > 0;
    }

    var show = isMobile && scrolledPastHero && !isDownloadVisible;
    stickyCta.classList.toggle('is-visible', show);
    stickyCta.setAttribute('aria-hidden', String(!show));
    document.body.classList.toggle('has-sticky-cta', show);
  }

  window.addEventListener('scroll', updateStickyCta, { passive: true });
  window.addEventListener('resize', updateStickyCta);
  updateStickyCta();

  /* ---------- 8. PWA Service Worker Registration ---------- */
  if ('serviceWorker' in navigator && window.location.protocol.indexOf('http') === 0) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register('sw.js').catch(function () {
        // Silent catch for local file execution
      });
    });
  }

})();
