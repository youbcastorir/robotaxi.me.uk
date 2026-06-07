/* ═══════════════════════════════════════════════════
   ROBOTAXI UK — services.js
   Data Layer: All service content, areas, FAQ
   ═══════════════════════════════════════════════════ */

const SERVICES_DATA = {

  passenger: [
    {
      icon: '🚖',
      tag: 'City Transport',
      title: 'Urban Autonomous Taxi',
      desc: 'On-demand autonomous rides within city limits. Smart routing, dynamic pricing, and real-time tracking — fully electric, zero emissions.',
      features: ['Instant booking via app or web', 'Live vehicle tracking', 'Zero-emission electric fleet']
    },
    {
      icon: '✈️',
      tag: 'Airport Transfers',
      title: 'Airport Transfer Service',
      desc: 'Reliable, punctual autonomous transfers to and from all major UK airports. Flight-monitored scheduling adapts to delays automatically.',
      features: ['Heathrow, Gatwick, Manchester', 'Flight delay monitoring', 'Meet & greet available']
    },
    {
      icon: '👔',
      tag: 'Corporate Travel',
      title: 'Business Transportation',
      desc: 'Premium autonomous transport for executives, employees, and corporate events. Bespoke billing, monthly invoicing, and priority dispatch.',
      features: ['Corporate account management', 'Priority dispatch queue', 'Confidential ride data']
    },
    {
      icon: '🌆',
      tag: 'Smart Mobility',
      title: 'Smart Urban Mobility',
      desc: 'Integrated multimodal urban transport — connecting last-mile journeys to rail and bus networks seamlessly across UK smart cities.',
      features: ['Multimodal journey planning', 'Transport API integration', 'Smart city data sharing']
    }
  ],

  delivery: [
    {
      icon: '📦',
      tag: 'Standard Delivery',
      title: 'Package Delivery',
      desc: 'Reliable autonomous ground vehicle delivery for parcels across covered UK urban areas. Tracked from collection to doorstep.',
      features: ['End-to-end parcel tracking', 'Proof of delivery photos', 'Rescheduling on demand']
    },
    {
      icon: '⚡',
      tag: 'Same-Day',
      title: 'Same-Day Express Delivery',
      desc: 'Order before midday, delivered by 7pm — powered by our fleet of autonomous delivery vehicles operating across city zones.',
      features: ['Order by 12pm, delivered by 7pm', 'Live ETA updates', 'Priority routing algorithm']
    },
    {
      icon: '🛒',
      tag: 'E-Commerce',
      title: 'E-Commerce Fulfilment',
      desc: 'Plug your e-commerce platform directly into the RoboTaxi UK delivery API. Automated dispatch from warehouse to customer.',
      features: ['Shopify & WooCommerce APIs', 'Automated warehouse dispatch', 'Returns logistics included']
    },
    {
      icon: '🏭',
      tag: 'Last-Mile',
      title: 'Last-Mile Logistics',
      desc: 'The final leg of the supply chain — solved. Autonomous ground vehicles handle dense urban last-mile at unprecedented efficiency.',
      features: ['Sub-2hr urban delivery windows', 'Smart locker integration', 'Carbon-neutral delivery certs']
    },
    {
      icon: '🏢',
      tag: 'B2B Logistics',
      title: 'Business Logistics',
      desc: 'Regular, scheduled deliveries for businesses — from daily stock replenishment to inter-site corporate logistics management.',
      features: ['Daily/weekly scheduled runs', 'Temperature-controlled options', 'Dedicated fleet allocation']
    },
    {
      icon: '🌐',
      tag: 'Network',
      title: 'Logistics Network',
      desc: 'Join the RoboTaxi UK logistics network as a depot partner or integration node — expand your coverage using shared autonomous infrastructure.',
      features: ['Partner depot programme', 'Revenue share model', 'White-label delivery options']
    }
  ],

  business: [
    {
      icon: '📊',
      tag: 'Fleet Management',
      title: 'Fleet Management Portal',
      desc: 'Real-time dashboard for managing your entire autonomous fleet — vehicle health, route efficiency, utilisation rates, and cost analytics.',
      features: ['Real-time fleet telemetry', 'Predictive maintenance alerts', 'Custom reporting & exports']
    },
    {
      icon: '🏛',
      tag: 'Corporate',
      title: 'Corporate Transportation',
      desc: 'Manage employee transport budgets, event shuttle services, and executive travel through a single enterprise dashboard.',
      features: ['Employee travel policy controls', 'Expense code assignment', 'Bulk booking tools']
    },
    {
      icon: '🔗',
      tag: 'Optimisation',
      title: 'Logistics Optimisation',
      desc: 'AI-powered route and load optimisation reduces operating costs by up to 40% compared to traditional logistics models.',
      features: ['Multi-stop route AI', 'Load balancing algorithms', 'Cost-per-delivery analytics']
    },
    {
      icon: '🏙',
      tag: 'Smart City',
      title: 'Smart City Integration',
      desc: 'Integrate RoboTaxi UK into your city\'s mobility infrastructure — connect to traffic systems, mobility hubs, and public transport APIs.',
      features: ['Traffic signal API integration', 'Public transport connectors', 'City data dashboard']
    }
  ],

  areas: [
    { city: 'London', flag: '🏙', status: 'active', desc: 'All zones, 24/7' },
    { city: 'Manchester', flag: '🐝', status: 'active', desc: 'City & Salford' },
    { city: 'Birmingham', flag: '⚙️', status: 'active', desc: 'City centre & suburbs' },
    { city: 'Liverpool', flag: '⚓', status: 'active', desc: 'City & Merseyside' },
    { city: 'Leeds', flag: '🌿', status: 'soon', desc: 'Launching Q3 2025' },
    { city: 'Glasgow', flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', status: 'soon', desc: 'Launching Q3 2025' },
    { city: 'Edinburgh', flag: '🏰', status: 'soon', desc: 'Launching Q4 2025' },
    { city: 'Bristol', flag: '🌉', status: 'soon', desc: 'Launching Q4 2025' }
  ],

  faq: [
    {
      q: 'Are these actually autonomous vehicles operating now?',
      a: 'RoboTaxi UK is a mobility and logistics platform presenting planned and future autonomous operations. Our services represent bookings and requests that are fulfilled as our technology and regulatory approvals roll out across UK cities. We are fully transparent about our roadmap and launch timelines.'
    },
    {
      q: 'Which cities does RoboTaxi UK currently cover?',
      a: 'We are actively operating or preparing to operate in London, Manchester, Birmingham, Liverpool, Leeds, Glasgow, Edinburgh, and Bristol. Coverage is expanding quarterly. Enter your postcode in the booking form to check availability at your specific location.'
    },
    {
      q: 'How do I book a passenger journey or delivery?',
      a: 'Use the booking form on this page, WhatsApp us directly on 0612 605 737, or email salatrir@gmail.com. You\'ll receive an instant confirmation with tracking details. For regular bookings, we recommend setting up a business account for streamlined scheduling.'
    },
    {
      q: 'How safe are autonomous vehicles?',
      a: 'Safety is our absolute priority. Our autonomous systems use multi-layer sensor fusion (LiDAR, radar, cameras, GPS), real-time remote monitoring by our operations centre, and full compliance with UK DVSA and CAV (Connected and Autonomous Vehicles) standards. Every journey has a human override capability.'
    },
    {
      q: 'What size packages can be delivered?',
      a: 'Our standard autonomous delivery vehicles accept parcels up to 25kg and 80x60x60cm. For larger freight or palletised goods, our business logistics service provides larger vehicles. Contact us for specific size and weight requirements.'
    },
    {
      q: 'Is the fleet really 100% electric?',
      a: 'Yes. Every vehicle in the RoboTaxi UK fleet is fully electric. We are committed to net-zero operations by 2027, powered by 100% renewable energy at all our charging depots. Each booking comes with a carbon-neutral delivery certificate.'
    },
    {
      q: 'Do you offer corporate accounts and bulk pricing?',
      a: 'Absolutely. Our Enterprise Programme offers volume discounts, dedicated account management, monthly consolidated billing, and bespoke SLA agreements. Fill in the booking form selecting "Business" to start the conversation, or WhatsApp our enterprise team directly.'
    },
    {
      q: 'What is your service roadmap for the next 12 months?',
      a: 'We plan to complete city launches in Leeds, Glasgow, Edinburgh, and Bristol by end of 2025, launch our autonomous delivery drone pilot in London in Q2 2025, and integrate with 3 major UK rail network apps for seamless multimodal journeys. Sign up to our newsletter for full roadmap updates.'
    }
  ]
};

/* ─── RENDER FUNCTIONS ─── */

function renderPassengerServices() {
  const grid = document.getElementById('servicesGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.passenger.map(s => `
    <div class="service-card reveal">
      <div class="card-icon">${s.icon}</div>
      <div class="card-tag">${s.tag}</div>
      <h3 class="card-title">${s.title}</h3>
      <p class="card-desc">${s.desc}</p>
      <ul class="card-features">
        ${s.features.map(f => `<li class="card-feature">${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderDeliveryServices() {
  const grid = document.getElementById('deliveryGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.delivery.map(s => `
    <div class="service-card reveal">
      <div class="card-icon">${s.icon}</div>
      <div class="card-tag">${s.tag}</div>
      <h3 class="card-title">${s.title}</h3>
      <p class="card-desc">${s.desc}</p>
      <ul class="card-features">
        ${s.features.map(f => `<li class="card-feature">${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderBusinessSolutions() {
  const grid = document.getElementById('businessGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.business.map(s => `
    <div class="service-card reveal">
      <div class="card-icon">${s.icon}</div>
      <div class="card-tag">${s.tag}</div>
      <h3 class="card-title">${s.title}</h3>
      <p class="card-desc">${s.desc}</p>
      <ul class="card-features">
        ${s.features.map(f => `<li class="card-feature">${f}</li>`).join('')}
      </ul>
    </div>
  `).join('');
}

function renderAreas() {
  const grid = document.getElementById('areasGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.areas.map(a => `
    <div class="area-card reveal">
      <div class="area-flag">${a.flag}</div>
      <div class="area-name">${a.city}</div>
      <div class="area-desc">${a.desc}</div>
      <span class="area-status status-${a.status}">${a.status === 'active' ? '● Live' : '◌ Coming Soon'}</span>
    </div>
  `).join('');
}

function renderFAQ() {
  const grid = document.getElementById('faqGrid');
  if (!grid) return;
  grid.innerHTML = SERVICES_DATA.faq.map((item, i) => `
    <div class="faq-item reveal" data-index="${i}">
      <button class="faq-question" aria-expanded="false">
        <span>${item.q}</span>
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" role="region">
        <div class="faq-answer-inner">${item.a}</div>
      </div>
    </div>
  `).join('');

  // Bind FAQ toggle
  grid.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      // Close all
      grid.querySelectorAll('.faq-item').forEach(i => {
        i.classList.remove('open');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });
      if (!isOpen) {
        item.classList.add('open');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

// Auto-init
document.addEventListener('DOMContentLoaded', () => {
  renderPassengerServices();
  renderDeliveryServices();
  renderBusinessSolutions();
  renderAreas();
  renderFAQ();
});
