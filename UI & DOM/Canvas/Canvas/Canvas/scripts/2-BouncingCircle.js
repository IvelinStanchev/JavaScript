window.onload = function () {
    var canvas = document.getElementById("bouncing-circle");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "#B5E61D";
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;

    var mustGoLeft = false;
    var mustGoRight = true;
    var mustGoTop = false;
    var mustGoBottom = true;

    function drawArc(ctx, x, y, radius, startAngle, endAngle) {
        ctx.beginPath();
        ctx.arc(x, y, radius, startAngle,endAngle);
        ctx.fill();
    }

    var x = 10;
    var y = 10;
    var radius = 10;
    var startingAngle = 0;
    var endAngle = Math.PI * 2;
    var update = 5;

    function animationFrame() {
        ctx.clearRect(0, 0, canvasWidth, canvasHeight);//clears the field

        drawArc(ctx, x, y, radius, startingAngle, endAngle);

        if (x >= canvasWidth - radius) {
            mustGoLeft = true;
            mustGoRight = false;
        }

        if (x < 0 + radius) {
            mustGoLeft = false;
            mustGoRight = true;
        }

        if (y >= canvasHeight - radius) {
            mustGoTop = true;
            mustGoBottom = false;
        }

        if (y < 0 + radius) {
            mustGoTop = false;
            mustGoBottom = true;
        }

        if (mustGoLeft) {
            x -= update;
        }

        if (mustGoRight) {
            x += update;
        }

        if (mustGoTop) {
            y -= update;
        }

        if (mustGoBottom) {
            y += update;
        }

        requestAnimationFrame(animationFrame);
    }

    requestAnimationFrame(animationFrame);
}