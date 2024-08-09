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

// -----------activLink-------

document.addEventListener("DOMContentLoaded", () => {
    const baseDir: string = window.location.pathname.replace(/\/[^\/]*$/, '');
    const currentPath: string = window.location.pathname;
    const homeItems: NodeListOf<HTMLElement> = document.querySelectorAll('.home');

    if (currentPath === `${baseDir}/` || currentPath === `${baseDir}/index.html`) {
        homeItems.forEach((home) => {
            home.style.display = 'none';
        });
    } else {
        homeItems.forEach((home) => {
            home.style.display = 'block';
        });
    }

    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link-mob, .nav-link');
console.log(navLinks);

    navLinks.forEach((link: HTMLAnchorElement) => {
        let linkPath: string | null = link.getAttribute('href');
        if (linkPath) {

            linkPath = `${baseDir}${linkPath.replace('./', '/')}`;
        }

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});