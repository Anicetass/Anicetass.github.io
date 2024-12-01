const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Toggle theme on button click
toggleButton.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
    localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
});