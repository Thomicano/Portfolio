document.querySelectorAll('.menu').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault(); // Evita el salto instantáneo

        // Obtenemos el elemento de destino usando el href
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Scroll suave hasta la sección
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      });
    });