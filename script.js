// Loader intro auto-hide
window.addEventListener('load', ()=>{
  const intro = document.getElementById('introWrap');
  setTimeout(()=>{
    intro.style.opacity='0';
    intro.style.transform='translateY(-8px)';
    intro.style.transition='opacity .6s ease, transform .6s ease';
    setTimeout(()=>intro.remove(),800);
  },900);
});

// Cursor glow follow
const glow = document.getElementById('cursorGlow');
document.addEventListener('mousemove', (e)=>{
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});
document.addEventListener('touchstart', ()=>{ glow.style.display='none'; });

// Theme toggle
const toggle = document.getElementById('toggleTheme');
toggle.addEventListener('click', ()=>{
  document.body.classList.toggle('dark');
});

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('visible');
      // animate children with pop class
      entry.target.querySelectorAll('.pop').forEach((el,i)=>{ setTimeout(()=>el.classList.add('pop'), i*80); });
      io.unobserve(entry.target);
    }
  });
},{threshold:0.12});
reveals.forEach(r=>io.observe(r));

// Contact form - opens mailto with prefilled content
const form = document.getElementById('contactForm');
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const subject = encodeURIComponent('Portfolio Contact from ' + name);
  const body = encodeURIComponent('Name: '+name+'\\nEmail: '+email+'\\n\\n'+message);
  window.location.href = `mailto:suryanshg821@gmail.com?subject=${subject}&body=${body}`;
});

// Buttons actions
document.getElementById('whatsappBtn').addEventListener('click', ()=>{
  window.open('https://wa.me/918957131881?text=Hi%20Suryansh!%20I%20saw%20your%20portfolio.','_blank');
});
document.getElementById('contactBtn').addEventListener('click', ()=>{
  document.getElementById('name').focus();
  window.scrollTo({top:document.querySelector('.contact-form').offsetTop - 80, behavior:'smooth'});
});