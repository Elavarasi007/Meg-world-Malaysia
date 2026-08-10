/* ==========================================================
   CONTACT PAGE JS — Meg World Technologies
   Form validation + submission handling (no fake success state)
========================================================== */

const contactForm = document.getElementById('contactForm');

if(contactForm){

  const fields = {
    fullName: { el: document.getElementById('fullName'), errEl: document.getElementById('err-fullName') },
    email:    { el: document.getElementById('email'),    errEl: document.getElementById('err-email') },
    phone:    { el: document.getElementById('phone'),    errEl: document.getElementById('err-phone') },
    service:  { el: document.getElementById('service'),  errEl: document.getElementById('err-service') },
    message:  { el: document.getElementById('message'),  errEl: document.getElementById('err-message') },
  };

  function setError(key, msg){
    const field = fields[key];
    if(!field) return;
    field.el.closest('.form-group').classList.add('has-error');
    field.errEl.textContent = msg;
  }

  function clearError(key){
    const field = fields[key];
    if(!field) return;
    field.el.closest('.form-group').classList.remove('has-error');
    field.errEl.textContent = '';
  }

  function isValidEmail(value){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function isValidPhone(value){
    const digits = value.replace(/[^\d]/g, '');
    return digits.length >= 7;
  }

  function validate(){
    let valid = true;

    // Full name
    if(fields.fullName.el.value.trim().length < 2){
      setError('fullName', 'Please enter your full name.');
      valid = false;
    } else {
      clearError('fullName');
    }

    // Email
    if(!isValidEmail(fields.email.el.value.trim())){
      setError('email', 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError('email');
    }

    // Phone
    if(!isValidPhone(fields.phone.el.value.trim())){
      setError('phone', 'Please enter a valid phone number.');
      valid = false;
    } else {
      clearError('phone');
    }

    // Service
    if(!fields.service.el.value){
      setError('service', 'Please select a service.');
      valid = false;
    } else {
      clearError('service');
    }

    // Message
    if(fields.message.el.value.trim().length < 10){
      setError('message', 'Please tell us a little about your project (min. 10 characters).');
      valid = false;
    } else {
      clearError('message');
    }

    return valid;
  }

  // Clear individual field errors as the user fixes them
  Object.keys(fields).forEach(key=>{
    const el = fields[key].el;
    const evt = (el.tagName === 'SELECT') ? 'change' : 'input';
    el.addEventListener(evt, ()=>{
      if(el.closest('.form-group').classList.contains('has-error')){
        // quick re-validate just this field
        validate();
      }
    });
  });

  contactForm.addEventListener('submit', (e)=>{
    const valid = validate();

    if(!valid){
      e.preventDefault();
      const firstError = contactForm.querySelector('.form-group.has-error');
      if(firstError){
        firstError.scrollIntoView({behavior:'smooth', block:'center'});
        const input = firstError.querySelector('input, select, textarea');
        if(input) input.focus();
      }
      return;
    }

    // Valid: let the browser submit normally to the FormSubmit endpoint
    // (action attribute on the <form>). No fake "sent" state is shown
    // here — the real success page is served after the actual POST,
    // via the _next hidden field, once FormSubmit is configured.
    const submitBtn = contactForm.querySelector('.contact-submit-btn');
    if(submitBtn){
      submitBtn.disabled = true;
      submitBtn.style.opacity = '.7';
      submitBtn.style.pointerEvents = 'none';
      submitBtn.querySelector('span').textContent = 'Sending...';
    }
  });
}

/* Note: .reveal scroll-in animation for the elements on this page
   (contact cards, form, map/info column) is already handled by the
   shared revealObs in script.js — no need to duplicate it here. */
