document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("travelForm");
    const errorMsg = document.getElementById("errorMsg");
    const resultDiv = document.getElementById("result");
    const resetBtn = document.getElementById("resetBtn");
  
    form.addEventListener("submit", function (event) {
      event.preventDefault();
      errorMsg.textContent = ""; // Réinitialise le message d'erreur
      resultDiv.innerHTML = "";  // Efface l'ancien résultat
  
      const country = document.getElementById("country").value;
      const date = document.getElementById("date").value;
      const time = document.getElementById("time").value;
      const travelClass = document.getElementById("class").value;
      const passengers = document.getElementById("passengers").value;
  
      // Vérifie si tous les champs sont remplis
      if (!country || !date || !time || !travelClass || !passengers) {
        errorMsg.textContent = "Veuillez remplir tous les champs pour rechercher un voyage.";
        return;
      }
  
      // Affiche le résultat formaté
      resultDiv.innerHTML = `
        <h3>Résultat de votre recherche :</h3>
        <p><strong>Destination :</strong> ${country}</p>
        <p><strong>Date de réservation :</strong> ${formatDate(date)}</p>
        <p><strong>Heure de départ :</strong> ${time}</p>
        <p><strong>Classe :</strong> ${formatClass(travelClass)}</p>
        <p><strong>Nombre de passagers :</strong> ${passengers}</p>
      `;
  
      // Remet le fond visible (utile après un reset)
      resultDiv.style.backgroundColor = "#ecf0f1";
    });
  
    resetBtn.addEventListener("click", () => {
      form.reset();                   // Réinitialise le formulaire
      errorMsg.textContent = "";      // Efface le message d'erreur
      resultDiv.innerHTML = "";       // Vide le résultat
      resultDiv.style.backgroundColor = "transparent"; // Supprime le fond
    });
  
    function formatClass(value) {
      switch (value) {
        case "eco": return "Économique";
        case "business": return "Business";
        case "first": return "Première";
        default: return value;
      }
    }
  
    function formatDate(dateStr) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateObj = new Date(dateStr);
      return dateObj.toLocaleDateString('fr-FR', options);
    }
  });