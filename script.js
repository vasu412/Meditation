document.addEventListener('DOMContentLoaded', function() {
    // Animation for the hero section
    const hero = document.querySelector('.hero');
    hero.style.opacity = 0;
    hero.style.transform = 'translateY(-20px)';
    setTimeout(function() {
        hero.style.transition = 'opacity 1s ease, transform 1s ease';
        hero.style.opacity = 1;
        hero.style.transform = 'translateY(0)';
    }, 500);

    // Animation for the content section
    const content = document.querySelector('.content');
    content.style.opacity = 0;
    content.style.transform = 'translateY(20px)';
    setTimeout(function() {
        content.style.transition = 'opacity 1s ease, transform 1s ease';
        content.style.opacity = 1;
        content.style.transform = 'translateY(0)';
    }, 1000);

    // Hover effect for the "Start Your Journey Today" button
    const btnStart = document.querySelector('.btn-start');
    btnStart.addEventListener('mouseenter', function() {
        this.style.backgroundColor = '#00796b';
        this.style.transform = 'scale(1.05)';
    });
    btnStart.addEventListener('mouseleave', function() {
        this.style.backgroundColor = '#009688';
        this.style.transform = 'scale(1)';
    });

    // Scroll reveal animation
    const sections = document.querySelectorAll('section');
    window.addEventListener('scroll', function() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (sectionTop < windowHeight * 0.75) {
                section.style.opacity = 1;
                section.style.transform = 'translateY(0)';
            }
        });
    });
});
