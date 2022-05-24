const btnMobile = document.getElementById('btn-mobile');

function toggleMenu (event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');
    event.currentTarget.setAtribute('aria-expended', 'active');
    if(active) {
        event.currentTarget.setAtribute('aria-label', 'Fechar menu');
    } else {
        event.currentTarget.setAtribute('aria-label', 'Abrir menu');
    }
}


btnMobile.addEventListener('click',toggleMenu);
btnMobile.addEventListener('touchstart',toggleMenu);
