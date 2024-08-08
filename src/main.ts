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