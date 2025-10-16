document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('lookupForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Load cached data from localStorage
    const cachedData = JSON.parse(localStorage.getItem('formData'));
    if (cachedData) {
        nameInput.value = cachedData.name || '';
        emailInput.value = cachedData.email || '';
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = {
            name: nameInput.value,
            email: emailInput.value
        };
        // Cache the form data in localStorage
        localStorage.setItem('formData', JSON.stringify(formData));
        alert('Form submitted successfully!');
    });
});