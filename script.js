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