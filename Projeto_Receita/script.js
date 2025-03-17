document.addEventListener('DOMContentLoaded', function() {
    const homeIcon = document.querySelector('.icon-home a');
    homeIcon.addEventListener('click', function(event) {
        event.preventDefault();
        window.location.href = 'index.html';
    });

    const navLinks = document.querySelectorAll('.navegacao-receita a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const target = event.target.getAttribute('href');
            window.location.href = target;
        });
    });
});
