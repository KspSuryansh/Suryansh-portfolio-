// Theme toggle and sticky header + fade-in using IntersectionObserver
(function(){
  const toggle = document.getElementById('themeToggle');
  const root = document.documentElement;
  const body = document.body;
  // Load saved theme
  const saved = localStorage.getItem('theme');
  if(saved === 'dark'){ body.classList.add('theme-dark'); toggle.textContent = '☀️'; }

  toggle.addEventListener('click', ()=>{
    const dark = body.classList.toggle('theme-dark');
    toggle.textContent = dark ? '☀️' : '🌙';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  });

  // Sticky header shrink on scroll
  const header = document.getElementById('siteHeader');
  let lastScroll = 0;
  window.addEventListener('scroll', ()=>{
    const sc = window.scrollY;
    if(sc > 40) header.classList.add('scrolled'); else header.classList.remove('scrolled');
    lastScroll = sc;
  });

  // Fade in sections
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting) entry.target.classList.add('visible');
    });
  }, {threshold:0.15});
  document.querySelectorAll('.fade-in').forEach(el=>observer.observe(el));

  // Smooth anchor scroll for header links
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click',(e)=>{
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth', block:'start'});
    });
  });
})();