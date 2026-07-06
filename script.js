const reservationForm = document.getElementById('reservation-form');
const reservationMessage = document.getElementById('reservation-message');

if (reservationForm) {
  reservationForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const formData = new FormData(reservationForm);
    const name = formData.get('name') || 'Guest';
    const guests = formData.get('guests');

    reservationMessage.textContent = `Thank you, ${name}! Your reservation request for ${guests} guest(s) has been received.`;
    reservationMessage.style.color = '#2e5939';

    reservationForm.reset();
    reservationForm.querySelector('input[name="guests"]').value = '2';
  });
}

  // Mobile navigation toggle
  const navToggle = document.querySelector('.nav-toggle');
  const mainNav = document.querySelector('#main-navigation');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', () => {
      const isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      mainNav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });

    mainNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        if (mainNav.classList.contains('open')) {
          mainNav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
          mainNav.setAttribute('aria-hidden', 'true');
        }
      });
    });
  }