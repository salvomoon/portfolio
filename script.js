const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu'); // Elemento dell'icona "X"

function toggleMenu() {
    menuButton.classList.toggle('bounce'); // Aggiungi la classe "bounce" al testo del menu
    menu.classList.toggle('active'); // Aggiungi/rimuovi la classe "active" per aprire/chiudere il menu
    menuButton.classList.toggle('active'); // Aggiungi/rimuovi la classe "active" al pulsante del menu
}

function closeMenuOnClickOutside(event) {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('active');
        menuButton.classList.remove('active'); // Rimuovi la classe "active" dal pulsante del menu
    }
}

menuButton.addEventListener('click', () => {
    toggleMenu();
    menu.classList.add('animate'); // Aggiungi la classe "animate" al menu
    menuButton.classList.add('active'); // Aggiungi la classe "active" al pulsante del menu
    // Verifica se il pulsante è nella posizione desiderata (metà della pagina)
    const windowHeight = window.innerHeight;
    const buttonHeight = menuButton.offsetHeight;
    const buttonTop = menuButton.getBoundingClientRect().top;

    if (buttonTop >= windowHeight / 2 - buttonHeight / 2) {
        // Se il pulsante è nella posizione desiderata, apri il menu con un ritardo di 500 ms (mezzo secondo)
        setTimeout(() => {
            // Aggiungi qui il codice per aprire il menu
            menu.classList.add('active');
        }, 500); // 500 ms di ritardo
    }
});

closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
    menuButton.classList.remove('active'); // Rimuovi la classe "active" dal pulsante del menu
});

document.addEventListener('click', closeMenuOnClickOutside);

menu.classList.remove('active'); // Rimuovi la classe "active" all'inizio per chiudere il menu

menu.addEventListener('animationend', () => {
    menu.classList.remove('animate'); // Rimuovi la classe "animate"
});

