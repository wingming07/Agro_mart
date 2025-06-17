(() => {
    const form = document.getElementById('loginForm');
    const emailInput = form.email;
    const passwordInput = form.password;
  
    const showError = (input, message) => {
      const span = input.nextElementSibling;
      span.textContent = message;
      span.style.display = 'block';
      input.setAttribute('aria-invalid', 'true');
    };
  
    const clearError = (input) => {
      const span = input.nextElementSibling;
      span.textContent = '';
      span.style.display = 'none';
      input.removeAttribute('aria-invalid');
    };
  
    const validateEmail = (email) => {
      const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return re
  