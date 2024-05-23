"use strict";

// Sélectionnez toutes les vignettes
var vignettes = document.querySelectorAll('.vignette');

// Parcourez chaque vignette
vignettes.forEach(function(vignette) {
    // Ajoutez un gestionnaire d'événements pour le survol de la souris
    vignette.addEventListener('mouseenter', function() {
        // Ajoutez la classe slide-down pour faire descendre l'élément
        this.classList.add('slide-down');
    });
    
    // Ajoutez également un gestionnaire d'événements pour réinitialiser la position lorsque la souris quitte la vignette
    vignette.addEventListener('mouseleave', function() {
        // Supprimez la classe slide-down pour réinitialiser la position
        this.classList.remove('slide-down');
    });
});

function highlightVignette(vignetteId) {
    // Votre code pour mettre en évidence la vignette ici
}

function removeHighlight() {
    // Votre code pour supprimer la mise en évidence ici
}
