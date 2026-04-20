/* ── EXTEND i18n (app-specific keys) ────────────────────── */
const APP_I18N = {
  fr: { 'app.logout':'Se déconnecter','sidebar.main':'Principal','nav.overview':"Vue d'ensemble",'nav.habits':'Habitudes','nav.tasks':'Tâches','nav.shop':'Boutique','nav.stats':'Statistiques','nav.pomodoro':'Pomodoro','nav.planning':'Planning','page.overview.title':'Bonjour','page.habits.title':'Habitudes','page.habits.sub':'Vos routines quotidiennes, hebdomadaires et mensuelles.','page.tasks.title':'Tâches','page.tasks.sub':'Vision hebdomadaire de vos to-dos.','page.shop.title':'Boutique','page.shop.sub':'Dépensez vos points sur des récompenses.','page.stats.title':'Statistiques','page.stats.sub':'Visualisez votre progression dans le temps.','page.pomodoro.title':'Pomodoro','page.pomodoro.sub':'Sessions de focus avec pauses guidées.','page.planning.title':'Planning','page.planning.sub':'Organisez votre semaine.','ov.daily_progress':'Progression du jour','ov.habits':'Habitudes','ov.tasks':'Tâches','ov.score':'Score du jour','ov.points':'points accumulés','ov.today_habits':'Habitudes du jour','ov.today_tasks':'Tâches du jour','ov.see_all':'Voir tout','ov.no_habits':'Aucune habitude pour aujourd\'hui.','ov.no_tasks':'Aucune tâche pour aujourd\'hui.','habit.add':'Ajouter','habit.empty':'Aucune habitude. Ajoutez-en une !','task.add':'Nouvelle tâche','task.empty':'Aucune tâche. Ajoutez-en une !','reward.add':'Ajouter','reward.empty':'Aucune récompense. Ajoutez-en une !','shop.available_pts':'points disponibles','filter.all':'Toutes','filter.daily':'Quotidiennes','filter.weekly':'Hebdomadaires','filter.monthly':'Mensuelles','tasks.all':'Toutes les tâches','stats.total_habits':'Total habitudes','stats.best_streak':'Meilleure série','stats.completion':'Taux de complétion','stats.active_days':'Jours actifs','stats.chart_title':'Taux de complétion — 30 derniers jours','pomo.focus':'Focus','pomo.break':'Pause courte','pomo.long':'Pause longue','pomo.sessions':'Sessions complétées :','modal.habit.title':'Nouvelle habitude','modal.habit.cta':"Créer l'habitude",'modal.task.title':'Nouvelle tâche','modal.task.cta':'Créer la tâche','modal.reward.title':'Nouvelle récompense','modal.reward.cta':'Créer la récompense','form.name':'Nom','form.frequency':'Fréquence','form.due_date':'Échéance','form.priority':'Priorité','form.description':'Description','form.cost':'Coût (points)','priority.high':'Haute','priority.medium':'Moyenne','priority.low':'Basse','toast.habit_added':'Habitude ajoutée !','toast.task_added':'Tâche ajoutée !','toast.reward_added':'Récompense ajoutée !','toast.not_enough':'Pas assez de points.','toast.unlocked':'Récompense débloquée !','toast.pomo_done':'Session terminée ! Prends une pause.','toast.deleted':'Supprimé.' },
  en: { 'app.logout':'Log out','sidebar.main':'Main','nav.overview':'Overview','nav.habits':'Habits','nav.tasks':'Tasks','nav.shop':'Shop','nav.stats':'Statistics','nav.pomodoro':'Pomodoro','nav.planning':'Planning','page.overview.title':'Hello','page.habits.title':'Habits','page.habits.sub':'Your daily, weekly and monthly routines.','page.tasks.title':'Tasks','page.tasks.sub':'Weekly view of your to-dos.','page.shop.title':'Shop','page.shop.sub':'Spend your points on rewards.','page.stats.title':'Statistics','page.stats.sub':'Visualise your progress over time.','page.pomodoro.title':'Pomodoro','page.pomodoro.sub':'Focus sessions with guided breaks.','page.planning.title':'Planning','page.planning.sub':'Organise your week.','ov.daily_progress':'Daily progress','ov.habits':'Habits','ov.tasks':'Tasks','ov.score':'Daily score','ov.points':'points accumulated','ov.today_habits':'Today\'s habits','ov.today_tasks':'Today\'s tasks','ov.see_all':'See all','ov.no_habits':'No habits for today.','ov.no_tasks':'No tasks for today.','habit.add':'Add','habit.empty':'No habits yet. Add one!','task.add':'New task','task.empty':'No tasks yet. Add one!','reward.add':'Add','reward.empty':'No rewards yet. Add one!','shop.available_pts':'points available','filter.all':'All','filter.daily':'Daily','filter.weekly':'Weekly','filter.monthly':'Monthly','tasks.all':'All tasks','stats.total_habits':'Total habits','stats.best_streak':'Best streak','stats.completion':'Completion rate','stats.active_days':'Active days','stats.chart_title':'Completion rate — last 30 days','pomo.focus':'Focus','pomo.break':'Short break','pomo.long':'Long break','pomo.sessions':'Sessions completed:','modal.habit.title':'New habit','modal.habit.cta':'Create habit','modal.task.title':'New task','modal.task.cta':'Create task','modal.reward.title':'New reward','modal.reward.cta':'Create reward','form.name':'Name','form.frequency':'Frequency','form.due_date':'Due date','form.priority':'Priority','form.description':'Description','form.cost':'Cost (points)','priority.high':'High','priority.medium':'Medium','priority.low':'Low','toast.habit_added':'Habit added!','toast.task_added':'Task added!','toast.reward_added':'Reward added!','toast.not_enough':'Not enough points.','toast.unlocked':'Reward unlocked!','toast.pomo_done':'Session done! Take a break.','toast.deleted':'Deleted.' },
  es: { 'app.logout':'Cerrar sesión','sidebar.main':'Principal','nav.overview':'Resumen','nav.habits':'Hábitos','nav.tasks':'Tareas','nav.shop':'Tienda','nav.stats':'Estadísticas','nav.pomodoro':'Pomodoro','nav.planning':'Planificación','page.overview.title':'Hola','page.habits.title':'Hábitos','page.habits.sub':'Tus rutinas diarias, semanales y mensuales.','page.tasks.title':'Tareas','page.tasks.sub':'Vista semanal de tus tareas.','page.shop.title':'Tienda','page.shop.sub':'Gasta tus puntos en recompensas.','page.stats.title':'Estadísticas','page.stats.sub':'Visualiza tu progreso.','page.pomodoro.title':'Pomodoro','page.pomodoro.sub':'Sesiones de enfoque con pausas.','page.planning.title':'Planificación','page.planning.sub':'Organiza tu semana.','ov.daily_progress':'Progreso del día','ov.habits':'Hábitos','ov.tasks':'Tareas','ov.score':'Puntuación diaria','ov.points':'puntos acumulados','ov.today_habits':'Hábitos de hoy','ov.today_tasks':'Tareas de hoy','ov.see_all':'Ver todo','ov.no_habits':'Sin hábitos hoy.','ov.no_tasks':'Sin tareas hoy.','habit.add':'Añadir','habit.empty':'Sin hábitos. ¡Añade uno!','task.add':'Nueva tarea','task.empty':'Sin tareas. ¡Añade una!','reward.add':'Añadir','reward.empty':'Sin recompensas. ¡Añade una!','shop.available_pts':'puntos disponibles','filter.all':'Todos','filter.daily':'Diarios','filter.weekly':'Semanales','filter.monthly':'Mensuales','tasks.all':'Todas las tareas','stats.total_habits':'Total hábitos','stats.best_streak':'Mejor racha','stats.completion':'Tasa de compleción','stats.active_days':'Días activos','stats.chart_title':'Tasa de compleción — últimos 30 días','pomo.focus':'Enfoque','pomo.break':'Pausa corta','pomo.long':'Pausa larga','pomo.sessions':'Sesiones completadas:','modal.habit.title':'Nuevo hábito','modal.habit.cta':'Crear hábito','modal.task.title':'Nueva tarea','modal.task.cta':'Crear tarea','modal.reward.title':'Nueva recompensa','modal.reward.cta':'Crear recompensa','form.name':'Nombre','form.frequency':'Frecuencia','form.due_date':'Fecha límite','form.priority':'Prioridad','form.description':'Descripción','form.cost':'Coste (puntos)','priority.high':'Alta','priority.medium':'Media','priority.low':'Baja','toast.habit_added':'¡Hábito añadido!','toast.task_added':'¡Tarea añadida!','toast.reward_added':'¡Recompensa añadida!','toast.not_enough':'Puntos insuficientes.','toast.unlocked':'¡Recompensa desbloqueada!','toast.pomo_done':'¡Sesión terminada!','toast.deleted':'Eliminado.' },
  pt: { 'app.logout':'Sair','sidebar.main':'Principal','nav.overview':'Visão geral','nav.habits':'Hábitos','nav.tasks':'Tarefas','nav.shop':'Loja','nav.stats':'Estatísticas','nav.pomodoro':'Pomodoro','nav.planning':'Planejamento','page.overview.title':'Olá','page.habits.title':'Hábitos','page.habits.sub':'Suas rotinas diárias, semanais e mensais.','page.tasks.title':'Tarefas','page.tasks.sub':'Visão semanal das suas tarefas.','page.shop.title':'Loja','page.shop.sub':'Gaste seus pontos em recompensas.','page.stats.title':'Estatísticas','page.stats.sub':'Visualize seu progresso.','page.pomodoro.title':'Pomodoro','page.pomodoro.sub':'Sessões de foco com pausas.','page.planning.title':'Planejamento','page.planning.sub':'Organize sua semana.','ov.daily_progress':'Progresso do dia','ov.habits':'Hábitos','ov.tasks':'Tarefas','ov.score':'Pontuação do dia','ov.points':'pontos acumulados','ov.today_habits':'Hábitos de hoje','ov.today_tasks':'Tarefas de hoje','ov.see_all':'Ver tudo','ov.no_habits':'Sem hábitos hoje.','ov.no_tasks':'Sem tarefas hoje.','habit.add':'Adicionar','habit.empty':'Sem hábitos. Adicione um!','task.add':'Nova tarefa','task.empty':'Sem tarefas. Adicione uma!','reward.add':'Adicionar','reward.empty':'Sem recompensas. Adicione uma!','shop.available_pts':'pontos disponíveis','filter.all':'Todos','filter.daily':'Diários','filter.weekly':'Semanais','filter.monthly':'Mensais','tasks.all':'Todas as tarefas','stats.total_habits':'Total hábitos','stats.best_streak':'Melhor sequência','stats.completion':'Taxa de conclusão','stats.active_days':'Dias ativos','stats.chart_title':'Taxa de conclusão — últimos 30 dias','pomo.focus':'Foco','pomo.break':'Pausa curta','pomo.long':'Pausa longa','pomo.sessions':'Sessões concluídas:','modal.habit.title':'Novo hábito','modal.habit.cta':'Criar hábito','modal.task.title':'Nova tarefa','modal.task.cta':'Criar tarefa','modal.reward.title':'Nova recompensa','modal.reward.cta':'Criar recompensa','form.name':'Nome','form.frequency':'Frequência','form.due_date':'Prazo','form.priority':'Prioridade','form.description':'Descrição','form.cost':'Custo (pontos)','priority.high':'Alta','priority.medium':'Média','priority.low':'Baixa','toast.habit_added':'Hábito adicionado!','toast.task_added':'Tarefa adicionada!','toast.reward_added':'Recompensa adicionada!','toast.not_enough':'Pontos insuficientes.','toast.unlocked':'Recompensa desbloqueada!','toast.pomo_done':'Sessão concluída!','toast.deleted':'Excluído.' }
};
Object.keys(APP_I18N).forEach(lang => { if (typeof TRANSLATIONS !== 'undefined') Object.assign(TRANSLATIONS[lang] ??= {}, APP_I18N[lang]); });

/* ── DATA (localStorage) ────────────────────────────────── */
const DB = {
  get: k => JSON.parse(localStorage.getItem('flow_' + k) || 'null'),
  set: (k, v) => localStorage.setItem('flow_' + k, JSON.stringify(v)),
};
const getHabits  = () => DB.get('habits')  || [];
const getTasks   = () => DB.get('tasks')   || [];
const getRewards = () => DB.get('rewards') || [];
const getPoints  = () => DB.get('points')  || 0;
const setPoints  = v => { DB.set('points', v); refreshPoints(); };
const uid = () => Date.now().toString(36) + Math.random().toString(36).slice(2);
const todayStr = () => new Date().toISOString().slice(0, 10);

/* ── POINTS DISPLAY ─────────────────────────────────────── */
function refreshPoints() {
  const p = getPoints();
  document.getElementById('points-value').textContent = p;
  document.getElementById('shop-points').textContent = p;
}

/* ── PAGE NAV ────────────────────────────────────────────── */
function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(b => { b.classList.toggle('active', b.dataset.page === name); b.setAttribute('aria-current', b.dataset.page === name ? 'page' : 'false'); });
  const page = document.getElementById('page-' + name);
  if (page) page.classList.add('active');
  const renders = { habits: renderHabits, tasks: renderTasks, shop: renderShop, stats: renderStats, planning: renderPlanning, overview: renderOverview };
  renders[name]?.();
  closeSidebar();
}

/* ── MOBILE SIDEBAR ─────────────────────────────────────── */
function closeSidebar() {
  const s = document.getElementById('sidebar'), o = document.getElementById('sidebar-overlay');
  s.classList.remove('open'); o.hidden = true;
  document.getElementById('burger-app').setAttribute('aria-expanded', 'false');
}
document.getElementById('burger-app').addEventListener('click', () => {
  const s = document.getElementById('sidebar'), o = document.getElementById('sidebar-overlay');
  const open = s.classList.toggle('open'); o.hidden = !open;
  document.getElementById('burger-app').setAttribute('aria-expanded', open);
});
document.getElementById('sidebar-overlay').addEventListener('click', closeSidebar);

/* ── THEME TOGGLE ───────────────────────────────────────── */
(function() {
  const saved = DB.get('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', saved);
  document.getElementById('theme-toggle').addEventListener('click', () => {
    const next = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next); DB.set('theme', next);
  });
})();

/* ── MODAL HELPERS ──────────────────────────────────────── */
function openModal(id) { document.getElementById(id).hidden = false; document.body.style.overflow = 'hidden'; setTimeout(() => document.getElementById(id).querySelector('input')?.focus(), 50); }
function closeModal(id) { document.getElementById(id).hidden = true; document.body.style.overflow = ''; }
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); });
  o.querySelector('.modal-close')?.addEventListener('click', () => closeModal(o.id));
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') document.querySelectorAll('.modal-overlay:not([hidden])').forEach(o => closeModal(o.id)); });

/* ── HABITS ─────────────────────────────────────────────── */
let habitFilter = 'all';
function renderHabits() {
  const habits = getHabits().filter(h => habitFilter === 'all' || h.freq === habitFilter);
  const list = document.getElementById('habits-list'), empty = document.getElementById('habits-empty');
  list.innerHTML = ''; empty.hidden = habits.length > 0;
  habits.forEach(h => {
    const done = h.completedDates?.includes(todayStr());
    const li = document.createElement('li'); li.className = 'habit-item' + (done ? ' done' : ''); li.setAttribute('role', 'listitem');
    li.innerHTML = `<div class="item-check" aria-hidden="true"></div><div class="item-info"><p class="item-name">${h.name}</p><p class="item-meta">${h.freq} ${h.streak > 0 ? `<span class="streak-badge">🔥 ${h.streak}</span>` : ''}</p></div><div class="item-actions"><button class="action-btn" data-del="${h.id}" aria-label="Supprimer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/><path d="M10 11v6M14 11v6"/><path d="M9 6V4h6v2"/></svg></button></div>`;
    li.addEventListener('click', e => { if (e.target.closest('.action-btn')) return; toggleHabit(h.id); });
    li.querySelector('.action-btn').addEventListener('click', e => { e.stopPropagation(); deleteHabit(h.id); });
    list.appendChild(li);
  });
}
function toggleHabit(id) {
  const habits = getHabits(), h = habits.find(x => x.id === id); if (!h) return;
  const today = todayStr(); h.completedDates = h.completedDates || [];
  if (h.completedDates.includes(today)) { h.completedDates = h.completedDates.filter(d => d !== today); h.streak = Math.max(0, h.streak - 1); }
  else { h.completedDates.push(today); h.streak = (h.streak || 0) + 1; setPoints(getPoints() + 10); }
  DB.set('habits', habits); renderHabits(); renderOverview();
}
function deleteHabit(id) { DB.set('habits', getHabits().filter(h => h.id !== id)); renderHabits(); renderOverview(); showToast(typeof t !== 'undefined' ? t('toast.deleted') : 'Supprimé.'); }
document.getElementById('btn-add-habit').addEventListener('click', () => openModal('modal-add-habit'));
document.getElementById('form-add-habit').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('habit-name').value.trim(); if (!name) return;
  const habits = getHabits(); habits.push({ id: uid(), name, freq: document.getElementById('habit-freq').value, streak: 0, completedDates: [] });
  DB.set('habits', habits); closeModal('modal-add-habit'); e.target.reset(); renderHabits(); renderOverview(); showToast(typeof t !== 'undefined' ? t('toast.habit_added') : 'Ajouté !');
});
document.querySelectorAll('.tab-bar .tab').forEach(tab => {
  if (tab.closest('#page-habits')) tab.addEventListener('click', () => { habitFilter = tab.dataset.filter; document.querySelectorAll('#page-habits .tab').forEach(t => t.classList.toggle('active', t === tab)); renderHabits(); });
});

/* ── TASKS ──────────────────────────────────────────────── */
function renderTasks() {
  buildWeekGrid(); const tasks = getTasks(), list = document.getElementById('tasks-list'), empty = document.getElementById('tasks-empty');
  list.innerHTML = ''; empty.hidden = tasks.length > 0;
  tasks.forEach(t => {
    const li = document.createElement('li'); li.className = 'task-item' + (t.done ? ' done' : '');
    li.innerHTML = `<div class="item-check" aria-hidden="true"></div><div class="item-info"><p class="item-name">${t.name}</p><p class="item-meta">${t.dueDate || ''} <span class="priority-badge ${t.priority}">${t.priority}</span></p></div><div class="item-actions"><button class="action-btn" aria-label="Supprimer"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14H6L5 6"/></svg></button></div>`;
    li.addEventListener('click', e => { if (e.target.closest('.action-btn')) return; toggleTask(t.id); });
    li.querySelector('.action-btn').addEventListener('click', e => { e.stopPropagation(); DB.set('tasks', getTasks().filter(x => x.id !== t.id)); renderTasks(); });
    list.appendChild(li);
  });
}
function toggleTask(id) { const tasks = getTasks(), t = tasks.find(x => x.id === id); if (!t) return; t.done = !t.done; if (t.done) setPoints(getPoints() + 5); DB.set('tasks', tasks); renderTasks(); renderOverview(); }
function buildWeekGrid() {
  const grid = document.getElementById('week-grid'); grid.innerHTML = '';
  const now = new Date(), day = now.getDay(), todayNum = now.getDate();
  const days = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now); d.setDate(todayNum - day + i);
    const dStr = d.toISOString().slice(0,10), isToday = dStr === todayStr();
    const tasks = getTasks().filter(t => t.dueDate === dStr);
    const col = document.createElement('div'); col.className = 'week-day' + (isToday ? ' today' : ''); col.setAttribute('role', 'gridcell');
    col.innerHTML = `<p class="week-day-name">${days[i]}</p><p class="week-day-num">${d.getDate()}</p><div class="week-day-dots">${tasks.map(() => '<span class="week-dot"></span>').join('')}</div>`;
    grid.appendChild(col);
  }
}
document.getElementById('btn-add-task').addEventListener('click', () => openModal('modal-add-task'));
document.getElementById('btn-add-plan-task').addEventListener('click', () => openModal('modal-add-task'));
document.getElementById('form-add-task').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('task-name').value.trim(); if (!name) return;
  const tasks = getTasks(); tasks.push({ id: uid(), name, dueDate: document.getElementById('task-date').value, priority: document.getElementById('task-priority').value, done: false });
  DB.set('tasks', tasks); closeModal('modal-add-task'); e.target.reset(); renderTasks(); renderPlanning(); renderOverview(); showToast(typeof t !== 'undefined' ? t('toast.task_added') : 'Ajouté !');
});

/* ── SHOP ────────────────────────────────────────────────── */
function renderShop() {
  refreshPoints(); const rewards = getRewards(), grid = document.getElementById('shop-grid'), empty = document.getElementById('shop-empty');
  grid.innerHTML = ''; empty.hidden = rewards.length > 0;
  rewards.forEach(r => {
    const card = document.createElement('div'); card.className = 'reward-card' + (r.unlocked ? ' unlocked' : ''); card.setAttribute('role', 'listitem');
    card.innerHTML = `<div class="reward-name">${r.name}</div><div class="reward-desc">${r.desc || ''}</div><div class="reward-cost">⭐ ${r.cost} pts</div>${r.unlocked ? '<div class="reward-unlocked-badge">✓ Débloqué</div>' : ''}`;
    if (!r.unlocked) card.addEventListener('click', () => { if (getPoints() < r.cost) { showToast(typeof t !== 'undefined' ? t('toast.not_enough') : 'Pas assez de points.'); return; } const rewards = getRewards(), rw = rewards.find(x => x.id === r.id); rw.unlocked = true; DB.set('rewards', rewards); setPoints(getPoints() - r.cost); renderShop(); showToast(typeof t !== 'undefined' ? t('toast.unlocked') : 'Débloqué !'); });
    grid.appendChild(card);
  });
}
document.getElementById('btn-add-reward').addEventListener('click', () => openModal('modal-add-reward'));
document.getElementById('form-add-reward').addEventListener('submit', e => {
  e.preventDefault();
  const name = document.getElementById('reward-name').value.trim(); if (!name) return;
  const rewards = getRewards(); rewards.push({ id: uid(), name, desc: document.getElementById('reward-desc').value, cost: parseInt(document.getElementById('reward-cost').value) || 50, unlocked: false });
  DB.set('rewards', rewards); closeModal('modal-add-reward'); e.target.reset(); renderShop(); showToast(typeof t !== 'undefined' ? t('toast.reward_added') : 'Ajouté !');
});

/* ── STATS ──────────────────────────────────────────────── */
function renderStats() {
  const habits = getHabits(); const bestStreak = habits.reduce((m, h) => Math.max(m, h.streak || 0), 0);
  const total = getTasks().length + habits.length; const allDates = habits.flatMap(h => h.completedDates || []);
  const activeDays = new Set(allDates).size; const rate = habits.length ? Math.round(allDates.filter(d => d === todayStr()).length / habits.length * 100) : 0;
  document.getElementById('stat-total').textContent = habits.length;
  document.getElementById('stat-streak').textContent = bestStreak;
  document.getElementById('stat-rate').textContent = rate + '%';
  document.getElementById('stat-days').textContent = activeDays;
  drawChart();
}
function drawChart() {
  const canvas = document.getElementById('completion-chart'); if (!canvas) return;
  const ctx = canvas.getContext('2d'); const W = canvas.offsetWidth || 800; const H = 160;
  canvas.width = W; canvas.height = H; ctx.clearRect(0, 0, W, H);
  const habits = getHabits(); const days = 30; const bars = [];
  for (let i = days - 1; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const ds = d.toISOString().slice(0,10); const done = habits.filter(h => h.completedDates?.includes(ds)).length; bars.push(habits.length ? done / habits.length : 0); }
  const bw = (W - 60) / days; const grad = ctx.createLinearGradient(0, 0, 0, H);
  grad.addColorStop(0, 'rgba(91,91,214,.8)'); grad.addColorStop(1, 'rgba(91,91,214,.1)');
  bars.forEach((v, i) => { const bh = Math.max(4, v * (H - 20)); ctx.fillStyle = i === days - 1 ? '#7B7CF0' : grad; ctx.beginPath(); ctx.roundRect(30 + i * bw, H - bh, bw - 3, bh, [3, 3, 0, 0]); ctx.fill(); });
}

/* ── POMODORO ────────────────────────────────────────────── */
const POMO_DURATIONS = { focus: 25 * 60, break: 5 * 60, long: 15 * 60 };
let pomoMode = 'focus', pomoLeft = POMO_DURATIONS.focus, pomoRunning = false, pomoInterval = null, pomoSessions = DB.get('pomo_sessions') || 0;
document.getElementById('pomo-count').textContent = pomoSessions;
function updatePomoDisplay() {
  const m = String(Math.floor(pomoLeft / 60)).padStart(2, '0'), s = String(pomoLeft % 60).padStart(2, '0');
  document.getElementById('pomo-time').textContent = m + ':' + s;
  const total = POMO_DURATIONS[pomoMode], pct = 1 - pomoLeft / total;
  document.getElementById('pomo-ring').style.strokeDashoffset = 534 * (1 - pct);
}
function setPomoMode(mode) {
  clearInterval(pomoInterval); pomoRunning = false; pomoMode = mode; pomoLeft = POMO_DURATIONS[mode];
  document.querySelectorAll('.pomo-mode-tabs .tab').forEach(t => t.classList.toggle('active', t.dataset.mode === mode));
  document.getElementById('pomo-icon-play').hidden = false; document.getElementById('pomo-icon-pause').hidden = true;
  updatePomoDisplay();
}
document.getElementById('pomo-toggle').addEventListener('click', () => {
  pomoRunning = !pomoRunning;
  document.getElementById('pomo-icon-play').hidden = pomoRunning; document.getElementById('pomo-icon-pause').hidden = !pomoRunning;
  if (pomoRunning) {
    pomoInterval = setInterval(() => {
      if (pomoLeft <= 0) { clearInterval(pomoInterval); pomoRunning = false; if (pomoMode === 'focus') { pomoSessions++; DB.set('pomo_sessions', pomoSessions); document.getElementById('pomo-count').textContent = pomoSessions; setPoints(getPoints() + 25); } showToast(typeof t !== 'undefined' ? t('toast.pomo_done') : 'Session terminée !'); setPomoMode(pomoMode === 'focus' ? 'break' : 'focus'); return; }
      pomoLeft--; updatePomoDisplay();
    }, 1000);
  } else clearInterval(pomoInterval);
});
document.getElementById('pomo-reset').addEventListener('click', () => setPomoMode(pomoMode));
document.getElementById('pomo-skip').addEventListener('click', () => setPomoMode(pomoMode === 'focus' ? 'break' : 'focus'));
document.querySelectorAll('.pomo-mode-tabs .tab').forEach(tab => tab.addEventListener('click', () => setPomoMode(tab.dataset.mode)));
updatePomoDisplay();

/* ── PLANNING ────────────────────────────────────────────── */
function renderPlanning() {
  const grid = document.getElementById('planning-grid'); grid.innerHTML = '';
  const now = new Date(), day = now.getDay();
  const days = ['Dim','Lun','Mar','Mer','Jeu','Ven','Sam'];
  for (let i = 0; i < 7; i++) {
    const d = new Date(now); d.setDate(now.getDate() - day + i);
    const dStr = d.toISOString().slice(0,10), isToday = dStr === todayStr();
    const tasks = getTasks().filter(t => t.dueDate === dStr);
    const col = document.createElement('div'); col.className = 'plan-col' + (isToday ? ' today' : ''); col.setAttribute('role', 'gridcell');
    col.innerHTML = `<div class="plan-col-header"><p class="plan-day-name">${days[i]}</p><p class="plan-day-num">${d.getDate()}</p></div>${tasks.map(t => `<div class="plan-task${t.done ? ' done' : ''}">${t.name}</div>`).join('')}`;
    grid.appendChild(col);
  }
}

/* ── OVERVIEW ────────────────────────────────────────────── */
function renderOverview() {
  const habits = getHabits(), tasks = getTasks(), today = todayStr();
  const hDone = habits.filter(h => h.completedDates?.includes(today)).length;
  const tDone = tasks.filter(t => t.done).length;
  const total = habits.length + tasks.length, done = hDone + tDone;
  const pct = total ? Math.round(done / total * 100) : 0;
  document.getElementById('ring-pct').textContent = pct + '%';
  document.getElementById('ring-fill').style.strokeDashoffset = 251.2 * (1 - pct / 100);
  document.getElementById('prog-habits').style.width = (habits.length ? hDone / habits.length * 100 : 0) + '%';
  document.getElementById('prog-tasks').style.width = (tasks.length ? tDone / tasks.length * 100 : 0) + '%';
  document.getElementById('daily-score').textContent = getPoints();
  const snapH = document.getElementById('snap-habits'), snapT = document.getElementById('snap-tasks');
  const todayHabits = habits.filter(h => h.freq === 'daily').slice(0, 4);
  snapH.innerHTML = todayHabits.map(h => { const d = h.completedDates?.includes(today); return `<li class="snap-item${d?' done':''}" data-id="${h.id}"><div class="snap-check"></div><span>${h.name}</span></li>`; }).join('');
  document.getElementById('snap-habits-empty').hidden = todayHabits.length > 0;
  snapH.querySelectorAll('.snap-item').forEach(li => li.addEventListener('click', () => { toggleHabit(li.dataset.id); }));
  const todayTasks = tasks.filter(t => t.dueDate === today || !t.dueDate).slice(0, 4);
  snapT.innerHTML = todayTasks.map(t => `<li class="snap-item${t.done?' done':''}" data-id="${t.id}"><div class="snap-check" style="border-radius:4px"></div><span>${t.name}</span></li>`).join('');
  document.getElementById('snap-tasks-empty').hidden = todayTasks.length > 0;
  snapT.querySelectorAll('.snap-item').forEach(li => li.addEventListener('click', () => { toggleTask(li.dataset.id); }));
}

/* ── INIT ────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  const now = new Date();
  document.getElementById('today-date').textContent = now.toLocaleDateString(typeof currentLang !== 'undefined' ? currentLang : 'fr', { weekday:'long', day:'numeric', month:'long' });
  refreshPoints();
  document.querySelectorAll('.nav-item').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.page)));
  document.querySelectorAll('[data-page-link]').forEach(btn => btn.addEventListener('click', () => showPage(btn.dataset.pageLink)));
  document.getElementById('btn-logout').addEventListener('click', () => { localStorage.removeItem('supabase.auth.token'); window.location.href = 'index.html'; });
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => { if (typeof setLang !== 'undefined') setLang(btn.dataset.lang); }));
  showPage('overview');
});
