
document.addEventListener('DOMContentLoaded', function() {
    const imgContainers = document.querySelectorAll('.img-container');

    imgContainers.forEach(function(container) {
        container.addEventListener('click', function() {
            const imgZoomSrc = container.dataset.zoom;

            // Chama a função de zoom com o caminho correto
            zoomImage(imgZoomSrc);
        });
    });

    const overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function() {
        closeOverlay();
    });
});

function zoomImage(imgSrc) {
    let zoom = document.getElementById('zoom');
    let overlay = document.getElementById('overlay');

    overlay.style.display = 'flex';
    zoom.src = imgSrc;
}

function closeOverlay() {
    let overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}