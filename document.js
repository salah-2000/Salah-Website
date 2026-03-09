document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.hero-background-slideshow .slide');
  if (slides.length < 2) return;

  let current = 0;

  function showNext() {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }

  // ابدأ بالصورة الأولى
  slides[0].classList.add('active');

  // غيّر كل 8 ثوانٍ (يمكنك تعديل الرقم)
  setInterval(showNext, 8000);
});

// فتح/إغلاق الـ Menu عند الضغط على الزر (Toggle)
document.getElementById('settings-btn').addEventListener('click', () => {
  const menu = document.getElementById('settings-menu');
  menu.classList.toggle('d-none');
});

// دالة لإغلاق الـ Menu تلقائيًا
function closeMenu() {
  document.getElementById('settings-menu').classList.add('d-none');
}

// تغيير اللون + إغلاق تلقائي
document.querySelectorAll('.color-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const color = btn.getAttribute('data-color');
    document.documentElement.style.setProperty('--primary-color', color);
    localStorage.setItem('primaryColor', color);
    closeMenu();  // إغلاق تلقائي بعد الاختيار
  });
});

// تغيير الـ Mode + إغلاق تلقائي
document.getElementById('light-mode').addEventListener('click', () => {
  document.body.classList.add('light-mode');
  localStorage.setItem('mode', 'light');
  closeMenu();
});

document.getElementById('dark-mode').addEventListener('click', () => {
  document.body.classList.remove('light-mode');
  localStorage.setItem('mode', 'dark');
  closeMenu();
});

// تحميل الإعدادات السابقة
window.addEventListener('load', () => {
  const savedColor = localStorage.getItem('primaryColor');
  if (savedColor) document.documentElement.style.setProperty('--primary-color', savedColor);

  const savedMode = localStorage.getItem('mode');
  if (savedMode === 'light') document.body.classList.add('light-mode');
});

// تبديل اللغة
document.getElementById('language-switch').addEventListener('change', function() {
  const lang = this.value;
  localStorage.setItem('preferredLang', lang);
  switchLanguage(lang);
});

function switchLanguage(lang) {
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.textContent = el.getAttribute(`data-${lang}`);
    if (el.tagName === 'A' && el.hasAttribute(`data-${lang}-href`)) {
      el.href = el.getAttribute(`data-${lang}-href`);
    }
  });
  document.documentElement.lang = lang;
  document.documentElement.dir = (lang === 'ar') ? 'rtl' : 'ltr';
  document.body.style.direction = (lang === 'ar') ? 'rtl' : 'ltr';
}

// تحميل اللغة السابقة
window.addEventListener('load', () => {
  const savedLang = localStorage.getItem('preferredLang') || 'ar';
  document.getElementById('language-switch').value = savedLang;
  switchLanguage(savedLang);
});

// Closelist
var closeList = document.getElementById('closelist');
var menu = document.getElementById('list');
function closelist(){
  menu.style.right = '0'
}
// footer copy right
  document.getElementById("year").textContent = new Date().getFullYear();