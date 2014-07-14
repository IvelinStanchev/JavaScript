window.onload = function () {
    var canvas = document.getElementById("draw-house");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = '#975B5B';

    ctx.beginPath();
    ctx.lineWidth = 3;
    ctx.rect(50, 250, 350, 300);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(50, 250);
    ctx.lineTo(225, 50);
    ctx.lineTo(400, 250);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(330, 200);
    ctx.lineTo(330, 100);
    ctx.quadraticCurveTo(310, 90, 290, 100);
    ctx.lineTo(290, 200);
    ctx.moveTo(290, 100);
    ctx.quadraticCurveTo(310, 110, 330, 100);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = '#000000';
    ctx.fillRect(82, 280, 65, 45);
    ctx.fillRect(150, 280, 65, 45);
    ctx.fillRect(82, 327, 65, 45);
    ctx.fillRect(150, 327, 65, 45);

    ctx.fillRect(247, 280, 65, 45);
    ctx.fillRect(315, 280, 65, 45);
    ctx.fillRect(247, 327, 65, 45);
    ctx.fillRect(315, 327, 65, 45);

    ctx.fillRect(247, 400, 65, 45);
    ctx.fillRect(315, 400, 65, 45);
    ctx.fillRect(247, 447, 65, 45);
    ctx.fillRect(315, 447, 65, 45);

    ctx.beginPath();
    ctx.moveTo(90, 550);
    ctx.lineTo(90, 450);
    ctx.quadraticCurveTo(105, 425, 145, 420);
    ctx.quadraticCurveTo(200, 423, 210, 450);
    ctx.lineTo(210, 550);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(150, 420);
    ctx.lineTo(150, 550);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(135, 510, 6, 0, Math.PI * 2);
    ctx.stroke();
    ctx.beginPath();
    ctx.arc(165, 510, 6, 0, Math.PI * 2);
    ctx.stroke();
}