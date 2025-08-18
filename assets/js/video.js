// Codigo para manejar la reproduccion del video
document.addEventListener("DOMContentLoaded", function () {
  const video = document.getElementById("corporateVideo");

  // Intersection Observer para detectar visibilidad
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play();  // Reproduce cuando se ve
      } else {
        video.pause(); // Pausa cuando no se ve
      }
    });
  }, { threshold: 0.8 }); // 80% visible para que arranque

  observer.observe(video);
});

