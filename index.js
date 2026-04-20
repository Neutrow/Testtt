/* ── i18n TRANSLATIONS ──────────────────────────────────── */
const TRANSLATIONS = {
  fr: {
    'nav.features': 'Fonctionnalités', 'nav.pricing': 'Tarifs',
    'nav.login': 'Se connecter', 'nav.signup': "S'inscrire",
    'hero.badge': 'Productivité personnelle',
    'hero.title1': 'Organise ta discipline.', 'hero.title2': 'Construis ta constance.',
    'hero.subtitle': 'Habits, tâches, focus, planning et statistiques — tout ce qu'il faut pour avancer chaque jour, dans une seule app.',
    'hero.cta.primary': "S'inscrire gratuitement", 'hero.cta.secondary': 'Se connecter',
    'stats.modules': 'Modules', 'stats.offline': 'Offline', 'stats.languages': 'Langues', 'stats.habits': 'Habitudes',
    'features.eyebrow': 'Ce que tu obtiens', 'features.title': 'Tout ce dont tu as besoin.',
    'feat.habits.title': 'Suivi des habitudes', 'feat.habits.desc': 'Quotidiennes, hebdomadaires, mensuelles. Streaks visuels et progression en temps réel.',
    'feat.tasks.title': 'Gestionnaire de tâches', 'feat.tasks.desc': 'Vision hebdomadaire, priorités et points de progression.',
    'feat.pomodoro.title': 'Timer Pomodoro', 'feat.pomodoro.desc': 'Sessions focus avec chronomètre intégré et pauses guidées.',
    'feat.planning.title': 'Planning hebdomadaire', 'feat.planning.desc': 'Vue calendrier style Apple pour organiser ta semaine.',
    'feat.stats.title': 'Statistiques visuelles', 'feat.stats.desc': 'Graphique 30 jours, heatmap de régularité et taux de réussite.',
    'feat.rewards.title': 'Système de récompenses', 'feat.rewards.desc': 'Gagne des points et débloque des récompenses personnalisables.',
    'pricing.eyebrow': 'Nos offres', 'pricing.title': 'Choisis ton plan.', 'pricing.subtitle': 'Commence gratuitement.',
    'plan.original.name': 'Flow Original', 'plan.pro.name': 'Flow Pro', 'plan.premium.name': 'Flow Premium', 'plan.life.name': 'Flow Life',
    'plan.per_month': '/mois', 'plan.per_year': '/an', 'plan.one_time': 'unique',
    'plan.popular': '⚡ Populaire', 'plan.saves': 'Économise 37%',
    'plan.feat.core': 'Toutes les fonctionnalités core', 'plan.feat.habits': 'Habitudes illimitées',
    'plan.feat.planning': 'Planning hebdomadaire', 'plan.feat.pomodoro': 'Timer Pomodoro',
    'plan.feat.pro_all': 'Tout Flow Original', 'plan.feat.stats': 'Statistiques avancées',
    'plan.feat.shop': 'Boutique de récompenses', 'plan.feat.sync': 'Sync multi-appareils',
    'plan.feat.prem_all': 'Tout Flow Pro', 'plan.feat.early': 'Accès anticipé',
    'plan.feat.export': 'Export de données', 'plan.feat.themes': 'Thèmes personnalisés',
    'plan.feat.lifetime': 'Accès à vie complet', 'plan.feat.updates': 'Toutes les mises à jour',
    'plan.feat.vip': 'Support VIP', 'plan.feat.exclusive': 'Fonctions exclusives',
    'plan.cta.start': 'Commencer', 'plan.cta.lifetime': 'Accès à vie', 'plan.stripe': 'Paiement sécurisé · Stripe',
    'footer.note': 'Conçu pour la discipline personnelle — 100% local, 0 tracking.',
    'modal.login.title': 'Content de te revoir.', 'modal.login.sub': 'Connecte-toi pour accéder à ton espace.',
    'modal.login.cta': 'Se connecter', 'modal.login.switch': 'Pas encore de compte ?', 'modal.login.switch_cta': "S'inscrire",
    'modal.signup.title': 'Crée ton compte.', 'modal.signup.sub': 'Gratuit, sans carte bancaire, pour toujours.',
    'modal.signup.cta': 'Créer mon compte', 'modal.signup.switch': 'Déjà un compte ?', 'modal.signup.switch_cta': 'Se connecter',
    'form.email': 'Email', 'form.password': 'Mot de passe', 'form.confirm_password': 'Confirmer le mot de passe',
    'toast.login_ok': 'Connexion réussie !', 'toast.signup_ok': 'Compte créé ! Vérifie ton email.', 'toast.error': 'Une erreur est survenue.',
  },
  en: {
    'nav.features': 'Features', 'nav.pricing': 'Pricing',
    'nav.login': 'Log in', 'nav.signup': 'Sign up',
    'hero.badge': 'Personal productivity',
    'hero.title1': 'Organise your discipline.', 'hero.title2': 'Build your consistency.',
    'hero.subtitle': 'Habits, tasks, focus, planning and statistics — everything you need to move forward every day, in one app.',
    'hero.cta.primary': 'Sign up for free', 'hero.cta.secondary': 'Log in',
    'stats.modules': 'Modules', 'stats.offline': 'Offline', 'stats.languages': 'Languages', 'stats.habits': 'Habits',
    'features.eyebrow': 'What you get', 'features.title': 'Everything you need.',
    'feat.habits.title': 'Habit Tracker', 'feat.habits.desc': 'Daily, weekly, monthly. Visual streaks and real-time progress.',
    'feat.tasks.title': 'Task Manager', 'feat.tasks.desc': 'Weekly view, priorities and progress points.',
    'feat.pomodoro.title': 'Pomodoro Timer', 'feat.pomodoro.desc': 'Focus sessions with built-in stopwatch and guided breaks.',
    'feat.planning.title': 'Weekly Planning', 'feat.planning.desc': 'Apple-style calendar view to organise your week.',
    'feat.stats.title': 'Visual Statistics', 'feat.stats.desc': '30-day chart, habit heatmap and completion rates.',
    'feat.rewards.title': 'Reward System', 'feat.rewards.desc': 'Earn points and unlock customisable rewards.',
    'pricing.eyebrow': 'Our plans', 'pricing.title': 'Choose your plan.', 'pricing.subtitle': 'Start for free.',
    'plan.original.name': 'Flow Original', 'plan.pro.name': 'Flow Pro', 'plan.premium.name': 'Flow Premium', 'plan.life.name': 'Flow Life',
    'plan.per_month': '/month', 'plan.per_year': '/year', 'plan.one_time': 'one-time',
    'plan.popular': '⚡ Popular', 'plan.saves': 'Save 37%',
    'plan.feat.core': 'All core features', 'plan.feat.habits': 'Unlimited habits',
    'plan.feat.planning': 'Weekly planning', 'plan.feat.pomodoro': 'Pomodoro timer',
    'plan.feat.pro_all': 'Everything in Original', 'plan.feat.stats': 'Advanced statistics',
    'plan.feat.shop': 'Rewards shop', 'plan.feat.sync': 'Multi-device sync',
    'plan.feat.prem_all': 'Everything in Pro', 'plan.feat.early': 'Early access',
    'plan.feat.export': 'Data export', 'plan.feat.themes': 'Custom themes',
    'plan.feat.lifetime': 'Full lifetime access', 'plan.feat.updates': 'All future updates',
    'plan.feat.vip': 'VIP support', 'plan.feat.exclusive': 'Exclusive features',
    'plan.cta.start': 'Get started', 'plan.cta.lifetime': 'Lifetime access', 'plan.stripe': 'Secure payment · Stripe',
    'footer.note': 'Built for personal discipline — 100% local, 0 tracking.',
    'modal.login.title': 'Welcome back.', 'modal.login.sub': 'Log in to access your space.',
    'modal.login.cta': 'Log in', 'modal.login.switch': 'No account yet?', 'modal.login.switch_cta': 'Sign up',
    'modal.signup.title': 'Create your account.', 'modal.signup.sub': 'Free, no credit card, forever.',
    'modal.signup.cta': 'Create account', 'modal.signup.switch': 'Already have an account?', 'modal.signup.switch_cta': 'Log in',
    'form.email': 'Email', 'form.password': 'Password', 'form.confirm_password': 'Confirm password',
    'toast.login_ok': 'Logged in!', 'toast.signup_ok': 'Account created! Check your email.', 'toast.error': 'An error occurred.',
  },
  es: {
    'nav.features': 'Funciones', 'nav.pricing': 'Precios', 'nav.login': 'Iniciar sesión', 'nav.signup': 'Registrarse',
    'hero.badge': 'Productividad personal', 'hero.title1': 'Organiza tu disciplina.', 'hero.title2': 'Construye tu constancia.',
    'hero.subtitle': 'Hábitos, tareas, foco, planificación y estadísticas — todo en una sola app.',
    'hero.cta.primary': 'Registrarse gratis', 'hero.cta.secondary': 'Iniciar sesión',
    'stats.modules': 'Módulos', 'stats.offline': 'Sin conexión', 'stats.languages': 'Idiomas', 'stats.habits': 'Hábitos',
    'features.eyebrow': 'Lo que obtienes', 'features.title': 'Todo lo que necesitas.',
    'feat.habits.title': 'Seguimiento de hábitos', 'feat.habits.desc': 'Diarios, semanales, mensuales. Rachas visuales.',
    'feat.tasks.title': 'Gestor de tareas', 'feat.tasks.desc': 'Vista semanal, prioridades y puntos.',
    'feat.pomodoro.title': 'Temporizador Pomodoro', 'feat.pomodoro.desc': 'Sesiones de enfoque con cronómetro integrado.',
    'feat.planning.title': 'Planificación semanal', 'feat.planning.desc': 'Vista de calendario estilo Apple.',
    'feat.stats.title': 'Estadísticas visuales', 'feat.stats.desc': 'Gráfico 30 días, mapa de calor y tasas.',
    'feat.rewards.title': 'Sistema de recompensas', 'feat.rewards.desc': 'Gana puntos y desbloquea recompensas.',
    'pricing.eyebrow': 'Nuestros planes', 'pricing.title': 'Elige tu plan.', 'pricing.subtitle': 'Empieza gratis.',
    'plan.original.name': 'Flow Original', 'plan.pro.name': 'Flow Pro', 'plan.premium.name': 'Flow Premium', 'plan.life.name': 'Flow Life',
    'plan.per_month': '/mes', 'plan.per_year': '/año', 'plan.one_time': 'único', 'plan.popular': '⚡ Popular', 'plan.saves': 'Ahorra 37%',
    'plan.feat.core': 'Todas las funciones', 'plan.feat.habits': 'Hábitos ilimitados', 'plan.feat.planning': 'Planificación semanal', 'plan.feat.pomodoro': 'Temporizador Pomodoro',
    'plan.feat.pro_all': 'Todo Flow Original', 'plan.feat.stats': 'Estadísticas avanzadas', 'plan.feat.shop': 'Tienda', 'plan.feat.sync': 'Sincronización',
    'plan.feat.prem_all': 'Todo Flow Pro', 'plan.feat.early': 'Acceso anticipado', 'plan.feat.export': 'Exportar datos', 'plan.feat.themes': 'Temas personalizados',
    'plan.feat.lifetime': 'Acceso vitalicio', 'plan.feat.updates': 'Todas las actualizaciones', 'plan.feat.vip': 'Soporte VIP', 'plan.feat.exclusive': 'Funciones exclusivas',
    'plan.cta.start': 'Empezar', 'plan.cta.lifetime': 'Acceso vitalicio', 'plan.stripe': 'Pago seguro · Stripe',
    'footer.note': 'Diseñado para la disciplina personal — 100% local, 0 tracking.',
    'modal.login.title': 'Bienvenido de nuevo.', 'modal.login.sub': 'Inicia sesión para acceder.',
    'modal.login.cta': 'Iniciar sesión', 'modal.login.switch': '¿Sin cuenta?', 'modal.login.switch_cta': 'Registrarse',
    'modal.signup.title': 'Crea tu cuenta.', 'modal.signup.sub': 'Gratis, sin tarjeta.',
    'modal.signup.cta': 'Crear cuenta', 'modal.signup.switch': '¿Ya tienes cuenta?', 'modal.signup.switch_cta': 'Iniciar sesión',
    'form.email': 'Email', 'form.password': 'Contraseña', 'form.confirm_password': 'Confirmar contraseña',
    'toast.login_ok': '¡Sesión iniciada!', 'toast.signup_ok': '¡Cuenta creada! Revisa tu email.', 'toast.error': 'Ocurrió un error.',
  },
  pt: {
    'nav.features': 'Funcionalidades', 'nav.pricing': 'Preços', 'nav.login': 'Entrar', 'nav.signup': 'Cadastrar',
    'hero.badge': 'Produtividade pessoal', 'hero.title1': 'Organize sua disciplina.', 'hero.title2': 'Construa sua constância.',
    'hero.subtitle': 'Hábitos, tarefas, foco, planejamento e estatísticas — tudo em um app.',
    'hero.cta.primary': 'Cadastrar grátis', 'hero.cta.secondary': 'Entrar',
    'stats.modules': 'Módulos', 'stats.offline': 'Offline', 'stats.languages': 'Idiomas', 'stats.habits': 'Hábitos',
    'features.eyebrow': 'O que você obtém', 'features.title': 'Tudo que você precisa.',
    'feat.habits.title': 'Rastreador de hábitos', 'feat.habits.desc': 'Diários, semanais, mensais. Sequências visuais.',
    'feat.tasks.title': 'Gerenciador de tarefas', 'feat.tasks.desc': 'Visão semanal, prioridades e pontos.',
    'feat.pomodoro.title': 'Timer Pomodoro', 'feat.pomodoro.desc': 'Sessões de foco com cronômetro integrado.',
    'feat.planning.title': 'Planejamento semanal', 'feat.planning.desc': 'Calendário estilo Apple.',
    'feat.stats.title': 'Estatísticas visuais', 'feat.stats.desc': 'Gráfico 30 dias, heatmap e taxas.',
    'feat.rewards.title': 'Sistema de recompensas', 'feat.rewards.desc': 'Ganhe pontos e desbloqueie recompensas.',
    'pricing.eyebrow': 'Nossos planos', 'pricing.title': 'Escolha seu plano.', 'pricing.subtitle': 'Comece grátis.',
    'plan.original.name': 'Flow Original', 'plan.pro.name': 'Flow Pro', 'plan.premium.name': 'Flow Premium', 'plan.life.name': 'Flow Life',
    'plan.per_month': '/mês', 'plan.per_year': '/ano', 'plan.one_time': 'único', 'plan.popular': '⚡ Popular', 'plan.saves': 'Economize 37%',
    'plan.feat.core': 'Todas as funções', 'plan.feat.habits': 'Hábitos ilimitados', 'plan.feat.planning': 'Planejamento semanal', 'plan.feat.pomodoro': 'Timer Pomodoro',
    'plan.feat.pro_all': 'Tudo Flow Original', 'plan.feat.stats': 'Estatísticas avançadas', 'plan.feat.shop': 'Loja', 'plan.feat.sync': 'Sincronização',
    'plan.feat.prem_all': 'Tudo Flow Pro', 'plan.feat.early': 'Acesso antecipado', 'plan.feat.export': 'Exportar dados', 'plan.feat.themes': 'Temas personalizados',
    'plan.feat.lifetime': 'Acesso vitalício', 'plan.feat.updates': 'Todas as atualizações', 'plan.feat.vip': 'Suporte VIP', 'plan.feat.exclusive': 'Funções exclusivas',
    'plan.cta.start': 'Começar', 'plan.cta.lifetime': 'Acesso vitalício', 'plan.stripe': 'Pagamento seguro · Stripe',
    'footer.note': 'Desenvolvido para disciplina pessoal — 100% local, 0 rastreamento.',
    'modal.login.title': 'Bem-vindo de volta.', 'modal.login.sub': 'Entre para acessar.',
    'modal.login.cta': 'Entrar', 'modal.login.switch': 'Sem conta?', 'modal.login.switch_cta': 'Cadastrar',
    'modal.signup.title': 'Crie sua conta.', 'modal.signup.sub': 'Grátis, sem cartão.',
    'modal.signup.cta': 'Criar conta', 'modal.signup.switch': 'Já tem conta?', 'modal.signup.switch_cta': 'Entrar',
    'form.email': 'Email', 'form.password': 'Senha', 'form.confirm_password': 'Confirmar senha',
    'toast.login_ok': 'Conectado!', 'toast.signup_ok': 'Conta criada! Verifique seu email.', 'toast.error': 'Ocorreu um erro.',
  }
};

/* ── i18n ENGINE ────────────────────────────────────────── */
let currentLang = localStorage.getItem('flow_lang') || 'fr';

function t(key) { return TRANSLATIONS[currentLang]?.[key] ?? TRANSLATIONS.fr[key] ?? key; }

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (el.tagName === 'INPUT') el.placeholder = t(key);
    else el.textContent = t(key);
  });
  document.documentElement.lang = currentLang;
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('flow_lang', lang);
  document.querySelectorAll('.lang-btn').forEach(b => {
    const active = b.dataset.lang === lang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active);
  });
  applyTranslations();
}

/* ── SCROLL REVEAL ──────────────────────────────────────── */
function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      const delay = parseInt(el.dataset.delay || 0, 10);
      setTimeout(() => el.classList.add('visible'), delay);
      observer.unobserve(el);
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ── NAVBAR ─────────────────────────────────────────────── */
function initNavbar() {
  const navbar = document.querySelector('.navbar');
  const burger = document.getElementById('burger');
  const mobileMenu = document.getElementById('mobile-menu');

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });

  function toggleMenu(open) {
    mobileMenu.hidden = !open;
    burger.setAttribute('aria-expanded', open);
    if (open) {
      const spans = burger.querySelectorAll('span');
      spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
      spans[1].style.opacity = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
    } else {
      burger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
    }
  }

  burger.addEventListener('click', () => toggleMenu(mobileMenu.hidden));
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));
}

/* ── TOAST ──────────────────────────────────────────────── */
let toastTimer;
function showToast(msg) {
  const toast = document.getElementById('toast');
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

/* ── MODALS ─────────────────────────────────────────────── */
function openModal(id) {
  document.getElementById(id).hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById(id).querySelector('input')?.focus(), 50);
}

function closeModal(id) {
  document.getElementById(id).hidden = true;
  document.body.style.overflow = '';
}

function initModals() {
  const triggers = [
    ['btn-login', 'modal-login'], ['m-btn-login', 'modal-login'],
    ['hero-login', 'modal-login'], ['btn-signup', 'modal-signup'],
    ['m-btn-signup', 'modal-signup'], ['hero-signup', 'modal-signup'],
  ];
  triggers.forEach(([btnId, modalId]) => {
    document.getElementById(btnId)?.addEventListener('click', () => openModal(modalId));
  });

  document.getElementById('switch-to-signup').addEventListener('click', () => { closeModal('modal-login'); openModal('modal-signup'); });
  document.getElementById('switch-to-login').addEventListener('click', () => { closeModal('modal-signup'); openModal('modal-login'); });

  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(overlay.id); });
    overlay.querySelector('.modal-close').addEventListener('click', () => closeModal(overlay.id));
  });

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') ['modal-login', 'modal-signup'].forEach(id => { if (!document.getElementById(id).hidden) closeModal(id); });
  });
}

/* ── AUTH (Supabase) ────────────────────────────────────── */
async function initAuth() {
  const SUPABASE_URL = window.SUPABASE_URL || '';
  const SUPABASE_KEY = window.SUPABASE_ANON_KEY || '';
  if (!SUPABASE_URL || !SUPABASE_KEY) return;

  const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm');
  const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);

  const { data: { session } } = await supabase.auth.getSession();
  if (session) { window.location.href = 'app.html'; return; }

  document.getElementById('form-login').addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('login-submit');
    const err = document.getElementById('login-error');
    btn.disabled = true; err.textContent = '';
    const { error } = await supabase.auth.signInWithPassword({
      email: document.getElementById('login-email').value,
      password: document.getElementById('login-pass').value,
    });
    if (error) { err.textContent = error.message; btn.disabled = false; }
    else { showToast(t('toast.login_ok')); setTimeout(() => window.location.href = 'app.html', 800); }
  });

  document.getElementById('form-signup').addEventListener('submit', async e => {
    e.preventDefault();
    const btn = document.getElementById('signup-submit');
    const err = document.getElementById('signup-error');
    const pass = document.getElementById('signup-pass').value;
    const confirm = document.getElementById('signup-confirm').value;
    if (pass !== confirm) { err.textContent = 'Les mots de passe ne correspondent pas.'; return; }
    btn.disabled = true; err.textContent = '';
    const { error } = await supabase.auth.signUp({
      email: document.getElementById('signup-email').value,
      password: pass,
    });
    if (error) { err.textContent = error.message; btn.disabled = false; }
    else { showToast(t('toast.signup_ok')); closeModal('modal-signup'); }
  });
}

/* ── INIT ───────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  setLang(currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => btn.addEventListener('click', () => setLang(btn.dataset.lang)));
  initScrollReveal();
  initNavbar();
  initModals();
  initAuth().catch(() => {});
});
