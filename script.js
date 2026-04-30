// Small script: set year and handle contact form via mailto
// Set current year where needed
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Mailto-based contact submission (all contact pages use same ID)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', function(e){
    e.preventDefault();
    const name = (document.getElementById('name')||{}).value?.trim() || '';
    const email = (document.getElementById('email')||{}).value?.trim() || '';
    const company = (document.getElementById('company')||{}).value?.trim() || '';
    const message = (document.getElementById('message')||{}).value?.trim() || '';

    const to = 'info@ntulinetworking.example';
    const subject = encodeURIComponent('Website inquiry from ' + (name||email||'visitor'));
    const body = encodeURIComponent(`Name: ${name}\nCompany: ${company}\nEmail: ${email}\n\nMessage:\n${message}`);

window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    
    // Show success message
    const successMsg = document.createElement('div');
    successMsg.className = 'form-success';
    successMsg.textContent = 'Thank you! Your email client has opened. If not, email us directly at ' + to;
    successMsg.setAttribute('role', 'alert');
    contactForm.parentNode.insertBefore(successMsg, contactForm.nextSibling);
    contactForm.reset();
    setTimeout(() => successMsg.remove(), 8000);
  });
}

// Mobile nav toggle
const navToggle = document.querySelector('.nav-toggle');
if(navToggle){
  navToggle.addEventListener('click', ()=>{
    const nav = document.querySelector('.nav');
    if(nav){
      if(nav.style.display === 'flex'){
        nav.style.display = 'none';
        navToggle.setAttribute('aria-expanded', 'false');
      } else {
        nav.style.display = 'flex';
        navToggle.setAttribute('aria-expanded', 'true');
      }
    }
  });
}
