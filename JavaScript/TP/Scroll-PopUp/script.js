// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours


let LastScroll = window.scrollY

window.addEventListener('scroll', () => {
    if (window.scrollY > LastScroll) {
        navbar.style.height = 40 + "px";
    } else if (window.scrollY < 1) {
        navbar.style.height = 90 + "px";
    }
    
    if (window.scrollY > 349) {
        imgImprovise.style.transform = "translateX(0)";
        imgImprovise.style.opacity = "1";
    }

    if (window.scrollY > 1525) {
        popup.style.transform = "translateX(0)";
        popup.style.opacity = "1";
    }

    LastScroll = window.scrollY
})

closeBtn.addEventListener('click', () => {
    popup.style.transform = "translateX(1000px)";
    popup.style.opacity = "0";
    setTimeout(() => {
        popup.remove
    }, 1000 )
})