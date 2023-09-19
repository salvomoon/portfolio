const menuButton = document.getElementById('menu-button');
const menu = document.getElementById('menu');
const closeMenu = document.getElementById('close-menu'); // Elemento dell'icona "X"

function toggleMenu() {
    menuButton.classList.add('bounce'); // Aggiungi la classe "bounce" al testo del menu
    menu.classList.toggle('active'); // Aggiungi/rimuovi la classe "active" per aprire/chiudere il menu
}

menuButton.addEventListener('click', toggleMenu);

// Chiudi il menu quando si fa clic sull'icona "X"
closeMenu.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Chiudi il menu quando si fa clic altrove sulla pagina
document.addEventListener('click', (event) => {
    if (!menu.contains(event.target) && event.target !== menuButton) {
        menu.classList.remove('active');
    }
});

// Rimuovi la classe "active" all'inizio per chiudere il menu
menu.classList.remove('active');

// Aggiungi una classe per attivare l'animazione quando il menu diventa attivo
menuButton.addEventListener('click', () => {
    menu.classList.add('animate'); // Aggiungi la classe "animate" al menu
});

// Rimuovi la classe di animazione quando l'animazione è completa
menu.addEventListener('animationend', () => {
    menu.classList.remove('animate'); // Rimuovi la classe "animate"
});
