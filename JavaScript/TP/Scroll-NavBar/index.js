// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

// let ScrollY = window.scrollY
const navbar = document.getElementById("navbar")
let ScrollY = 0;

window.addEventListener('scroll', () => {
ScrollY = window.scrollY
}, false)

window.addEventListener('scroll', () => {
if (ScrollY < window.scrollY) {
    navbar.style.top = -60 + "px";
} else if (ScrollY > window.scrollY) {
    navbar.style.top = 0 + "px";
}
}, true)