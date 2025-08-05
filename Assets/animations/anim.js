const slides = [
  {
    bg: "url('./Assets/img/foto-portada.jpg')",
    html: `
      <h2 class="texto-1">¿Necesitas incorporar IA?</h2>
      <h2 class="texto-1">¿O automatizar tu negocio?</h2>
      <h2 class="texto-1">¿En tiempo récord?</h2>
      <h3 class="texto-2">Cuenta con nosotros. Entregamos un servicio end to end de manera</h3>
      <h3 class="texto-2">responsiva. Nos conectamos contigo</h3>
      <button type="button" class="btn btn-outline-light">Contáctanos</button>
    `
  },
 {
    bg: "url('./Assets/img/foto-portada2.jpg')",
    html: `
      <h2 class="texto-1">Impulsamos la Transformación Digital</h2>
      <h2 class="texto-1">Software a tu medida</h2>
      <h2 class="texto-1">Innovación constante</h2>
      <h3 class="texto-2">Tecnologías escalables para tu negocio</h3>
      <button type="button" class="btn btn-outline-light">Contáctanos</button>
    `
  }
];

let currentIndex = 0;
const portada = document.querySelector('.portada-consultora');
const slideContent = document.getElementById('slide-content');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Inicializar contenido y fondo sin animación
portada.style.backgroundImage = slides[currentIndex].bg;
slideContent.innerHTML = slides[currentIndex].html;
slideContent.style.opacity = 1;

function updateSlide(index) {
  // Animación fade out
  slideContent.style.opacity = 0;

  setTimeout(() => {
    // Cambiar contenido HTML
    slideContent.innerHTML = slides[index].html;

    // Cambiar fondo con transición
    portada.style.backgroundImage = slides[index].bg;

    // Animación fade in
    slideContent.style.opacity = 1;
  }, 500);
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  updateSlide(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlide(currentIndex);
});


// script.js
document.addEventListener("DOMContentLoaded", () => {
  const pasos = document.querySelectorAll(".paso");
  pasos.forEach((paso) => {
    paso.addEventListener("click", () => {
      document.querySelector(".paso.activo")?.classList.remove("activo");
      paso.classList.add("activo");
      // opcional: cambiar contenido detallado según el paso
    });
  });
});
