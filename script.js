document.addEventListener("DOMContentLoaded", function () {
    // Récupérer la référence de l'élément de filtre par âge
    var ageFilterInput = document.getElementById("age-filter");

    // Ajouter un écouteur d'événements pour détecter les changements dans le champ de filtre
    ageFilterInput.addEventListener("input", function () {
        // Appeler la fonction de filtrage avec la valeur actuelle du champ de filtre
        filterProfilesByAge(ageFilterInput.value);
    });

    // Récupérer tous les profils
    var profiles = document.querySelectorAll(".profile");

    // Ajouter un écouteur d'événements pour détecter les clics sur les images de profil
    profiles.forEach(function (profile) {
        profile.addEventListener("click", function () {
            var profileImageSrc = profile.querySelector(".profile-image").src;
            displayLargeImage(profileImageSrc);
        });
    });

    // Fonction de filtrage par âge
    function filterProfilesByAge(age) {
        // Parcourir chaque profil
        profiles.forEach(function (profile) {
            // Récupérer l'âge du profil
            var profileAge = parseInt(profile.querySelector("p:nth-child(2)").textContent.split(":")[1]);

            // Masquer ou afficher le profil en fonction de l'âge
            if (age === "" || profileAge >= age) {
                profile.style.display = "flex";
            } else {
                profile.style.display = "none";
            }
        });
    }

    // Fonction pour afficher la photo en grand
    function displayLargeImage(imageSrc) {
        // Créer une fenêtre modale pour afficher la photo en grand
        var modal = document.createElement("div");
        modal.classList.add("modal");

        // Créer une image à l'intérieur de la fenêtre modale
        var modalImage = document.createElement("img");
        modalImage.src = imageSrc;

        // Ajouter l'image à la fenêtre modale
        modal.appendChild(modalImage);

        // Ajouter la fenêtre modale au corps du document
        document.body.appendChild(modal);

        // Ajouter un écouteur d'événements pour fermer la fenêtre modale lorsqu'on clique en dehors de l'image
        modal.addEventListener("click", function () {
            modal.remove();
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var profiles = document.querySelectorAll(".profile");

    // Récupérer la référence de l'élément de filtre par âge et des boutons de filtrage
    var ageFilterInput = document.getElementById("age-filter");
    var filterButton = document.getElementById("filter-button");
    var showAllButton = document.getElementById("show-all-button");

    // Ajouter un écouteur d'événements pour détecter les clics sur le bouton de filtrage
    filterButton.addEventListener("click", function () {
        var age = ageFilterInput.value;
        filterProfilesByAge(age);
    });

    // Ajouter un écouteur d'événements pour détecter les clics sur le bouton "Afficher tous les profils"
    showAllButton.addEventListener("click", function () {
        showAllProfiles();
    });

    // Fonction de filtrage par âge
    function filterProfilesByAge(age) {
        // Parcourir chaque profil
        profiles.forEach(function (profile) {
            // Récupérer l'âge du profil
            var profileAge = parseInt(profile.querySelector("p:nth-child(2)").textContent.split(":")[1]);

            // Masquer ou afficher le profil en fonction de l'âge
            if (age !== "" && profileAge == age) {
                profile.style.display = "flex";
            } else {
                profile.style.display = "none";
            }
        });
    }

    // Fonction pour afficher tous les profils
    function showAllProfiles() {
        // Afficher tous les profils
        profiles.forEach(function (profile) {
            profile.style.display = "flex";
        });
    }
});
document.addEventListener("DOMContentLoaded", function () {
    var profiles = document.querySelectorAll(".profile");

    // ... (votre code existant) ...

    // Ajouter un écouteur d'événements pour détecter les clics sur les boutons "Contacter"
    profiles.forEach(function (profile) {
        var contactButton = profile.querySelector(".contact-button");
        contactButton.addEventListener("click", function () {
            var whatsappNumber = contactButton.getAttribute("data-whatsapp");
            var profileInfo = contactButton.getAttribute("data-profile-info");
            ouvrirWhatsApp(whatsappNumber, profileInfo);
        });
    });

    // ... (votre code existant) ...

    // Fonction pour ouvrir WhatsApp avec un message prérempli
    function ouvrirWhatsApp(numero, informationsProfil) {
        var message = encodeURIComponent("Bonjour/Bonsoir mon champion, j'aimerais passer un bon moment avec cette fille " + informationsProfil + ". J'aimerais beaucoup que tu me branches avec cette fille. Merci.");

        var whatsappURL = "https://wa.me/" + numero + "?text=" + message;

        // Ouvrir WhatsApp dans une nouvelle fenêtre
        window.open(whatsappURL, "_blank");
    }
});


