window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY; // Position actuelle du scroll
    const docHeight = document.documentElement.scrollHeight - window.innerHeight; // Hauteur totale du document visible
    const scrollPercent = (scrollTop / docHeight) * 100; // Calcul du pourcentage de scroll
  
    // Convertir le pourcentage en valeur RGB pour une couleur progressive
    const red = Math.min(255, Math.floor(scrollPercent * 2.55)); // Max à 255
    const green = Math.min(128, Math.floor((100 - scrollPercent) * 1.28)); // Max à 128
    const blue = 255 - red; // Valeur inverse de rouge
  
    document.querySelector("footer").style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
  });
  