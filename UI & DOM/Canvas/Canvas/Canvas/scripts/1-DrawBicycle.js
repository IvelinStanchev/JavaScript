window.onload = function () {
    var canvas = document.getElementById("draw-bicycle");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = '#90CAD7';
    ctx.strokeStyle = '#2E798B';

    ctx.beginPath();
    ctx.arc(130, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(220, 200);
    ctx.lineTo(130, 200);
    ctx.lineTo(180, 120);
    ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(220, 200, 15, 0, Math.PI * 2);
    ctx.moveTo(210, 190);
    ctx.lineTo(198, 178);
    ctx.moveTo(230, 210);
    ctx.lineTo(243, 221);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(220, 200);
    ctx.lineTo(320, 120);
    ctx.lineTo(180, 120);
    ctx.lineTo(170, 100);
    ctx.moveTo(150, 100);
    ctx.lineTo(195, 100);
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(330, 200, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(330, 200);
    ctx.lineTo(316, 90);
    ctx.lineTo(340, 65);
    ctx.moveTo(316, 90);
    ctx.lineTo(280, 100);
    ctx.stroke();
}