'use strict';

// ─────────────────────────────────────────────
//  PRINTING IDENTIFICATION DATABASE
// ─────────────────────────────────────────────
const PRINT_GUIDES = {
  "player's handbook": {
    system: "D&D 1st Edition",
    tips: [
      { title: "Back cover price", text: "The 1st printing lists $9.95 on the back cover. The 2nd printing shows $10.00, and later printings rose to $12.00 and higher. This is the single fastest check." },
      { title: "Number line on copyright page", text: "From the 3rd printing onward, a descending number line appears (e.g. '10 9 8 7 6 5 4 3'). The lowest number shown is the printing. No number line means 1st or 2nd printing — cross-check with cover price." },
      { title: "TSR logo and cover art", text: "The 1st and 2nd printings use the original Trampier cover without the revised TSR logo badge. A badge added to the lower-right corner of the cover indicates the 4th printing or later." },
      { title: "Spine text", text: "The earliest printings spell out 'ADVANCED DUNGEONS & DRAGONS' in full on the spine. Later printings abbreviated this to 'AD&D'." }
    ]
  },
  "dungeon master's guide": {
    system: "D&D 1st Edition",
    tips: [
      { title: "Back cover price", text: "The 1st printing shows $12.00. Later printings show $15.00 and then higher. The 1st printing is the only one without an ISBN on the back cover." },
      { title: "Number line", text: "Check the copyright page for a descending number line. The 1st and 2nd printings have none; printings 3 onward include it. The lowest digit is the printing number." },
      { title: "Interior art credits page", text: "The 1st printing's art credits page is laid out differently from later editions — the credits are listed in a single column rather than two columns. Check page 4." },
      { title: "Erol Otus cover", text: "All 1st edition DMG printings use the Erol Otus cover. If the cover is different, it is a reprint or a different edition entirely." }
    ]
  },
  "monster manual": {
    system: "D&D 1st Edition",
    tips: [
      { title: "Cover price", text: "The 1st printing is priced at $9.95, 2nd printing $10.00. Later printings show $12.00 and above. No ISBN appears on the earliest printings." },
      { title: "Copyright page number line", text: "As with all 1st edition AD&D books, a number line was added starting with the 3rd printing. Absence of a number line with a $9.95 cover price strongly suggests a 1st printing." },
      { title: "Interior paper", text: "The earliest printings used slightly off-white paper stock. If the interior pages are bright white, it is almost certainly a later printing or reprint." },
      { title: "Trampier vs. Sutherland cover", text: "The 1st printing cover is by David Sutherland and David Trampier. Some later printings adjusted the color saturation slightly — a noticeably faded or oversaturated cover can indicate a later print run." }
    ]
  },
  "call of cthulhu": {
    system: "Chaosium",
    tips: [
      { title: "ISBN presence", text: "The true 1st printing of the 1st edition has no ISBN anywhere on the book. An ISBN on the back cover means it is a 2nd printing or later." },
      { title: "Cover art version", text: "The original 1st edition cover features a distinctive tentacled image. Later editions redesigned the cover entirely. A softcover box-set version also exists and is distinct from the standalone book." },
      { title: "Interior paper color", text: "The earliest printings used cream or off-white paper. Later print runs switched to brighter white paper stock. Yellowing in an otherwise clean copy is often a sign of an early printing." },
      { title: "Copyright page wording", text: "The 1st printing states 'First Printing' explicitly. Later printings added a number line. Check whether the copyright page references any subsequent printings or revised editions." }
    ]
  },
  "fiend folio": {
    system: "D&D 1st Edition",
    tips: [
      { title: "Publisher details", text: "The Fiend Folio was originally published by Games Workshop in the UK in 1981, then by TSR in the US. UK and US printings differ in cover price currency and minor layout details." },
      { title: "Cover price", text: "UK editions show a pound sterling price; US editions show USD. The original UK printing is generally considered the 1st printing. The US TSR version is a separate print run." },
      { title: "Number line", text: "US TSR printings include a number line on the copyright page from the 1st US printing onward. The lowest digit identifies the printing number." },
      { title: "Content differences", text: "The UK first printing includes a foreword by Don Turnbull. Some US printings omitted or altered this. Compare the opening pages to determine origin." }
    ]
  },
  "unearthed arcana": {
    system: "D&D 1st Edition",
    tips: [
      { title: "Known errata", text: "The 1st printing of Unearthed Arcana is notorious for printing errors and incomplete text. Subsequent printings corrected many of these. A book with visible text errors or cutoff tables is almost certainly a 1st printing." },
      { title: "Cover price", text: "The 1st printing lists $12.00 on the back. Later printings show $15.00." },
      { title: "Number line", text: "Check the copyright page for a descending number line. The 1st printing lacks one or shows all digits present. Later printings will show fewer digits as earlier numbers are removed." },
      { title: "Page 124 test", text: "A well-known 1st printing error appears on page 124, where a table is visibly misaligned or cut off. If the table on that page appears complete and readable, it is likely a corrected later printing." }
    ]
  },
  "warhammer fantasy roleplay": {
    system: "Games Workshop / Hogshead",
    tips: [
      { title: "Publisher on spine and cover", text: "The original 1st edition 1st printing was published by Games Workshop in 1986. Later printings were handled by Hogshead Publishing. The publisher name on the cover and spine immediately identifies the era." },
      { title: "Cover art", text: "The original GW printing features the iconic John Sibbick cover art. Hogshead reprints used the same art but with slightly different cover layout and barcode placement." },
      { title: "Price and barcode", text: "The original GW printing has a UK price only and a GW-style barcode. Hogshead printings added international pricing. Absence of a barcode entirely indicates a very early copy." },
      { title: "Interior credits", text: "The GW 1st printing credits page lists the original GW team. Hogshead editions updated the credits to reflect the new publisher and often added a foreword explaining the reprint." }
    ]
  },
  "shadowrun": {
    system: "FASA",
    tips: [
      { title: "Cover art version", text: "The original 1st edition 1st printing features a specific urban street scene cover. FASA revised the cover art for the 2nd printing. Compare the figures and cityscape for differences in detail and color." },
      { title: "Catalog number", text: "FASA printed a catalog number on the back cover. The 1st edition 1st printing uses catalog number 7001. This is the most reliable single identifier." },
      { title: "Spiral binding vs. perfect bound", text: "Some very early copies of the 1st printing were spiral-bound rather than perfect-bound. A spiral-bound copy is almost certainly a 1st printing." },
      { title: "Copyright page date", text: "The 1st printing copyright reads 1989. The 2nd printing was 1990. Check the year on the copyright page, then cross-reference with catalog number." }
    ]
  }
};

// ─────────────────────────────────────────────
//  SAMPLE COLLECTION DATA
// ─────────────────────────────────────────────
const SAMPLE_BOOKS = [
  {
    id: 'b1', title: "Player's Handbook", system: "D&D", publisher: "TSR",
    edition: "1st Edition", printing: "6th Printing", year: "1978",
    condition: "Good", emoji: "📖", color: "#6B1A1A",
    notes: "Slight wear on corners, spine intact. Original owner's name on first page.",
    priceLow: 45, priceMid: 120, priceHigh: 340, priceUpdated: "Jun 2026"
  },
  {
    id: 'b2', title: "Dungeon Master's Guide", system: "D&D", publisher: "TSR",
    edition: "1st Edition", printing: "1st Printing", year: "1979",
    condition: "Very Good", emoji: "📕", color: "#4A1A0A",
    notes: "1st printing confirmed — no ISBN, $12 cover price. Minor shelf wear.",
    priceLow: 80, priceMid: 210, priceHigh: 580, priceUpdated: "Jun 2026"
  },
  {
    id: 'b3', title: "Call of Cthulhu", system: "Call of Cthulhu", publisher: "Chaosium",
    edition: "2nd Edition", printing: "1st Printing", year: "1983",
    condition: "Very Good+", emoji: "📘", color: "#1A3A5C",
    notes: "No ISBN on back cover — confirms 1st printing. Cream paper interior.",
    priceLow: 30, priceMid: 85, priceHigh: 195, priceUpdated: "Jun 2026"
  },
  {
    id: 'b4', title: "Warhammer Fantasy Roleplay", system: "Warhammer", publisher: "Games Workshop",
    edition: "1st Edition", printing: "1st Printing", year: "1986",
    condition: "Good", emoji: "📙", color: "#2A1A3A",
    notes: "GW first printing with original Sibbick cover. Spine slightly cracked.",
    priceLow: 60, priceMid: 180, priceHigh: 420, priceUpdated: "Jun 2026"
  },
  {
    id: 'b5', title: "Shadowrun", system: "Shadowrun", publisher: "FASA",
    edition: "1st Edition", printing: "2nd Printing", year: "1989",
    condition: "Very Good+", emoji: "📗", color: "#0A2A1A",
    notes: "FASA cat# 7001. Revised cover art confirms 2nd printing.",
    priceLow: 55, priceMid: 140, priceHigh: 310, priceUpdated: "Jun 2026"
  },
  {
    id: 'b6', title: "Monster Manual", system: "D&D", publisher: "TSR",
    edition: "1st Edition", printing: "3rd Printing", year: "1977",
    condition: "Fair", emoji: "📔", color: "#5A3A0A",
    notes: "Number line shows 3rd printing. Cover shows significant wear.",
    priceLow: 20, priceMid: 55, priceHigh: 140, priceUpdated: "Jun 2026"
  }
];

const SAMPLE_WISHLIST = [
  { id: 'w1', title: "Fiend Folio", system: "D&D 1st Ed", emoji: "📒" },
  { id: 'w2', title: "Unearthed Arcana", system: "D&D 1st Ed", emoji: "📓" },
  { id: 'w3', title: "Deities & Demigods", system: "D&D 1st Ed", emoji: "📃" }
];

// ─────────────────────────────────────────────
//  STATE
// ─────────────────────────────────────────────
let state = {
  books: [],
  wishlist: [],
  currentScreen: 'collection',
  detailId: null,
  filterSystem: 'All',
  searchQuery: ''
};

function loadState() {
  try {
    const saved = localStorage.getItem('rpgvault_books');
    const savedWish = localStorage.getItem('rpgvault_wishlist');
    state.books = saved ? JSON.parse(saved) : [...SAMPLE_BOOKS];
    state.wishlist = savedWish ? JSON.parse(savedWish) : [...SAMPLE_WISHLIST];
  } catch(e) {
    state.books = [...SAMPLE_BOOKS];
    state.wishlist = [...SAMPLE_WISHLIST];
  }
}

function saveBooks() {
  try { localStorage.setItem('rpgvault_books', JSON.stringify(state.books)); } catch(e) {}
}

function saveWishlist() {
  try { localStorage.setItem('rpgvault_wishlist', JSON.stringify(state.wishlist)); } catch(e) {}
}

// ─────────────────────────────────────────────
//  UTILITIES
// ─────────────────────────────────────────────
function uid() { return 'b' + Date.now() + Math.random().toString(36).slice(2,6); }

function condClass(cond) {
  const map = {
    'Fine': 'cond-nm', 'Near Mint': 'cond-nm', 'Very Good+': 'cond-vgp', 'VG+': 'cond-vgp',
    'Very Good': 'cond-vg', 'VG': 'cond-vg', 'Good': 'cond-gd',
    'Fair': 'cond-fr', 'Poor': 'cond-pr'
  };
  return map[cond] || 'badge-cond';
}

function fmtMoney(n) { return n ? '$' + Number(n).toLocaleString() : '—'; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2400);
}

function systemEmoji(sys) {
  const map = { 'D&D': '🐉', 'Call of Cthulhu': '🐙', 'Pathfinder': '⚔️',
    'Warhammer': '💀', 'Shadowrun': '🤖', 'Traveller': '🚀',
    'Runequest': '🌿', 'GURPS': '📐' };
  for (const k in map) { if (sys && sys.includes(k)) return map[k]; }
  return '📚';
}

// ─────────────────────────────────────────────
//  NAV
// ─────────────────────────────────────────────
function showScreen(name) {
  state.currentScreen = name;
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  const screen = document.getElementById('screen-' + name);
  if (screen) screen.classList.add('active');
  const navBtn = document.querySelector('.nav-btn[data-screen="' + name + '"]');
  if (navBtn) navBtn.classList.add('active');

  // special screens without nav
  ['cameraView','formView','detailView'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.classList.remove('active');
  });

  if (name === 'collection') renderCollection();
  if (name === 'stats') renderStats();
  if (name === 'wishlist') renderWishlist();
}

function showDetail(id) {
  state.detailId = id;
  const book = state.books.find(b => b.id === id);
  if (!book) return;

  // hide main screens, show detail
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
  document.getElementById('detailView').classList.add('active');

  renderDetail(book);
  document.getElementById('detailView').querySelector('.scroll-body').scrollTop = 0;
}

function showAddMenu() {
  showScreen('add');
}

function showCamera() {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('cameraView').classList.add('active');
  startCamera();
}

function showForm(prefill) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.getElementById('detailView').classList.remove('active');
  document.getElementById('cameraView').classList.remove('active');
  document.getElementById('formView').classList.add('active');
  populateForm(prefill || {});
}

function goBack() {
  stopCamera();
  document.getElementById('cameraView').classList.remove('active');
  document.getElementById('detailView').classList.remove('active');
  document.getElementById('formView').classList.remove('active');
  showScreen('collection');
}

// ─────────────────────────────────────────────
//  COLLECTION RENDER
// ─────────────────────────────────────────────
function getFilteredBooks() {
  let books = state.books;
  if (state.filterSystem !== 'All') {
    books = books.filter(b => b.system === state.filterSystem);
  }
  if (state.searchQuery) {
    const q = state.searchQuery.toLowerCase();
    books = books.filter(b =>
      b.title.toLowerCase().includes(q) ||
      (b.system || '').toLowerCase().includes(q) ||
      (b.publisher || '').toLowerCase().includes(q) ||
      (b.edition || '').toLowerCase().includes(q)
    );
  }
  return books;
}

function getSystems() {
  const s = new Set(state.books.map(b => b.system).filter(Boolean));
  return ['All', ...Array.from(s).sort()];
}

function renderCollection() {
  // subtitle
  document.getElementById('collectionCount').textContent =
    state.books.length + ' book' + (state.books.length !== 1 ? 's' : '') + ' in collection';

  // filters
  const filterRow = document.getElementById('filterRow');
  filterRow.innerHTML = getSystems().map(sys =>
    `<button class="chip${sys === state.filterSystem ? ' active' : ''}" onclick="setFilter('${sys}')">${sys}</button>`
  ).join('');

  const books = getFilteredBooks();
  const list = document.getElementById('bookList');

  if (books.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📚</div>
      <h3>${state.books.length === 0 ? 'Your vault is empty' : 'No books match'}</h3>
      <p>${state.books.length === 0
        ? 'Tap the + button to add your first book.'
        : 'Try a different search or filter.'}</p>
    </div>`;
    return;
  }

  list.innerHTML = books.map(b => `
    <div class="book-card" onclick="showDetail('${b.id}')">
      <div class="book-spine" style="background:${b.color || '#3A2010'}">
        ${b.coverImg ? `<img src="${b.coverImg}" alt="${b.title}">` : `<span>${b.emoji || '📖'}</span>`}
        <span class="spine-abbr">${(b.system||'').slice(0,4).toUpperCase()}</span>
      </div>
      <div class="book-info">
        <div class="book-title">${b.title}</div>
        <div class="book-meta">${[b.system, b.edition, b.year].filter(Boolean).join(' • ')}</div>
        <div class="badge-row">
          <span class="badge badge-ed">${b.edition || 'Unknown'}</span>
          ${b.printing ? `<span class="badge badge-print">${b.printing}</span>` : ''}
          <span class="badge ${condClass(b.condition)}">${b.condition || 'Unknown'}</span>
        </div>
        <div class="price-row-mini">
          <span>Low <span class="pv price-low">${fmtMoney(b.priceLow)}</span></span>
          <span>Mid <span class="pv price-mid">${fmtMoney(b.priceMid)}</span></span>
          <span>High <span class="pv price-high">${fmtMoney(b.priceHigh)}</span></span>
        </div>
      </div>
    </div>
  `).join('');
}

function setFilter(sys) {
  state.filterSystem = sys;
  renderCollection();
}

function handleSearch(e) {
  state.searchQuery = e.target.value;
  renderCollection();
}

// ─────────────────────────────────────────────
//  DETAIL RENDER
// ─────────────────────────────────────────────
function renderDetail(book) {
  document.getElementById('detailTitle').textContent = book.title;

  document.getElementById('detailHero').innerHTML = `
    <div class="detail-cover" style="background:${book.color || '#3A2010'}">
      ${book.coverImg ? `<img src="${book.coverImg}" alt="${book.title}">` : `<span>${book.emoji || '📖'}</span>`}
    </div>
    <div class="detail-hero-info">
      <h3>${book.title}</h3>
      <p class="meta">${[book.publisher, book.edition, book.year].filter(Boolean).join(' • ')}</p>
      <div class="badge-row">
        <span class="badge badge-ed">${book.edition || 'Unknown'}</span>
        ${book.printing ? `<span class="badge badge-print">${book.printing}</span>` : ''}
        <span class="badge ${condClass(book.condition)}">${book.condition || 'Unknown'}</span>
      </div>
    </div>
  `;

  document.getElementById('detailPrices').innerHTML = `
    <div class="price-card-header">📊 Market prices · eBay sold listings</div>
    <div class="price-three">
      <div class="price-col low">
        <div class="plabel">Low</div>
        <div class="pval">${fmtMoney(book.priceLow)}</div>
        <div class="psub">floor</div>
      </div>
      <div class="price-col mid">
        <div class="plabel">Mid</div>
        <div class="pval">${fmtMoney(book.priceMid)}</div>
        <div class="psub">average</div>
      </div>
      <div class="price-col high">
        <div class="plabel">High</div>
        <div class="pval">${fmtMoney(book.priceHigh)}</div>
        <div class="psub">peak</div>
      </div>
    </div>
    <div class="price-note">Estimates based on recent eBay sold listings for this edition and condition. Actual sale price varies with printing, completeness, and buyer demand. Updated ${book.priceUpdated || 'recently'}.</div>
  `;

  // Printing guide
  const titleKey = book.title.toLowerCase().replace(/[^a-z\s']/g, '').trim();
  const guide = PRINT_GUIDES[titleKey];
  const printHtml = guide ? `
    <div class="print-card">
      <div class="print-card-header">🔍 How to identify the printing</div>
      ${guide.tips.map((tip, i) => `
        <div class="print-tip">
          <div class="print-tip-num">${i + 1}</div>
          <div class="print-tip-text"><strong>${tip.title}:</strong> ${tip.text}</div>
        </div>
      `).join('')}
    </div>
  ` : `
    <div class="print-card">
      <div class="print-card-header">🔍 Printing identification</div>
      <div class="print-tip">
        <div class="print-tip-num">📌</div>
        <div class="print-tip-text">
          <strong>General tips:</strong> Check the copyright page for a number line (the lowest digit = printing number), look for cover price differences between printings, and check whether an ISBN is present — many 1st printings predate ISBN assignment.
        </div>
      </div>
      <div class="print-tip">
        <div class="print-tip-num">📌</div>
        <div class="print-tip-text">
          <strong>Resources:</strong> The Acaeum (acaeum.com) is the definitive reference for identifying TSR D&D printings. For Chaosium titles, the DTRPG product listings often note printing differences.
        </div>
      </div>
    </div>
  `;

  const notesHtml = book.notes ? `
    <div class="notes-card">
      <div class="notes-card-header">📝 Your notes</div>
      <div class="notes-text">${book.notes}</div>
    </div>
  ` : '';

  document.getElementById('detailExtra').innerHTML = printHtml + notesHtml;
}

// ─────────────────────────────────────────────
//  STATS RENDER
// ─────────────────────────────────────────────
function renderStats() {
  const books = state.books;
  const totalMid = books.reduce((a, b) => a + (Number(b.priceMid) || 0), 0);
  const firstPrints = books.filter(b => b.printing && b.printing.toLowerCase().includes('1st')).length;

  const sysCounts = {};
  books.forEach(b => { sysCounts[b.system || 'Unknown'] = (sysCounts[b.system || 'Unknown'] || 0) + 1; });
  const sysArr = Object.entries(sysCounts).sort((a, b) => b[1] - a[1]);
  const maxCount = sysArr.length ? sysArr[0][1] : 1;

  document.getElementById('statTiles').innerHTML = `
    <div class="stat-tile"><div class="sn">${books.length}</div><div class="sl">Total books</div></div>
    <div class="stat-tile"><div class="sn">${Object.keys(sysCounts).length}</div><div class="sl">Game systems</div></div>
    <div class="stat-tile"><div class="sn green">$${totalMid.toLocaleString()}</div><div class="sl">Est. mid value</div></div>
    <div class="stat-tile"><div class="sn">${firstPrints}</div><div class="sl">1st printings</div></div>
  `;

  document.getElementById('statBars').innerHTML = sysArr.map(([sys, count]) => `
    <div class="bar-group">
      <div class="bar-label"><span>${sys}</span><span>${count} book${count !== 1 ? 's' : ''}</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${Math.round(count / maxCount * 100)}%"></div></div>
    </div>
  `).join('');
}

// ─────────────────────────────────────────────
//  WISHLIST RENDER
// ─────────────────────────────────────────────
function renderWishlist() {
  const list = document.getElementById('wishList');
  if (state.wishlist.length === 0) {
    list.innerHTML = `<div class="empty-state">
      <div class="empty-icon">💛</div>
      <h3>Wishlist is empty</h3>
      <p>Books you're hunting for go here. Tap + to add one.</p>
    </div>`;
    return;
  }
  list.innerHTML = state.wishlist.map(w => `
    <div class="wish-card">
      <div class="wish-icon">${w.emoji || '📚'}</div>
      <div class="wish-info">
        <h4>${w.title}</h4>
        <p>${w.system || ''}</p>
      </div>
      <button class="wish-del" onclick="removeWish('${w.id}')" aria-label="Remove">✕</button>
    </div>
  `).join('');
}

function removeWish(id) {
  state.wishlist = state.wishlist.filter(w => w.id !== id);
  saveWishlist();
  renderWishlist();
}

function addWishItem() {
  const title = prompt('Book title to add to wishlist:');
  if (!title || !title.trim()) return;
  const system = prompt('Game system (e.g. D&D, Call of Cthulhu):') || '';
  state.wishlist.push({ id: uid(), title: title.trim(), system: system.trim(), emoji: systemEmoji(system) });
  saveWishlist();
  renderWishlist();
  showToast('Added to wishlist');
}

// ─────────────────────────────────────────────
//  CAMERA
// ─────────────────────────────────────────────
let videoStream = null;

async function startCamera() {
  const video = document.getElementById('cameraVideo');
  const placeholder = document.getElementById('cameraPlaceholder');
  try {
    videoStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'environment', width: { ideal: 1920 }, height: { ideal: 1080 } }
    });
    video.srcObject = videoStream;
    video.style.display = 'block';
    if (placeholder) placeholder.style.display = 'none';
  } catch(e) {
    if (placeholder) {
      placeholder.style.display = 'flex';
      placeholder.innerHTML = `<div style="text-align:center;color:#A07840;padding:40px">
        <div style="font-size:40px;margin-bottom:12px">📷</div>
        <p style="font-size:14px;line-height:1.6">Camera access denied.<br>Use "Choose photo" below instead.</p>
      </div>`;
    }
  }
}

function stopCamera() {
  if (videoStream) {
    videoStream.getTracks().forEach(t => t.stop());
    videoStream = null;
  }
  const video = document.getElementById('cameraVideo');
  if (video) { video.srcObject = null; video.style.display = 'none'; }
}

function capturePhoto() {
  const video = document.getElementById('cameraVideo');
  let imageData = null;
  if (video && video.srcObject) {
    const canvas = document.createElement('canvas');
    canvas.width = video.videoWidth || 1280;
    canvas.height = video.videoHeight || 720;
    canvas.getContext('2d').drawImage(video, 0, 0);
    imageData = canvas.toDataURL('image/jpeg', 0.85);
  }
  if (!imageData) { showToast('No camera image captured'); return; }
  stopCamera();
  analyzeBookImage(imageData);
}

function choosePhoto() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.onchange = e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = ev => {
      stopCamera();
      analyzeBookImage(ev.target.result);
    };
    reader.readAsDataURL(file);
  };
  input.click();
}

// ─────────────────────────────────────────────
//  AI BOOK IDENTIFICATION via Claude API
// ─────────────────────────────────────────────
async function analyzeBookImage(imageDataUrl) {
  // Show scanning overlay on camera view first, then switch to form view with spinner
  const overlay = document.getElementById('scanningOverlay');
  overlay.classList.add('show');
  overlay.querySelector('p').textContent = 'Identifying book…';

  const base64 = imageDataUrl.split(',')[1];
  const mediaType = imageDataUrl.startsWith('data:image/png') ? 'image/png' : 'image/jpeg';

  const prompt = `You are an expert on tabletop RPG books, especially collectible editions. Analyze this book cover image and identify the book.

Return ONLY a JSON object with these exact fields, no markdown, no explanation:
{
  "title": "exact book title",
  "system": "game system (e.g. D&D, Call of Cthulhu, Pathfinder, Warhammer Fantasy Roleplay, Shadowrun, Traveller, etc)",
  "publisher": "publisher name (e.g. TSR, Chaosium, Paizo, Games Workshop, FASA, etc)",
  "edition": "edition (e.g. 1st Edition, 2nd Edition, 3.5 Edition, 5th Edition, etc)",
  "printing": "printing if determinable from cover (e.g. 1st Printing, or leave empty string if unknown)",
  "year": "publication year as 4-digit string, or empty string if unknown",
  "condition": "Very Good",
  "priceLow": estimated low eBay sold price in USD as a number (no dollar sign),
  "priceMid": estimated average eBay sold price in USD as a number,
  "priceHigh": estimated high eBay sold price in USD as a number,
  "notes": "any notable observations about this specific book or edition that would help a collector"
}

For prices, use your knowledge of the collectible RPG market. Consider the edition, publisher, and age. A 1st edition 1st printing AD&D book from TSR is worth far more than a later printing. Be realistic — base on actual eBay sold listings you know about. If you cannot identify the book at all, set title to empty string and all prices to 0.`;

  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-6',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: [
            {
              type: 'image',
              source: { type: 'base64', media_type: mediaType, data: base64 }
            },
            { type: 'text', text: prompt }
          ]
        }]
      })
    });

    const data = await response.json();
    overlay.classList.remove('show');

    if (!response.ok) {
      showToast('AI scan failed — fill in manually');
      showScanResult({ _scanned: true, coverImg: imageDataUrl });
      return;
    }

    const text = data.content.map(c => c.text || '').join('').trim();
    let parsed = {};
    try {
      const clean = text.replace(/```json|```/g, '').trim();
      parsed = JSON.parse(clean);
    } catch(e) {
      showToast('Could not parse result — please fill in manually');
      showScanResult({ _scanned: true, coverImg: imageDataUrl });
      return;
    }

    if (!parsed.title) {
      showToast('Book not recognized — please fill in manually');
      showScanResult({ _scanned: true, coverImg: imageDataUrl });
      return;
    }

    parsed.coverImg = imageDataUrl;
    parsed._scanned = true;
    parsed.priceUpdated = new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
    showScanResult(parsed);
    showToast('Book identified!');

  } catch(err) {
    overlay.classList.remove('show');
    showToast('Network error — fill in manually');
    showScanResult({ _scanned: true, coverImg: imageDataUrl });
  }
}

function showScanResult(prefill) {
  showForm(prefill);
  if (prefill._scanned) {
    const banner = document.getElementById('scanBanner');
    if (!banner) return;
    banner.style.display = 'block';

    const identified = prefill.title && prefill.title.length > 0;
    const fields = identified ? [
      prefill.title && `<div class="scan-field"><span class="sf-label">Title</span><span class="sf-val">${prefill.title}</span></div>`,
      prefill.system && `<div class="scan-field"><span class="sf-label">System</span><span class="sf-val">${prefill.system}</span></div>`,
      prefill.edition && `<div class="scan-field"><span class="sf-label">Edition</span><span class="sf-val">${prefill.edition}</span></div>`,
      prefill.printing && `<div class="scan-field"><span class="sf-label">Printing</span><span class="sf-val">${prefill.printing}</span></div>`,
      prefill.priceMid && `<div class="scan-field"><span class="sf-label">Est. mid price</span><span class="sf-val" style="color:var(--amber-light)">${fmtMoney(prefill.priceMid)}</span></div>`,
    ].filter(Boolean).join('') : '';

    banner.innerHTML = `<div class="scan-result" style="display:flex;gap:12px;align-items:flex-start">
      ${prefill.coverImg ? `<img src="${prefill.coverImg}" style="width:56px;height:72px;object-fit:cover;border-radius:4px;flex-shrink:0">` : ''}
      <div style="flex:1">
        <div class="scan-result-header">${identified ? '✓ Book identified — review and save' : '⚠ Not recognized — please fill in below'}</div>
        ${fields}
      </div>
    </div>`;
  }
}

// ─────────────────────────────────────────────
//  FORM
// ─────────────────────────────────────────────
const SPINE_COLORS = ['#6B1A1A','#1A3A5C','#4A2C0A','#2A1A3A','#0A2A1A','#5A3A0A','#1A4A1A','#3A1A4A'];
const SPINE_EMOJIS = ['📖','📕','📗','📘','📙','📒','📓','📔'];

function populateForm(prefill) {
  document.getElementById('fTitle').value = prefill.title || '';
  document.getElementById('fSystem').value = prefill.system || '';
  document.getElementById('fPublisher').value = prefill.publisher || '';
  document.getElementById('fEdition').value = prefill.edition || '';
  document.getElementById('fPrinting').value = prefill.printing || '';
  document.getElementById('fYear').value = prefill.year || '';
  document.getElementById('fCondition').value = prefill.condition || 'Very Good';
  document.getElementById('fNotes').value = prefill.notes || '';
  document.getElementById('fPriceLow').value = prefill.priceLow || '';
  document.getElementById('fPriceMid').value = prefill.priceMid || '';
  document.getElementById('fPriceHigh').value = prefill.priceHigh || '';

  // Store cover img if from scan
  document.getElementById('formView').dataset.coverImg = prefill.coverImg || '';
  document.getElementById('formView').dataset.editId = prefill.id || '';

  const banner = document.getElementById('scanBanner');
  if (banner) banner.style.display = 'none';
}

function submitForm() {
  const title = document.getElementById('fTitle').value.trim();
  if (!title) { showToast('Please enter a title'); return; }

  const formView = document.getElementById('formView');
  const editId = formView.dataset.editId;
  const colorIdx = Math.floor(Math.random() * SPINE_COLORS.length);

  const book = {
    id: editId || uid(),
    title,
    system: document.getElementById('fSystem').value.trim(),
    publisher: document.getElementById('fPublisher').value.trim(),
    edition: document.getElementById('fEdition').value.trim(),
    printing: document.getElementById('fPrinting').value.trim(),
    year: document.getElementById('fYear').value.trim(),
    condition: document.getElementById('fCondition').value,
    notes: document.getElementById('fNotes').value.trim(),
    priceLow: parseFloat(document.getElementById('fPriceLow').value) || null,
    priceMid: parseFloat(document.getElementById('fPriceMid').value) || null,
    priceHigh: parseFloat(document.getElementById('fPriceHigh').value) || null,
    priceUpdated: new Date().toLocaleDateString('en-US', { month: 'short', year: 'numeric' }),
    emoji: SPINE_EMOJIS[colorIdx],
    color: SPINE_COLORS[colorIdx],
    coverImg: formView.dataset.coverImg || null
  };

  if (editId) {
    const idx = state.books.findIndex(b => b.id === editId);
    if (idx >= 0) state.books[idx] = book;
  } else {
    state.books.unshift(book);
  }
  saveBooks();
  showToast(editId ? 'Book updated' : 'Book added to vault');
  goBack();
}

function deleteBook(id) {
  if (!confirm('Remove this book from your vault?')) return;
  state.books = state.books.filter(b => b.id !== id);
  saveBooks();
  showToast('Removed from vault');
  goBack();
}

function editBook(id) {
  const book = state.books.find(b => b.id === id);
  if (book) showForm(book);
}

// ─────────────────────────────────────────────
//  INIT
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  showScreen('collection');

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
});
