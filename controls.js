/**
 * Created by Dwape on 8/25/18.
 */

var map = {}; // You could also use an array
onkeydown = onkeyup = function(e){
    e = e || event; // to deal with IE
    map[e.keyCode] = e.type === 'keydown';
    if (map[83]) { //s
        zPosition += 0.1; //0.1
    }
    if (map[87]) { //w
        zPosition -= 0.1; //0.1
    }
    if (map[68]) { //d
        xPosition += 0.1; //0.1
    }
    if (map[65]) { //a
        xPosition -= 0.1; //0.1
    }
    if (map[32]) { //space
        yPosition += 0.2; //0.2
    }
    if (map[69]) { //q
        cubeRotation += 0.1; //0.1
    }
    if (map[81]) { //e
        cubeRotation -= 0.1; //0.1
    }
}