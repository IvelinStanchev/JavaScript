window.onload = function () {


    //USE CHROME TO SEE THIS PROBLEM!


    var canvas = document.getElementById("draw-head");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = '#90CAD7';
    ctx.strokeStyle = '#1C4F5A';

    //head
    ctx.beginPath();
    ctx.arc(150, 150, 40, 0, Math.PI * 3);
    ctx.fill();
    ctx.stroke();

    ctx.save();
    //left-eye
    ctx.beginPath();

    ctx.scale(1, 0.5);
    ctx.arc(130, 270, 10, 0, Math.PI * 3);
    ctx.stroke();

    ctx.beginPath();

    ctx.scale(0.3, 1);
    ctx.fillStyle = '#22545F';
    ctx.arc(420, 270, 8, 0, Math.PI * 3);
    ctx.fill();
    //

    ctx.restore();
    ctx.save();

    //right-eye
    ctx.beginPath();

    ctx.scale(1, 0.5);
    ctx.arc(160, 270, 10, 0, Math.PI * 3);
    ctx.stroke();

    ctx.beginPath();

    ctx.scale(0.3, 1);
    ctx.fillStyle = '#22545F';
    ctx.arc(520, 270, 8, 0, Math.PI * 3);
    ctx.fill();
    //

    ctx.restore();
    ctx.save();

    //nose
    ctx.beginPath();

    ctx.moveTo(145, 135);
    ctx.lineTo(140, 150);
    ctx.lineTo(150, 150);
    ctx.stroke();
    //

    //mouth
    ctx.scale(1, 0.4);
    ctx.beginPath();

    var x = 145;         // The X coordinate
    var y = 420;          // The Y cooordinate
    var rx = 15;         // The X radius
    var ry = 8;          // The Y radius
    var rotation = -2.7;           // The rotation of the ellipse (in radians)
    var start = 0;           // The start angle (in radians)
    var end = 2 * Math.PI; // The end angle (in radians)
    var anticlockwise = false;       // Whether the ellipse is drawn in a clockwise direction or anti-clockwise direction

    ctx.ellipse(x, y, rx, ry, rotation, start, end, anticlockwise);

    ctx.stroke();
    //
    //

    ctx.restore();
    ctx.save();

    //hat
    ctx.beginPath();

    ctx.scale(1, 0.2);
    ctx.fillStyle = '#396693';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.arc(150, 570, 40, 0, Math.PI * 3);
    ctx.fill();
    ctx.stroke();

    ctx.restore();
    ctx.save();

    ctx.beginPath();

    ctx.fillStyle = '#396693';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;

    ctx.moveTo(170, 70);
    ctx.lineTo(170, 108);
    ctx.quadraticCurveTo(150, 118, 125, 108);
    ctx.lineTo(125, 70);
    ctx.fill();
    ctx.stroke();
    
    ctx.beginPath();
    ctx.scale(1, 0.3);
    ctx.fillStyle = '#396693';
    ctx.strokeStyle = '#000000';
    ctx.arc(147, 233, 23, 0, Math.PI * 3);
    ctx.fill();
    ctx.stroke();
    //
};