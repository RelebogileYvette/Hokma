// Validate form and show confirmation
document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('.book-form form');

  form.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const message = form.message.value.trim();

    if (!name || !email || !phone || !message) {
      alert('Please fill in all fields.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Simulate form success (can be replaced with AJAX later)
    alert('Thank you, ' + name + '! Your booking has been submitted.');
    form.reset();
  });

  function validateEmail(email) {
    const pattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
    return pattern.test(email);
  }
});
