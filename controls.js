/**
 * Created by Dwape on 8/25/18.
 */
document.addEventListener('keydown', function(event) {
    if (event.code === 'KeyS') {
        zPosition += 0.1;
    }
    if (event.code === 'KeyW') {
        zPosition -= 0.1;
    }
    if (event.code === 'KeyD') {
        xPosition += 0.1;
    }
    if (event.code === 'KeyA') {
        xPosition -= 0.1;
    }
    if (event.code === 'Space') {
        yPosition += 0.2;
    }
    if (event.code === 'KeyQ') {
        cubeRotation += 0.1;
    }
    if (event.code === 'KeyE') {
        cubeRotation -= 0.1;
    }
});