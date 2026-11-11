document.addEventListener('DOMContentLoaded', () => {

    console.log('🚀 JS del Instituto Cumbres de Cóndores Poniente (ICCP) inicializado.');

    /* ===================================================
       1. NAVEGACIÓN ACTIVA Y EFECTO EN HEADER AL SCROLL
    =================================================== */
    const header = document.querySelector('header');
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        // Añade sombra más pronunciada al header al bajar la página
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 25px rgba(0,0,0,0.08)';
        } else {
            header.style.boxShadow = '0 4px 20px rgba(0,0,0,0.03)';
        }

        // Detecta qué sección está visible en pantalla
        let currentSection = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 140;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        // Actualiza la clase activa en los enlaces del menú
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    });

    /* ===================================================
       2. INTERACTIVIDAD EN TARJETAS DE SERVICIOS
    =================================================== */
    const accessLinks = document.querySelectorAll('.card-link');

    accessLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const cardTitle = link.parentElement.querySelector('h3').textContent;
            
            // Simulación de redirección o portal
            alert(`Accediendo al portal de: ${cardTitle}\n\nSerás redirigido a la plataforma institucional del ICCP.`);
        });
    });

    /* ===================================================
       3. VALIDACIÓN INTERACTIVA DEL FORMULARIO DE CONTACTO
    =================================================== */
    const contactForm = document.querySelector('.contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita recargar la página

            const nombreInput = contactForm.querySelector('input[placeholder="Nombre Completo"]');
            const emailInput = contactForm.querySelector('input[placeholder="Correo Electrónico"]');
            const asuntoInput = contactForm.querySelector('input[placeholder*="Asunto"]');
            const mensajeInput = contactForm.querySelector('textarea');

            // Validación de campos vacíos
            if (!nombreInput.value.trim() || !emailInput.value.trim() || !mensajeInput.value.trim()) {
                alert('⚠️ Por favor completa todos los campos obligatorios antes de enviar.');
                return;
            }

            // Confirmación visual al usuario
            alert(`✅ ¡Mensaje enviado con éxito!\n\nGracias ${nombreInput.value.trim()}, nos pondremos en contacto al correo (${emailInput.value.trim()}) a la brevedad.`);

            // Limpia los campos del formulario
            contactForm.reset();
        });
    }

    /* ===================================================
       4. BOTÓN "VOLVER ARRIBA" DINÁMICO
    =================================================== */
    const backToTopBtn = document.createElement('button');
    backToTopBtn.innerHTML = '↑';
    backToTopBtn.id = 'backToTop';
    document.body.appendChild(backToTopBtn);

    // Estilos dinámicos para el botón
    Object.assign(backToTopBtn.style, {
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        width: '45px',
        height: '45px',
        borderRadius: '50%',
        backgroundColor: '#E61F26',
        color: '#FFFFFF',
        border: 'none',
        fontSize: '20px',
        fontWeight: 'bold',
        cursor: 'pointer',
        display: 'none',
        zIndex: '999',
        boxShadow: '0 4px 12px rgba(230, 31, 38, 0.4)',
        transition: 'transform 0.3s, opacity 0.3s'
    });

    // Mostrar/ocultar botón según el scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTopBtn.style.display = 'block';
            backToTopBtn.style.opacity = '1';
        } else {
            backToTopBtn.style.opacity = '0';
            setTimeout(() => {
                if (window.scrollY <= 400) backToTopBtn.style.display = 'none';
            }, 300);
        }
    });

    // Acción de subir suavemente al hacer clic
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

});