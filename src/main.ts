import './style.css';

// open burger------
const burgerBtn:HTMLElement|null = document.querySelector('.burger-btn');
const navMobBox:HTMLElement|null = document.querySelector('.nav-mob');
const navBtnClose:HTMLElement|null = document.querySelector('.nav-btn-close');

const body = document.querySelector('body');


burgerBtn?.addEventListener('click', toggleNav);
navBtnClose?.addEventListener('click', toggleNav);

function toggleNav() {
    console.log('poop');
    
    navMobBox?.classList.toggle('is-visible');
    body?.classList.toggle('no-scroll');
}

// -------------Drop-down ----------

document.addEventListener('DOMContentLoaded', () => {
    const questionsTitles = document.querySelectorAll<HTMLElement>('.questions-title');
   
    questionsTitles.forEach(title => {
        title.addEventListener('click', function() {
            const content = this.nextElementSibling as HTMLElement | null;
            if (content) {
                if (content.style.display === 'block') {
                    content.style.display = 'none';
                } else {
                    content.style.display = 'block';
                }
            }
        });
    });
});

// -----------------
document.addEventListener("DOMContentLoaded", () => {
    const currentPath: string = window.location.pathname;
    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link-mob, .nav-link');
    const home: HTMLElement | null = document.querySelector('.home');

    navLinks.forEach((link: HTMLAnchorElement) => {
        const linkPath: string | null = link.getAttribute('href');

        if (home) {
            if (currentPath === '/index.html') {
                home.style.display = 'none';
            } else {
                home.style.display = 'inline';
            }
        }

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});