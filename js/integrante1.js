document.addEventListener('DOMContentLoaded', function() {
    const botonCambiarFoto = document.getElementById('cambiar-foto');
    const botonMostrarMas = document.getElementById('mostrar-mas');
    const infoExtra = document.getElementById('info-extra');
    const fotoElemento = document.getElementById('foto-integrante1');
    
    const estilos = [
        { filtro: 'none', borderColor: '#ffffff' },
        { filtro: 'grayscale(100%)', borderColor: '#636e72' },
        { filtro: 'sepia(100%)', borderColor: '#d35400' },
        { filtro: 'hue-rotate(90deg)', borderColor: '#27ae60' },
        { filtro: 'saturate(200%)', borderColor: '#8e44ad' }
    ];
    
    let indiceEstilo = 0;
    let infoVisible = false;
    
    if (botonCambiarFoto && fotoElemento) {
        botonCambiarFoto.addEventListener('click', function() {
            indiceEstilo = (indiceEstilo + 1) % estilos.length;
            const estilo = estilos[indiceEstilo];
            fotoElemento.style.filter = estilo.filtro;
            fotoElemento.style.borderColor = estilo.borderColor;
        });
    }
    
    if (botonMostrarMas && infoExtra) {
        botonMostrarMas.addEventListener('click', function() {
            infoVisible = !infoVisible;
            if (infoVisible) {
                infoExtra.classList.remove('oculto');
                botonMostrarMas.textContent = 'Ocultar información';
            } else {
                infoExtra.classList.add('oculto');
                botonMostrarMas.textContent = 'Ver más información';
            }
        });
    }
});