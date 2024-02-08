document.getElementById("inscription-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche l'envoi du formulaire par défaut
  
    // Récupérer les valeurs des champs du formulaire
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var email = document.getElementById("email").value;
    var telephone = document.getElementById("telephone").value;
    var motDePasse = document.getElementById("mot_de_passe").value;
    var dateNaissance = document.getElementById("date_naissance").value;
  
    // Créer un objet utilisateur avec les données saisies
    var nouvelUtilisateur = {
      "nom": nom,
      "prenom": prenom,
      "email": email,
      "telephone": telephone,
      "mot_de_passe": motDePasse,
      "date_naissance": dateNaissance
    };
  
    // Récupérer les utilisateurs existants depuis le fichier JSON
    var utilisateursExistant = localStorage.getItem("utilisateurs");
    var utilisateurs = utilisateursExistant ? JSON.parse(utilisateursExistant) : [];
  
    // Ajouter le nouvel utilisateur à la liste des utilisateurs
    utilisateurs.push(nouvelUtilisateur);
  
    // Enregistrer la liste mise à jour des utilisateurs dans le fichier JSON
    localStorage.setItem("utilisateurs", JSON.stringify(utilisateurs));
  
    // Rediriger l'utilisateur vers la page de connexion après inscription
    setTimeout(function() {
      window.location.href = "connexion.html"; // Redirection vers la page de connexion
    }, 2000); // Attente de 2 secondes avant la redirection
  });
  