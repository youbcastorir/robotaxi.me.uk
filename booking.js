/* ═══════════════════════════════════════════════════
   ROBOTAXI UK — booking.js
   Booking Form: Tabs, Validation, Submission
   ═══════════════════════════════════════════════════ */

(function () {
  'use strict';

  /* ── Tab switching ── */
  function initBookingTabs() {
    const tabs = document.querySelectorAll('.booking-tab');
    const serviceSelect = document.getElementById('serviceType');
    if (!tabs.length) return;

    const tabServiceMap = {
      passenger: [
        { value: '', label: 'Select service…' },
        { value: 'city', label: 'City Transport' },
        { value: 'airport', label: 'Airport Transfer' },
        { value: 'corporate', label: 'Corporate Travel' }
      ],
      delivery: [
        { value: '', label: 'Select service…' },
        { value: 'delivery-std', label: 'Standard Delivery' },
        { value: 'delivery-same', label: 'Same-Day Delivery' },
        { value: 'delivery-express', label: 'Express Delivery' }
      ],
      business: [
        { value: '', label: 'Select service…' },
        { value: 'logistics', label: 'Business Logistics' },
        { value: 'fleet', label: 'Fleet Management' },
        { value: 'enterprise', label: 'Enterprise Partnership' }
      ]
    };

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const type = tab.dataset.tab;
        if (serviceSelect && tabServiceMap[type]) {
          serviceSelect.innerHTML = tabServiceMap[type]
            .map(o => `<option value="${o.value}">${o.label}</option>`)
            .join('');
        }
      });
    });
  }

  /* ── Set minimum datetime to now ── */
  function setMinDatetime() {
    const dtInput = document.getElementById('datetime');
    if (!dtInput) return;
    const now = new Date();
    now.setMinutes(now.getMinutes() - now.getTimezoneOffset());
    // Add 1 hour buffer
    now.setHours(now.getHours() + 1);
    dtInput.min = now.toISOString().slice(0, 16);
  }

  /* ── Form validation ── */
  function validateForm(data) {
    const errors = [];

    if (!data.pickup || data.pickup.trim().length < 5) {
      errors.push('Please enter a valid pickup address (at least 5 characters).');
    }
    if (!data.destination || data.destination.trim().length < 5) {
      errors.push('Please enter a valid destination (at least 5 characters).');
    }
    if (!data.serviceType) {
      errors.push('Please select a service type.');
    }
    if (!data.datetime) {
      errors.push('Please select a preferred date and time.');
    } else {
      const chosen = new Date(data.datetime);
      if (chosen < new Date()) {
        errors.push('Please select a future date and time.');
      }
    }
    if (!data.name || data.name.trim().length < 2) {
      errors.push('Please enter your full name.');
    }
    if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      errors.push('Please enter a valid email address.');
    }

    return errors;
  }

  /* ── Format WhatsApp message ── */
  function buildWhatsAppMessage(data) {
    const lines = [
      '🚖 *RoboTaxi UK — Booking Request*',
      '',
      `📍 *Pickup:* ${data.pickup}`,
      `🏁 *Destination:* ${data.destination}`,
      `🔧 *Service:* ${data.serviceType}`,
      `📅 *Date/Time:* ${data.datetime}`,
      `👤 *Name:* ${data.name}`,
      `📧 *Email:* ${data.email}`,
      data.phone ? `📞 *Phone:* ${data.phone}` : '',
      data.notes ? `📝 *Notes:* ${data.notes}` : '',
      '',
      '_Sent via robotaxi.me.uk_'
    ].filter(Boolean);

    return encodeURIComponent(lines.join('\n'));
  }

  /* ── Show message ── */
  function showMessage(type, text) {
    const el = document.getElementById('formMessage');
    if (!el) return;
    el.className = `form-message ${type}`;
    el.textContent = text;
    el.style.display = 'block';
    el.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    setTimeout(() => { el.style.display = 'none'; }, 8000);
  }

  /* ── Toggle submit loading ── */
  function setLoading(loading) {
    const btn  = document.getElementById('submitBtn');
    const text = btn && btn.querySelector('.btn-text');
    const load = btn && btn.querySelector('.btn-loading');
    if (!btn) return;
    btn.disabled = loading;
    if (text) text.style.display = loading ? 'none' : '';
    if (load) load.style.display = loading ? '' : 'none';
  }

  /* ── Main form handler ── */
  function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const data = {
        pickup:      document.getElementById('pickup')?.value.trim(),
        destination: document.getElementById('destination')?.value.trim(),
        serviceType: document.getElementById('serviceType')?.value,
        datetime:    document.getElementById('datetime')?.value,
        name:        document.getElementById('name')?.value.trim(),
        email:       document.getElementById('email')?.value.trim(),
        phone:       document.getElementById('phone')?.value.trim(),
        notes:       document.getElementById('notes')?.value.trim()
      };

      const errors = validateForm(data);
      if (errors.length) {
        showMessage('error', errors[0]);
        return;
      }

      setLoading(true);

      // Simulate processing delay (real integration would POST to backend/email service)
      await new Promise(r => setTimeout(r, 1200));

      setLoading(false);

      // Show success
      showMessage('success',
        `✅ Booking request received, ${data.name}! We'll confirm via ${data.email} within 15 minutes. ` +
        `For instant confirmation, tap the WhatsApp button below.`
      );

      // Reset form
      form.reset();

      // Offer WhatsApp deep-link for instant booking
      const waMsg = buildWhatsAppMessage(data);
      const waUrl = `https://wa.me/212612605737?text=${waMsg}`;

      // Show WhatsApp prompt after 2 seconds
      setTimeout(() => {
        const confirmWA = confirm(
          '✅ Your booking request was submitted!\n\n' +
          'Want to also send it via WhatsApp for instant confirmation?'
        );
        if (confirmWA) {
          window.open(waUrl, '_blank', 'noopener');
        }
      }, 1500);
    });
  }

  /* ── Real-time field feedback ── */
  function initRealTimeFeedback() {
    const inputs = document.querySelectorAll('.form-input[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        if (input.value.trim() === '') {
          input.style.borderColor = 'var(--red)';
        } else {
          input.style.borderColor = 'var(--green)';
        }
      });
      input.addEventListener('focus', () => {
        input.style.borderColor = 'var(--cyan)';
      });
    });
  }

  /* ── Init all ── */
  document.addEventListener('DOMContentLoaded', () => {
    initBookingTabs();
    setMinDatetime();
    initBookingForm();
    initRealTimeFeedback();
  });

})();
