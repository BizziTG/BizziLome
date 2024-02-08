document.getElementById("connexion-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupérer les valeurs des champs du formulaire
    var prenom = document.getElementById("prenom").value;
    var motDePasse = document.getElementById("mot_de_passe").value;
  
    // Récupérer les utilisateurs depuis le fichier JSON
    var utilisateursExistant = localStorage.getItem("utilisateurs");
    var utilisateurs = utilisateursExistant ? JSON.parse(utilisateursExistant) : [];
  
    // Vérifier les informations de connexion avec les données des utilisateurs
    var utilisateurTrouve = utilisateurs.find(function(utilisateur) {
      return utilisateur.prenom === prenom && utilisateur.mot_de_passe === motDePasse;
    });
  
    if (utilisateurTrouve) {
      // Vérifier l'âge de l'utilisateur
      var dateNaissanceUtilisateur = new Date(utilisateurTrouve.date_naissance);
      var ageUtilisateur = new Date().getFullYear() - dateNaissanceUtilisateur.getFullYear();
  
      if (ageUtilisateur >= 18) {
        // Rediriger l'utilisateur vers la page.html si les informations de connexion sont correctes et s'il est majeur
        window.location.href = "page.html";
      } else {
        // Afficher un message d'erreur si l'utilisateur est mineur
        alert("Désolé, vous devez avoir au moins 18 ans pour accéder à cette page.");
      }
    } else {
      alert("Nom d'utilisateur ou mot de passe incorrect !");
    }
  });
  