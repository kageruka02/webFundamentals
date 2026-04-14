  const emailInput = document.getElementById('email');
    const emailError = document.getElementById('emailError');
    const form = document.getElementById('subscribeForm');
    const dismissBtn = document.getElementById('dismissBtn');
    const signupCard = document.getElementById('signupCard');
    const successCard = document.getElementById('successCard');
    const confirmedEmail = document.getElementById('confirmedEmail');

    function isValidEmail(email) {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function setError(show) {
      emailError.classList.toggle('visible', show);
      emailInput.classList.toggle('error', show);
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
      const val = emailInput.value.trim();
      if (!isValidEmail(val)) {
        setError(true);
        return;
      }
      setError(false);
      confirmedEmail.textContent = val;
      signupCard.classList.add('hidden');
      successCard.classList.add('visible');
    });

    emailInput.addEventListener('input', () => {
      if (emailInput.classList.contains('error')) {
        setError(!isValidEmail(emailInput.value.trim()));
      }
    });

    dismissBtn.addEventListener('click', () => {
      successCard.classList.remove('visible');
      signupCard.classList.remove('hidden');
      emailInput.value = '';
      setError(false);
    });