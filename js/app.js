/* =====================================================================
   BIBLIOTECA DIGITAL DE 11-02 — Colegio Loperena
   app.js — JavaScript Vanilla, sin frameworks
   Organizado en: ICONOS · DATOS · ESTADO · RENDER · EVENTOS
   ===================================================================== */

/* =====================================================================
   1. ICONOS (estilo lineal, un solo sistema visual, sin dependencias)
   ===================================================================== */
const ICONS = {
  calculo:      '<path d="M6 3h12M9 3v4l-3 6 3 8M15 3v4l3 6-3 8M9 21h6"/>',
  sociales:     '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9s1.3-6.4 3.8-9z"/>',
  economia:     '<path d="M4 19h16"/><rect x="6" y="12" width="3" height="7"/><rect x="11" y="8" width="3" height="11"/><rect x="16" y="4" width="3" height="15"/>',
  ingles:       '<path d="M4 19V5a1 1 0 0 1 1-1h9a3 3 0 0 1 3 3v13"/><path d="M4 19a2 2 0 0 0 2 2h11"/><path d="M8 8h5M8 11h5"/>',
  filosofia:    '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-4 10.5c.6.6 1 1.3 1 2.1V16h6v-.4c0-.8.4-1.5 1-2.1A6 6 0 0 0 12 3z"/>',
  deporte:      '<circle cx="12" cy="4.5" r="2"/><path d="M12 6.5v5l-4 3v6M12 11.5l4 3v6M8 14.5H4M16 14.5h4"/>',
  lenguaje:     '<path d="M4 19.5V5a1 1 0 0 1 1-1h6v16H5a1 1 0 0 1-1-1.5z"/><path d="M20 19.5V5a1 1 0 0 0-1-1h-6v16h6a1 1 0 0 0 1-1.5z"/>',
  quimica:      '<path d="M10 3h4M9 3v6.5L4.6 17a2 2 0 0 0 1.7 3h11.4a2 2 0 0 0 1.7-3L15 9.5V3"/><path d="M7.5 15h9"/>',
  estadistica:  '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
  fisica:       '<circle cx="12" cy="12" r="1.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9" ry="3.6" transform="rotate(120 12 12)"/>',
  biologia:     '<path d="M6 3c0 6 12 6 12 12M6 21c0-6 12-6 12-12M7.5 6.5h9M7.5 17.5h9M9 10h6M9 14h6"/>',

  search:       '<circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.3" y2="16.3"/>',
  x:            '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>',
  arrowLeft:    '<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>',
  arrowRight:   '<line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>',
  chevron:      '<polyline points="9 18 15 12 9 6"/>',
  home:         '<path d="M3 11.5 12 4l9 7.5"/><path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9"/>',
  folder:       '<path d="M3 7a1 1 0 0 1 1-1h5l2 2h9a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V7z"/>',
  fileText:     '<path d="M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8l-4-5z"/><path d="M14 3v5h4"/><path d="M9 13h6M9 17h6"/>',
  filePdf:      '<path d="M14 2H7a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7l-4-5z"/><path d="M14 2v5h4"/><path d="M8.5 17v-3.5h1.2c.7 0 1.2.5 1.2 1.1s-.5 1.1-1.2 1.1H8.5M12 17v-3.5h1c.9 0 1.5.7 1.5 1.75S13.9 17 13 17h-1zM16.5 13.5v3.5M16.5 15h1.3"/>',
  eye:          '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/>',
  download:     '<path d="M12 3v12"/><polyline points="7 11 12 16 17 11"/><path d="M4 19h16"/>',
  calendar:     '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M16 3v4M8 3v4M3 10h18"/>',
  book:         '<path d="M4 19.5V5a1 1 0 0 1 1-1h14v15H5.5A1.5 1.5 0 0 0 4 20.5z"/><path d="M4 19.5A1.5 1.5 0 0 1 5.5 18H19"/>',
  boxOpen:      '<path d="M3 8v11a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8"/><path d="M2.5 8l9.5-4 9.5 4-9.5 4-9.5-4z"/><path d="M12 12v8"/>',
};

function icon(name, extraClass){
  return `<svg class="ic ${extraClass||''}" viewBox="0 0 24 24">${ICONS[name] || ''}</svg>`;
}

/* =====================================================================
   2. DATOS — edita aquí para administrar toda la biblioteca
   ===================================================================== */

// Períodos académicos del colegio. currentIndex indica cuál está activo
// (0 = Periodo 1). Cámbialo cuando inicie un nuevo período.
const PERIODS = ['Periodo 3', 'Periodo 4'];
const CURRENT_PERIOD_INDEX = 0; // Periodo 3 = período actual

// Metadatos de cada tipo de carpeta (icono + nombre para mostrar)
const FOLDER_TYPES = {
  'Guías':               { icon:'fileText' },
  'Talleres':             { icon:'boxOpen' },
  'Exámenes corregidos':  { icon:'book' },
  'Diapositivas':         { icon:'folder' },
};

// Materias activas: solo las administradas por esta biblioteca
// (Arte y Tecnología usan plataformas externas y no aparecen aquí).
const SUBJECTS = [
  { id:'calculo',     name:'Cálculo',     icon:'calculo',     color:'#0b66ab', tint:'#DCEAF3', desc:'Funciones, derivadas, integrales y más.',      folders:['Guías','Talleres','Exámenes corregidos','Diapositivas'] },
  { id:'sociales',    name:'Sociales',    icon:'sociales',    color:'#4E8B67', tint:'#E1EFE5', desc:'Historia, geografía y sociedad.',               folders:['Guías','Exámenes corregidos'] },
  { id:'economia',    name:'Economía',    icon:'economia',    color:'#35618C', tint:'#DCE8F0', desc:'Fundamentos de mercado y finanzas.',            folders:['Guías','Exámenes corregidos'] },
  { id:'ingles',      name:'Inglés',      icon:'ingles',      color:'#5C8D89', tint:'#E1EEEC', desc:'Comprensión y práctica del idioma.',            folders:['Exámenes corregidos'] },
  { id:'filosofia',   name:'Filosofía',   icon:'filosofia',   color:'#435B66', tint:'#E2E7E9', desc:'Pensamiento crítico y ética.',                  folders:['Guías'] },
  { id:'deporte',     name:'Deporte',     icon:'deporte',     color:'#7A9E7E', tint:'#E7EFE3', desc:'Educación física y bienestar.',                 folders:['Guías'] },
  { id:'lenguaje',    name:'Lenguaje',    icon:'lenguaje',    color:'#3E6B8A', tint:'#DEE9F0', desc:'Comprensión lectora y escritura.',              folders:['Guías','Exámenes corregidos'] },
  { id:'quimica',     name:'Química',     icon:'quimica',     color:'#4F8A6D', tint:'#E1EFE6', desc:'Reacciones, elementos y laboratorio.',          folders:['Guías','Exámenes corregidos'] },
  { id:'estadistica', name:'Estadística', icon:'estadistica', color:'#35618C', tint:'#DCE8F0', desc:'Datos, probabilidad y análisis.',               folders:['Talleres','Guías','Exámenes corregidos'] },
  { id:'fisica',      name:'Física',      icon:'fisica',      color:'#4A7C9E', tint:'#DFEBF2', desc:'Movimiento, energía y materia.',                folders:['Guías','Exámenes corregidos'] },
  { id:'biologia',    name:'Biología',    icon:'biologia',    color:'#5A9178', tint:'#E3F0E8', desc:'Célula, genética y vida.',                      folders:['Guías','Exámenes corregidos'] },
];

// DOCUMENTOS: para agregar uno nuevo copia un objeto y cambia sus datos.
// "file" es la ruta al PDF real dentro de assets/pdf/<Materia>/<Carpeta>/<Periodo>/
// Como el curso está iniciando el Periodo 3, todos los documentos actuales
// quedan ubicados ahí; Periodo 1, 2 y 4 quedan listos y vacíos.
const DOCUMENTS = [
  
  { subject:'calculo',     folder:'Exámenes corregidos',  period:'Periodo 3', title:'',     date:'2026-06-15', file:'assets/pdf/Calculo/Examenes/Periodo-3/examen-funciones.pdf' },
  { subject:'calculo',     folder:'Diapositivas',         period:'Periodo 3', title:'Diapositivas de límites',          date:'2026-06-02', file:'assets/pdf/Calculo/Diapositivas/Periodo-3/Limite_Euler.pdf' },
  { subject:'calculo',     folder:'Diapositivas',         period:'Periodo 3', title:'Número al infinito (Euler)',       date:'2026-07-08', file:'assets/pdf/Calculo/Diapositivas/Periodo-3/Numero_al_infinito_euler.pdf'},
  { subject:'filosofia',   folder:'Guías',                period:'Periodo 3', title:'Filosofia del arte',            date:'2026-07-15', file:'assets/pdf/Filosofia/Guías/Periodo-3/Filosofia_del_arte.pdf'},
];

/* =====================================================================
   3. ESTADO Y NAVEGACIÓN
   ===================================================================== */
const state = { subjectId:null, folder:null, period:PERIODS[CURRENT_PERIOD_INDEX] };
const $ = sel => document.querySelector(sel);
const subjectById = id => SUBJECTS.find(s => s.id === id);
const fmtDate = iso => new Date(iso + 'T00:00:00').toLocaleDateString('es-CO', { day:'numeric', month:'short', year:'numeric' });

function cardVars(s){ return `--card-tint:${s.color};--card-tint-bg:${s.tint};`; }

function showView(name){
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  $('#view-' + name).classList.add('active');
  window.scrollTo({ top:0, behavior:'smooth' });
}

function goHome(){
  state.subjectId = null; state.folder = null;
  clearFilters();
  renderBreadcrumb();
  showView('home');
}

function openSubject(id){
  state.subjectId = id; state.folder = null;
  renderSubjectView();
  renderBreadcrumb();
  showView('subject');
}

function openFolder(folderName){
  state.folder = folderName;
  state.period = PERIODS[CURRENT_PERIOD_INDEX];
  renderFolderView();
  renderBreadcrumb();
  showView('folder');
}

function selectPeriod(p){
  state.period = p;
  renderFolderView();
}

/* =====================================================================
   4. RENDER — migas de pan
   ===================================================================== */
function renderBreadcrumb(){
  const bc = $('#breadcrumb');
  const parts = [`<button onclick="goHome()">${icon('home')} Biblioteca</button>`];

  if(state.subjectId){
    const s = subjectById(state.subjectId);
    parts.push(`<span class="sep">${icon('chevron')}</span>`);
    if(state.folder){
      parts.push(`<button onclick="openSubject('${s.id}')">${s.name}</button>`);
      parts.push(`<span class="sep">${icon('chevron')}</span>`);
      parts.push(`<span class="crumb-current">${state.folder}</span>`);
    } else {
      parts.push(`<span class="crumb-current">${s.name}</span>`);
    }
  }
  bc.innerHTML = parts.join('');
}

/* =====================================================================
   5. RENDER — página principal (materias)
   ===================================================================== */
function renderHome(){
  $('#subjectCount').textContent = SUBJECTS.length + ' materias activas';
  $('#subjectGrid').innerHTML = SUBJECTS.map(s => `
    <article class="subject-card" style="${cardVars(s)}">
      <div class="sc-icon">${icon(s.icon)}</div>
      <h3>${s.name}</h3>
      <p class="sc-desc">${s.desc}</p>
      <div class="sc-footer">
        <span class="sc-count">${s.folders.length} carpeta${s.folders.length>1?'s':''}</span>
        <button class="btn-enter" onclick="openSubject('${s.id}')">Entrar ${icon('arrowRight')}</button>
      </div>
    </article>
  `).join('');
}

/* =====================================================================
   6. RENDER — vista de materia (carpetas)
   ===================================================================== */
function renderSubjectView(){
  const s = subjectById(state.subjectId);
  $('#subjectIcon').innerHTML = icon(s.icon);
  $('#subjectIcon').style.background = s.tint;
  $('#subjectIcon').style.color = s.color;
  $('#subjectName').textContent = s.name;
  $('#subjectDesc').textContent = s.desc;
  $('#folderCount').textContent = `${s.folders.length} carpeta${s.folders.length>1?'s':''}`;

  $('#folderGrid').innerHTML = s.folders.map(f => {
    const meta = FOLDER_TYPES[f] || { icon:'folder' };
    const count = DOCUMENTS.filter(d => d.subject===s.id && d.folder===f).length;
    return `
      <button class="folder-card" style="${cardVars(s)}" onclick="openFolder('${f}')">
        <div class="fc-icon">${icon(meta.icon)}</div>
        <div>
          <div class="fc-name">${f}</div>
          <div class="fc-count">${count} documento${count!==1?'s':''}</div>
        </div>
      </button>
    `;
  }).join('');
}

/* =====================================================================
   7. RENDER — vista de carpeta (períodos + documentos)
   ===================================================================== */
function renderFolderView(){
  const s = subjectById(state.subjectId);
  const meta = FOLDER_TYPES[state.folder] || { icon:'folder' };

  $('#folderIcon').innerHTML = icon(meta.icon);
  $('#folderIcon').style.background = s.tint;
  $('#folderIcon').style.color = s.color;
  $('#folderTitle').textContent = state.folder;
  $('#folderSubtitle').textContent = `${s.name} · organizado por período académico`;

  $('#periodTabs').innerHTML = PERIODS.map((p, i) => {
    const count = DOCUMENTS.filter(d => d.subject===s.id && d.folder===state.folder && d.period===p).length;
    const isCurrent = i === CURRENT_PERIOD_INDEX;
    const isActive = p === state.period;
    return `
      <button class="period-tab ${isActive?'active':''} ${isCurrent?'is-current':''}" onclick="selectPeriod('${p}')" role="tab" aria-selected="${isActive}">
        ${p}
        <span class="badge">${count}</span>
        ${isCurrent ? '<span class="tag-current">Actual</span>' : ''}
      </button>
    `;
  }).join('');

  renderDocGrid('#docGrid', DOCUMENTS.filter(d =>
    d.subject === s.id && d.folder === state.folder && d.period === state.period
  ), { emptyPeriod:state.period });
}

/* =====================================================================
   8. RENDER — tarjetas de documento (reutilizable)
   ===================================================================== */
function renderDocGrid(selector, docs, opts){
  opts = opts || {};
  const grid = $(selector);

  if(docs.length === 0){
    grid.innerHTML = `
      <div class="empty-state">
        ${icon('folder', 'ee-icon')}
        ${opts.emptyPeriod
          ? `Aún no hay documentos en <strong>${state.folder} · ${opts.emptyPeriod}</strong>.<br>Cuando se agreguen, aparecerán aquí automáticamente.`
          : `No se encontraron documentos con estos criterios.`}
      </div>`;
    return;
  }

  grid.innerHTML = docs.map(d => {
    const s = subjectById(d.subject);
    return `
      <article class="doc-card">
        <div class="doc-top">
          <div class="doc-pdf-icon">${icon('filePdf')}</div>
          <div>
            <div class="doc-title">${d.title}</div>
          </div>
        </div>
        <div class="doc-meta-list">
          <span>${icon('folder')} ${s.name}</span>
          <span>${icon('fileText')} ${d.folder}</span>
          <span>${icon('calendar')} ${fmtDate(d.date)}</span>
        </div>
        <div class="doc-actions">
          <a class="doc-btn primary" href="${d.file}" target="_blank" rel="noopener">${icon('eye')} Ver</a>
          <a class="doc-btn" href="${d.file}" download>${icon('download')} Descargar</a>
        </div>
      </article>
    `;
  }).join('');
}

/* =====================================================================
   9. BUSCADOR Y FILTROS
   ===================================================================== */
function populateFilterOptions(){
  const subjectSelect = $('#filterSubject');
  SUBJECTS.forEach(s => {
    const opt = document.createElement('option');
    opt.value = s.id; opt.textContent = s.name;
    subjectSelect.appendChild(opt);
  });
  const periodSelect = $('#filterPeriod');
  PERIODS.forEach((p, i) => {
    const opt = document.createElement('option');
    opt.value = p; opt.textContent = p + (i===CURRENT_PERIOD_INDEX ? ' (actual)' : '');
    periodSelect.appendChild(opt);
  });
}

function currentFilters(){
  return {
    q: $('#searchInput').value.trim().toLowerCase(),
    subject: $('#filterSubject').value,
    period: $('#filterPeriod').value,
  };
}

function filtersActive(f){ return !!(f.q || f.subject || f.period); }

function applyFilters(){
  const f = currentFilters();
  $('#clearSearch').classList.toggle('hidden', !f.q);
  $('#resetFilters').classList.toggle('hidden', !filtersActive(f));

  if(!filtersActive(f)){
    // sin filtros: volvemos a la navegación normal
    if(state.folder) showView('folder');
    else if(state.subjectId) showView('subject');
    else showView('home');
    return;
  }

  const results = DOCUMENTS.filter(d => {
    const matchesQuery = !f.q || d.title.toLowerCase().includes(f.q);
    const matchesSubject = !f.subject || d.subject === f.subject;
    const matchesPeriod = !f.period || d.period === f.period;
    return matchesQuery && matchesSubject && matchesPeriod;
  });

  $('#resultsCount').textContent = `${results.length} documento${results.length!==1?'s':''} encontrado${results.length!==1?'s':''}`;
  renderDocGrid('#resultsGrid', results, {});
  showView('results');
}

function clearFilters(){
  $('#searchInput').value = '';
  $('#filterSubject').value = '';
  $('#filterPeriod').value = '';
  $('#clearSearch').classList.add('hidden');
  $('#resetFilters').classList.add('hidden');
}

/* =====================================================================
   10. EVENTOS
   ===================================================================== */
$('#searchInput').addEventListener('input', applyFilters);
$('#filterSubject').addEventListener('change', applyFilters);
$('#filterPeriod').addEventListener('change', applyFilters);
$('#clearSearch').addEventListener('click', () => { $('#searchInput').value=''; applyFilters(); $('#searchInput').focus(); });
$('#resetFilters').addEventListener('click', () => { clearFilters(); applyFilters(); });
$('#backFromSubject').addEventListener('click', goHome);
$('#backFromFolder').addEventListener('click', () => openSubject(state.subjectId));

/* =====================================================================
   11. INICIO
   ===================================================================== */
populateFilterOptions();
renderHome();
renderBreadcrumb();
