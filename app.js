const EVENTS = [
  // ── Y COMBINATOR ──────────────────────────────────────────────
  { id:'yc-s26-open', title:'YC Summer 2026 – Application Open [HIGH PRIORITY]', date:'2026-01-13', type:'Application Open', program:'Y Combinator Summer 2026', org:'Y Combinator', desc:'Applications open for YC S26. World\'s top accelerator: $500K for 7%. Alumni include Airbnb, Stripe, Coinbase.', link:'https://www.ycombinator.com/apply', priority:'HIGH PRIORITY', estimated:false },
  { id:'yc-s26-deadline', title:'YC Summer 2026 – Application Deadline [HIGH PRIORITY]', date:'2026-05-04', type:'Application Deadline', program:'Y Combinator Summer 2026', org:'Y Combinator', desc:'Final on-time deadline for YC Summer 2026 batch at 8 PM PT. Highly competitive (~2% acceptance). Late apps considered on rolling basis.', link:'https://www.ycombinator.com/apply', priority:'HIGH PRIORITY', estimated:false },
  { id:'yc-s26-start', title:'YC Summer 2026 – Program Start [HIGH PRIORITY]', date:'2026-06-15', type:'Program Start', program:'Y Combinator Summer 2026', org:'Y Combinator', desc:'3-month intensive batch begins in San Francisco. Weekly dinners, office hours with partners, and Demo Day prep.', link:'https://www.ycombinator.com', priority:'HIGH PRIORITY', estimated:true },
  { id:'yc-s26-demo', title:'YC Summer 2026 – Demo Day [HIGH PRIORITY]', date:'2026-09-10', type:'Program End', program:'Y Combinator Summer 2026', org:'Y Combinator', desc:'YC Demo Day: founders pitch to thousands of investors. Historically the biggest catalyst for seed rounds.', link:'https://www.ycombinator.com', priority:'HIGH PRIORITY', estimated:true },
  { id:'yc-w27-open', title:'YC Winter 2027 – Application Open [HIGH PRIORITY]', date:'2026-09-01', type:'Application Open', program:'Y Combinator Winter 2027', org:'Y Combinator', desc:'Applications open for the W27 batch. Apply immediately — YC reviews on rolling basis after open.', link:'https://www.ycombinator.com/apply', priority:'HIGH PRIORITY', estimated:true },
  { id:'yc-w27-deadline', title:'YC Winter 2027 – Application Deadline [HIGH PRIORITY]', date:'2026-10-12', type:'Application Deadline', program:'Y Combinator Winter 2027', org:'Y Combinator', desc:'On-time deadline for YC Winter 2027. Historically closes early October. Apply by 8 PM PT.', link:'https://www.ycombinator.com/apply', priority:'HIGH PRIORITY', estimated:true },

  // ── a16z SPEEDRUN ─────────────────────────────────────────────
  { id:'a16z-sr7-open', title:'a16z Speedrun SR007 – Application Open [HIGH PRIORITY]', date:'2026-03-01', type:'Application Open', program:'a16z Speedrun SR007', org:'Andreessen Horowitz', desc:'a16z\'s elite accelerator-style program for pre-seed founders. $1M+ in potential follow-on from a16z.', link:'https://a16z.com/speedrun', priority:'HIGH PRIORITY', estimated:false },
  { id:'a16z-sr7-deadline', title:'a16z Speedrun SR007 – Application Deadline [HIGH PRIORITY]', date:'2026-05-17', type:'Application Deadline', program:'a16z Speedrun SR007', org:'Andreessen Horowitz', desc:'Final deadline for SR007 cohort at 11:59 PM PT. One of the most prestigious VC-run programs for early-stage SaaS.', link:'https://a16z.com/speedrun', priority:'HIGH PRIORITY', estimated:false },
  { id:'a16z-sr7-start', title:'a16z Speedrun SR007 – Program Start [HIGH PRIORITY]', date:'2026-07-01', type:'Program Start', program:'a16z Speedrun SR007', org:'Andreessen Horowitz', desc:'Intensive founder curriculum with a16z partners. Direct path to Series A meetings.', link:'https://a16z.com/speedrun', priority:'HIGH PRIORITY', estimated:true },
  { id:'a16z-sr7-end', title:'a16z Speedrun SR007 – Program End [HIGH PRIORITY]', date:'2026-09-30', type:'Program End', program:'a16z Speedrun SR007', org:'Andreessen Horowitz', desc:'Cohort concludes with investor showcase and network access within a16z portfolio.', link:'https://a16z.com/speedrun', priority:'HIGH PRIORITY', estimated:true },

  // ── TECHSTARS ─────────────────────────────────────────────────
  { id:'ts-fall-open', title:'Techstars Fall 2026 – Application Open [MEDIUM]', date:'2026-03-01', type:'Application Open', program:'Techstars Fall 2026 (NYC / Chicago / Boston)', org:'Techstars', desc:'Multiple US city programs open for applications. $120K investment for 6% equity. Strong mentor network.', link:'https://www.techstars.com/accelerators', priority:'MEDIUM', estimated:false },
  { id:'ts-fall-deadline', title:'Techstars Fall 2026 – Application Deadline [MEDIUM]', date:'2026-06-10', type:'Application Deadline', program:'Techstars Fall 2026 (NYC / Chicago / Boston)', org:'Techstars', desc:'Final deadline across multiple US Techstars programs including NYC and Columbus. 3-month intensive follows.', link:'https://www.techstars.com/accelerators', priority:'MEDIUM', estimated:false },
  { id:'ts-fall-start', title:'Techstars Fall 2026 – Program Start [MEDIUM]', date:'2026-09-01', type:'Program Start', program:'Techstars Fall 2026 (NYC / Chicago / Boston)', org:'Techstars', desc:'13-week mentorship-driven program begins. Access to 10,000+ mentor network and alumni community.', link:'https://www.techstars.com', priority:'MEDIUM', estimated:true },
  { id:'ts-fall-end', title:'Techstars Fall 2026 – Demo Day [MEDIUM]', date:'2026-11-20', type:'Program End', program:'Techstars Fall 2026 (NYC / Chicago / Boston)', org:'Techstars', desc:'Demo Day presentation to investors, media, and community.', link:'https://www.techstars.com', priority:'MEDIUM', estimated:true },

  // ── SEQUOIA ARC ───────────────────────────────────────────────
  { id:'arc-h2-open', title:'Sequoia Arc H2 2026 – Application Open [HIGH PRIORITY]', date:'2026-06-01', type:'Application Open', program:'Sequoia Arc H2 2026', org:'Sequoia Capital', desc:'Bi-annual Sequoia program for pre-seed/seed founders. Intensive 8-week curriculum with Sequoia partners. No equity taken.', link:'https://www.sequoiacap.com/arc', priority:'HIGH PRIORITY', estimated:true },
  { id:'arc-h2-deadline', title:'Sequoia Arc H2 2026 – Application Deadline [HIGH PRIORITY]', date:'2026-07-15', type:'Application Deadline', program:'Sequoia Arc H2 2026', org:'Sequoia Capital', desc:'Estimated H2 application window close. Sequoia Arc runs twice per year; watch official site for exact dates.', link:'https://www.sequoiacap.com/arc', priority:'HIGH PRIORITY', estimated:true },
  { id:'arc-h2-start', title:'Sequoia Arc H2 2026 – Program Start [HIGH PRIORITY]', date:'2026-09-01', type:'Program Start', program:'Sequoia Arc H2 2026', org:'Sequoia Capital', desc:'8-week intensive begins. Cohort gets direct access to Sequoia partners, portfolio network, and potential Series A follow-on.', link:'https://www.sequoiacap.com/arc', priority:'HIGH PRIORITY', estimated:true },

  // ── PEARX ─────────────────────────────────────────────────────
  { id:'pearx-s26-open', title:'PearX S26 – Early Application Open [MEDIUM]', date:'2026-01-15', type:'Application Open', program:'PearX Summer 2026', org:'Pear VC', desc:'12-week in-person accelerator for pre-seed B2B SaaS startups. $250K investment, SF-based, strong enterprise network.', link:'https://www.pear.vc/pearx', priority:'MEDIUM', estimated:false },
  { id:'pearx-s26-early', title:'PearX S26 – Early Application Deadline [MEDIUM]', date:'2026-02-22', type:'Application Deadline', program:'PearX Summer 2026', org:'Pear VC', desc:'Early deadline for PearX S26. Earlier applications receive priority review from the Pear VC team.', link:'https://www.pear.vc/pearx', priority:'MEDIUM', estimated:false },
  { id:'pearx-s26-deadline', title:'PearX S26 – Regular Application Deadline [MEDIUM]', date:'2026-04-12', type:'Application Deadline', program:'PearX Summer 2026', org:'Pear VC', desc:'Final regular deadline for PearX S26 at 11:59 PM PST. Program kicks off July 2026.', link:'https://www.pear.vc/pearx', priority:'MEDIUM', estimated:false },
  { id:'pearx-s26-start', title:'PearX S26 – Program Start [MEDIUM]', date:'2026-07-06', type:'Program Start', program:'PearX Summer 2026', org:'Pear VC', desc:'12-week in-person cohort begins in San Francisco. Weekly sprints, investor intros, and enterprise sales training.', link:'https://www.pear.vc/pearx', priority:'MEDIUM', estimated:true },
  { id:'pearx-s26-end', title:'PearX S26 – Demo Day [MEDIUM]', date:'2026-09-25', type:'Program End', program:'PearX Summer 2026', org:'Pear VC', desc:'PearX Demo Day with curated investor audience from top SaaS-focused VCs.', link:'https://www.pear.vc/pearx', priority:'MEDIUM', estimated:true },

  // ── ANTLER US ─────────────────────────────────────────────────
  { id:'antler-us-open', title:'Antler US – Rolling Applications Open [MEDIUM]', date:'2026-05-01', type:'Application Open', program:'Antler US 2026', org:'Antler', desc:'Antler runs rolling intake for its NYC residency. Pre-idea and pre-team founders welcome. $250K for 10% equity.', link:'https://www.antler.co/location/usa', priority:'MEDIUM', estimated:false },
  { id:'antler-us-start', title:'Antler US – Cohort Kick-off [MEDIUM]', date:'2026-07-07', type:'Program Start', program:'Antler US 2026', org:'Antler', desc:'Estimated next cohort start in New York. 10-week residency to form teams, validate ideas, and receive seed investment.', link:'https://www.antler.co/location/usa', priority:'MEDIUM', estimated:true },

  // ── HF0 ───────────────────────────────────────────────────────
  { id:'hf0-open', title:'HF0 Residency – Rolling Applications [HIGH PRIORITY]', date:'2026-05-01', type:'Application Open', program:'HF0 Residency 2026', org:'HF0', desc:'Highly selective 12-week SF residency for technical repeat founders. $1M uncapped SAFE for 5%. ~1% acceptance rate.', link:'https://www.hf0.com/apply', priority:'HIGH PRIORITY', estimated:false },
  { id:'hf0-start', title:'HF0 Residency – Next Cohort Start [HIGH PRIORITY]', date:'2026-08-01', type:'Program Start', program:'HF0 Residency 2026', org:'HF0', desc:'Estimated next cohort. Residential in San Francisco, intense focus on shipping and technical depth.', link:'https://www.hf0.com', priority:'HIGH PRIORITY', estimated:true },

  // ── NEO ───────────────────────────────────────────────────────
  { id:'neo-open', title:'Neo Residency – Rolling Applications [HIGH PRIORITY]', date:'2026-05-01', type:'Application Open', program:'Neo Residency 2026', org:'Neo', desc:'3-month SF accelerator. $750K uncapped SAFE + $450K+ in cloud credits. For startup teams and student builders.', link:'https://neo.com', priority:'HIGH PRIORITY', estimated:false },
  { id:'neo-start', title:'Neo Residency – Next Cohort Start [HIGH PRIORITY]', date:'2026-09-01', type:'Program Start', program:'Neo Residency 2026', org:'Neo', desc:'Immersive SF residency begins. Founders get direct access to top-tier investors and technical mentors.', link:'https://neo.com', priority:'HIGH PRIORITY', estimated:true },

  // ── FORUM VENTURES ────────────────────────────────────────────
  { id:'forum-open', title:'Forum Ventures – Rolling B2B SaaS Applications [MEDIUM]', date:'2026-05-01', type:'Application Open', program:'Forum Ventures 2026', org:'Forum Ventures', desc:'Rolling intake B2B SaaS-focused accelerator. Pre-seed, $250K check. One of the most SaaS-specific programs in the US.', link:'https://www.forumvc.com', priority:'MEDIUM', estimated:false },
  { id:'forum-fall-start', title:'Forum Ventures – Fall Cohort Start [MEDIUM]', date:'2026-09-08', type:'Program Start', program:'Forum Ventures Fall 2026', org:'Forum Ventures', desc:'Estimated fall cohort. 12 weeks of B2B SaaS-specific mentorship, GTM support, and customer intros.', link:'https://www.forumvc.com', priority:'MEDIUM', estimated:true },

  // ── 500 GLOBAL ────────────────────────────────────────────────
  { id:'500-open', title:'500 Global – US Accelerator Applications [MEDIUM]', date:'2026-07-01', type:'Application Open', program:'500 Global Accelerator 2026', org:'500 Global', desc:'Rolling applications for 500 Global flagship batch. $150K for 6%. Strong network in SaaS, fintech, and growth-stage.', link:'https://500.co/accelerators', priority:'MEDIUM', estimated:true },
  { id:'500-deadline', title:'500 Global – Application Deadline [MEDIUM]', date:'2026-09-01', type:'Application Deadline', program:'500 Global Accelerator 2026', org:'500 Global', desc:'Estimated batch deadline. Check 500.co for current open batches and region-specific timelines.', link:'https://500.co/accelerators', priority:'MEDIUM', estimated:true },

  // ── GOOGLE FOR STARTUPS ───────────────────────────────────────
  { id:'gfs-open', title:'Google for Startups Accelerator – AI Applications [MEDIUM]', date:'2026-06-01', type:'Application Open', program:'Google for Startups Accelerator 2026', org:'Google', desc:'Equity-free 10-week accelerator for AI-first startups. Up to $350K in cloud credits + Google expert mentorship.', link:'https://startup.google.com/accelerator/', priority:'MEDIUM', estimated:true },
  { id:'gfs-deadline', title:'Google for Startups Accelerator – Application Deadline [MEDIUM]', date:'2026-07-31', type:'Application Deadline', program:'Google for Startups Accelerator 2026', org:'Google', desc:'Estimated deadline for next US cohort. Equity-free with Google engineer mentors and Cloud credits.', link:'https://startup.google.com', priority:'MEDIUM', estimated:true },

  // ── MICROSOFT FOR STARTUPS ────────────────────────────────────
  { id:'msft-open', title:'Microsoft for Startups Founders Hub – Always Open [MEDIUM]', date:'2026-05-05', type:'Application Open', program:'Microsoft for Startups Founders Hub', org:'Microsoft', desc:'Always-on program. $150K+ in Azure credits, GitHub, OpenAI API access. No pitch required — milestone-based.', link:'https://www.microsoft.com/en-us/startups', priority:'MEDIUM', estimated:false },

  // ── AWS ACTIVATE ──────────────────────────────────────────────
  { id:'aws-open', title:'AWS Activate Portfolio – Always Open [MEDIUM]', date:'2026-05-05', type:'Application Open', program:'AWS Activate Portfolio 2026', org:'Amazon Web Services', desc:'Up to $100K in AWS credits for pre-Series B startups affiliated with approved accelerators or VCs. Instant infra boost.', link:'https://aws.amazon.com/activate', priority:'MEDIUM', estimated:false },

  // ── SOMA CAPITAL ─────────────────────────────────────────────
  { id:'soma-open', title:'Soma Capital – Rolling Pre-Seed Applications [NICHE]', date:'2026-05-01', type:'Application Open', program:'Soma Capital 2026', org:'Soma Capital', desc:'YC-heavy seed fund. $100K–$1M uncapped SAFE for SaaS/B2B/AI. Fast decisions, founder-friendly terms, warm intro preferred.', link:'https://www.somacapital.com', priority:'NICHE', estimated:false },

  // ── FIRST ROUND FAST TRACK ────────────────────────────────────
  { id:'fr-open', title:'First Round Fast Track – Application Open [HIGH PRIORITY]', date:'2026-06-01', type:'Application Open', program:'First Round Fast Track 2026', org:'First Round Capital', desc:'Structured seed program with direct introductions to First Round\'s portfolio network. For pre-seed B2B SaaS founders.', link:'https://fasttrack.firstround.com', priority:'HIGH PRIORITY', estimated:true },
  { id:'fr-deadline', title:'First Round Fast Track – Application Deadline [HIGH PRIORITY]', date:'2026-07-15', type:'Application Deadline', program:'First Round Fast Track 2026', org:'First Round Capital', desc:'Estimated deadline for H2 cohort. First Round is known for founder-first culture and strong enterprise SaaS network.', link:'https://fasttrack.firstround.com', priority:'HIGH PRIORITY', estimated:true },

  // ── PIONEER ───────────────────────────────────────────────────
  { id:'pioneer-open', title:'Pioneer Tournament – Monthly Applications [NICHE]', date:'2026-05-01', type:'Application Open', program:'Pioneer Tournament 2026', org:'Pioneer', desc:'Monthly online tournament for early-stage founders worldwide. Winners get $10K + community access. Rolling monthly.', link:'https://pioneer.app', priority:'NICHE', estimated:false },

  // ── ENTREPRENEUR FIRST ────────────────────────────────────────
  { id:'ef-open', title:'Entrepreneur First US – Rolling Applications [NICHE]', date:'2026-05-01', type:'Application Open', program:'Entrepreneur First US 2026', org:'Entrepreneur First', desc:'Pre-team, pre-idea talent investor. Matches technical co-founders and funds team formation. $150K investment.', link:'https://www.joinef.com', priority:'NICHE', estimated:false },
  { id:'ef-start', title:'Entrepreneur First US – Cohort Start [NICHE]', date:'2026-09-01', type:'Program Start', program:'Entrepreneur First US 2026', org:'Entrepreneur First', desc:'Estimated next US cohort. 3-month in-residence program for solo founders seeking technical co-founders.', link:'https://www.joinef.com', priority:'NICHE', estimated:true },

  // ── LSVP IGNITION ─────────────────────────────────────────────
  { id:'lsvp-open', title:'LSVP Ignition – Application Open [NICHE]', date:'2026-07-01', type:'Application Open', program:'LSVP Ignition 2026', org:'Lightspeed Venture Partners', desc:'Lightspeed\'s early-stage SaaS program. Intensive mentorship, direct access to Lightspeed partners, potential seed investment.', link:'https://lsvp.com/ignition', priority:'NICHE', estimated:true },
  { id:'lsvp-deadline', title:'LSVP Ignition – Application Deadline [NICHE]', date:'2026-08-15', type:'Application Deadline', program:'LSVP Ignition 2026', org:'Lightspeed Venture Partners', desc:'Estimated deadline. Lightspeed focuses on enterprise SaaS and AI-native companies at the seed stage.', link:'https://lsvp.com', priority:'NICHE', estimated:true },

  // ── BOOST VC ──────────────────────────────────────────────────
  { id:'boost-open', title:'Boost VC – Tribe Rolling Applications [NICHE]', date:'2026-05-01', type:'Application Open', program:'Boost VC Tribe 2026', org:'Boost VC', desc:'SF-based accelerator focused on frontier tech. $500K investment. Rolling intake for deep-tech and SaaS hybrid founders.', link:'https://www.boost.vc', priority:'NICHE', estimated:false },
];

// ── Helpers ──────────────────────────────────────────────────────
const TODAY = new Date();

function parseDate(str) {
  const [y,m,d] = str.split('-').map(Number);
  return new Date(y, m-1, d);
}

function formatDateBox(str) {
  const d = parseDate(str);
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return { month: months[d.getMonth()], day: d.getDate(), year: d.getFullYear() };
}

function getTypeCls(type) {
  if (type === 'Application Open') return 'type-open';
  if (type === 'Application Deadline') return 'type-deadline';
  if (type === 'Program Start') return 'type-start';
  return 'type-end';
}

function getPriorityCls(p) {
  if (p === 'HIGH PRIORITY') return 'high';
  if (p === 'MEDIUM') return 'medium';
  return 'niche';
}

function isPast(dateStr) {
  return parseDate(dateStr) < TODAY;
}

function buildGoogleCalUrl(e) {
  const d = parseDate(e.date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const dateStr = `${y}${m}${day}`;
  // All-day event: end date is the next day
  const next = new Date(d);
  next.setDate(next.getDate() + 1);
  const ny = next.getFullYear();
  const nm = String(next.getMonth() + 1).padStart(2, '0');
  const nd = String(next.getDate()).padStart(2, '0');
  const endStr = `${ny}${nm}${nd}`;
  const title = encodeURIComponent(e.title.replace(/ \[(HIGH PRIORITY|MEDIUM|NICHE)\]$/, ''));
  const details = encodeURIComponent(e.desc + '\n\n' + e.link);
  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dateStr}/${endStr}&details=${details}`;
}

function groupByMonth(events) {
  const groups = {};
  events.forEach(e => {
    const d = parseDate(e.date);
    const key = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}`;
    const label = d.toLocaleDateString('en-US', { month:'long', year:'numeric' });
    if (!groups[key]) groups[key] = { label, events:[] };
    groups[key].events.push(e);
  });
  return Object.values(groups).sort((a,b) => a.events[0].date.localeCompare(b.events[0].date));
}

// ── State ─────────────────────────────────────────────────────────
let activeType = 'all';
let activePriority = 'all';
let searchQuery = '';

function getFiltered() {
  return EVENTS
    .filter(e => activeType === 'all' || e.type === activeType)
    .filter(e => activePriority === 'all' || e.priority === activePriority)
    .filter(e => {
      const q = searchQuery.toLowerCase();
      return !q || e.title.toLowerCase().includes(q) || e.org.toLowerCase().includes(q) || e.program.toLowerCase().includes(q);
    })
    .sort((a,b) => a.date.localeCompare(b.date));
}

// ── Render ────────────────────────────────────────────────────────
function render() {
  const filtered = getFiltered();
  const list = document.getElementById('calendar-list');
  const empty = document.getElementById('empty-state');

  if (!filtered.length) {
    list.innerHTML = '';
    empty.style.display = 'block';
  } else {
    empty.style.display = 'none';
    const groups = groupByMonth(filtered);
    list.innerHTML = groups.map(g => `
      <div class="month-group">
        <div class="month-heading">${g.label}</div>
        ${g.events.map(e => renderCard(e)).join('')}
      </div>
    `).join('');
    list.querySelectorAll('.event-card').forEach(card => {
      card.addEventListener('click', () => openModal(card.dataset.id));
    });
  }

  updateStats(filtered);
}

function renderCard(e) {
  const {month, day} = formatDateBox(e.date);
  const past = isPast(e.date) ? 'past' : '';
  const pLabel = e.priority === 'HIGH PRIORITY' ? 'HIGH' : e.priority === 'MEDIUM' ? 'MED' : 'NICHE';
  const gcalUrl = buildGoogleCalUrl(e);
  return `
    <div class="event-card ${past}" data-type="${e.type}" data-id="${e.id}">
      <div class="event-date-box">
        <span class="event-date-month">${month}</span>
        <span class="event-date-day">${day}</span>
        ${e.estimated ? '<span class="event-date-est">Est.</span>' : ''}
      </div>
      <div class="event-info">
        <div class="event-title">${e.title.replace(/ \[(HIGH PRIORITY|MEDIUM|NICHE)\]$/,'')}</div>
        <div class="event-meta-row">
          <span class="event-org">${e.org}</span>
          <span class="event-type-badge ${getTypeCls(e.type)}">${e.type}</span>
          <a href="${gcalUrl}" target="_blank" rel="noopener" class="add-to-cal" title="Add to Google Calendar" onclick="event.stopPropagation()">📅 Add to Calendar</a>
        </div>
        <div class="event-desc-short">${e.desc}</div>
      </div>
      <div class="event-priority">
        <span class="priority-badge ${getPriorityCls(e.priority)}">${pLabel}</span>
      </div>
    </div>
  `;
}

function updateStats(filtered) {
  const upcoming = filtered.filter(e => !isPast(e.date)).length;
  const programs = new Set(filtered.map(e => e.program)).size;
  const high = filtered.filter(e => e.priority === 'HIGH PRIORITY').length;
  document.getElementById('stat-total').textContent = filtered.length;
  document.getElementById('stat-upcoming').textContent = upcoming;
  document.getElementById('stat-programs').textContent = programs;
  document.getElementById('stat-high').textContent = high;
}

// ── Modal ─────────────────────────────────────────────────────────
function openModal(id) {
  const e = EVENTS.find(ev => ev.id === id);
  if (!e) return;
  const overlay = document.getElementById('modal-overlay');
  const badge = document.getElementById('modal-badge');
  const pCls = getPriorityCls(e.priority);
  const pLabel = e.priority === 'HIGH PRIORITY' ? '🔥 High Priority' : e.priority === 'MEDIUM' ? '⚡ Medium' : '💎 Niche';
  badge.className = `modal-badge priority-badge ${pCls}`;
  badge.textContent = pLabel;
  document.getElementById('modal-title').textContent = e.program + ' — ' + e.type;
  document.getElementById('modal-meta').innerHTML = `
    <div class="modal-meta-row"><span class="modal-meta-label">Date</span><span class="modal-meta-value">${e.date}${e.estimated?' (Estimated)':''}</span></div>
    <div class="modal-meta-row"><span class="modal-meta-label">Type</span><span class="modal-meta-value">${e.type}</span></div>
    <div class="modal-meta-row"><span class="modal-meta-label">Org</span><span class="modal-meta-value">${e.org}</span></div>
    <div class="modal-meta-row"><span class="modal-meta-label">Program</span><span class="modal-meta-value">${e.program}</span></div>
  `;
  document.getElementById('modal-desc').textContent = e.desc;
  document.getElementById('modal-link').href = e.link;
  document.getElementById('modal-gcal').href = buildGoogleCalUrl(e);
  overlay.style.display = 'flex';
}

document.getElementById('modal-close').addEventListener('click', () => {
  document.getElementById('modal-overlay').style.display = 'none';
});
document.getElementById('modal-overlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) e.currentTarget.style.display = 'none';
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') document.getElementById('modal-overlay').style.display = 'none';
});

// ── Filters ───────────────────────────────────────────────────────
document.getElementById('filter-chips').addEventListener('click', e => {
  const chip = e.target.closest('.chip');
  if (!chip) return;
  document.querySelectorAll('.chip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  activeType = chip.dataset.filter;
  render();
});

document.getElementById('priority-filter').addEventListener('click', e => {
  const chip = e.target.closest('.pchip');
  if (!chip) return;
  document.querySelectorAll('.pchip').forEach(c => c.classList.remove('active'));
  chip.classList.add('active');
  activePriority = chip.dataset.priority;
  render();
});

document.getElementById('search-input').addEventListener('input', e => {
  searchQuery = e.target.value;
  render();
});

// ── Init ──────────────────────────────────────────────────────────
render();
