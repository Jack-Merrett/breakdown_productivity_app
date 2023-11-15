document.addEventListener('DOMContentLoaded', function() {
    const pedigree = document.getElementById('pedigree');
    let scale = 1;

    const zoomInButton = document.createElement('div');
    zoomInButton.innerText = '+';
    zoomInButton.className = 'zoom-in';
    zoomInButton.addEventListener('click', function() {
        scale += 0.1;
        updateScale();
    });

    const zoomOutButton = document.createElement('div');
    zoomOutButton.innerText = '-';
    zoomOutButton.className = 'zoom-out';
    zoomOutButton.addEventListener('click', function() {
        scale -= 0.1;
        updateScale();
    });

    document.body.appendChild(zoomInButton);
    document.body.appendChild(zoomOutButton);

    function updateScale() {
        pedigree.style.transform = `scale(${scale})`;
    }

    let isDragging = false;
    let startX, startY, startScrollLeft, startScrollTop;

    pedigree.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        startScrollLeft = pedigree.scrollLeft;
        startScrollTop = pedigree.scrollTop;
        pedigree.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        const deltaX = e.clientX - startX;
        const deltaY = e.clientY - startY;
        pedigree.scrollLeft = startScrollLeft - deltaX;
        pedigree.scrollTop = startScrollTop - deltaY;
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        pedigree.style.cursor = 'grab';
    });

    pedigree.addEventListener('wheel', function(e) {
        e.preventDefault();
        scale += e.deltaY > 0 ? -0.1 : 0.1;
        scale = Math.max(0.1, scale);
        updateScale();
    });
});
