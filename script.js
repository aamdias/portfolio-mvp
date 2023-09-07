// JavaScript for toggling dark and light mode
const modeToggle = document.getElementById('modeToggle');
const modeIcon = document.getElementById('modeIcon');
modeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        modeIcon.className = 'fas fa-sun';
        modeToggle.className = 'btn btn-sm btn-secondary';
    } else {
        modeIcon.className = 'fas fa-moon text-dark';
        modeToggle.className = 'btn btn-sm btn-light';
    }
});