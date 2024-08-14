import './style.css';

// Открытие/закрытие бургер-меню
const burgerBtn: HTMLElement | null = document.querySelector('.burger-btn');
const navMobBox: HTMLElement | null = document.querySelector('.nav-mob');
const navBtnClose: HTMLElement | null = document.querySelector('.nav-btn-close');
const body = document.querySelector('body');

function toggleNav() {
    navMobBox?.classList.toggle('is-visible');
    body?.classList.toggle('no-scroll');
}

burgerBtn?.addEventListener('click', toggleNav);
navBtnClose?.addEventListener('click', toggleNav);

// Выпадающие элементы
document.addEventListener('DOMContentLoaded', () => {
    const questionsTitles = document.querySelectorAll<HTMLElement>('.questions-title');

    questionsTitles.forEach(title => {
        title.addEventListener('click', function () {
            const content = this.nextElementSibling as HTMLElement | null;
            if (content) {
                content.style.display = content.style.display === 'block' ? 'none' : 'block';
            }
        });
    });
});

// Активация ссылок в меню
document.addEventListener("DOMContentLoaded", () => {
    const baseDir: string = window.location.pathname.replace(/\/[^\/]*$/, '');
    const currentPath: string = window.location.pathname;
    const homeItems: NodeListOf<HTMLElement> = document.querySelectorAll('.home');
    const logo: HTMLAnchorElement | null = document.querySelector('.logo-link');
    const logoImg: HTMLAnchorElement | null = document.querySelector('.logo');

    if (currentPath === `${baseDir}/` || currentPath === `${baseDir}/index.html`) {
        homeItems.forEach(home => home.style.display = 'none');
        if (logo) logo.style.display = 'none';
        if (logoImg) logoImg.style.display = 'block';
    } else {
        homeItems.forEach(home => home.style.display = 'block');
        if (logo) logo.style.display = 'block';
        if (logoImg) logoImg.style.display = 'none';
    }

    const navLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav-link-mob, .nav-link');

    navLinks.forEach(link => {
        let linkPath = link.getAttribute('href');
        if (linkPath) {
            linkPath = `${baseDir}${linkPath.replace('./', '/')}`;
        }

        if (linkPath === currentPath) {
            link.classList.add('active');
        }
    });
});
