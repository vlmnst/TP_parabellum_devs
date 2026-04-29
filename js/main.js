document.addEventListener('DOMContentLoaded', function() {
    const botonSaludo = document.getElementById('boton-saludo');
    const mensajeSalida = document.getElementById('mensaje-salida');
    
    const mensajes = [
        '¡Bienvenido a nuestro proyecto! Estamos trabajando en crear una experiencia web única.',
        '¡Gracias por visitarnos! Explora las tarjetas de cada integrante.',
        '¡Hola! Este proyecto fue creado con mucho esfuerzo y dedicación.',
        '¡Nos alegra que clicks aquí! Descubre más sobre nuestro equipo.'
    ];
    
    let indiceMensaje = 0;
    
    if (botonSaludo && mensajeSalida) {
        botonSaludo.addEventListener('click', function() {
            mensajeSalida.textContent = mensajes[indiceMensaje];
            mensajeSalida.style.opacity = '0';
            
            setTimeout(function() {
                mensajeSalida.style.transition = 'opacity 0.5s ease';
                mensajeSalida.style.opacity = '1';
            }, 10);
            
            indiceMensaje = (indiceMensaje + 1) % mensajes.length;
        });
    }
});