var canvasRender = function (canvasId) {
    var canvas = document.getElementById(canvasId);
    var ctx = canvas.getContext("2d");

    var drawRect = function (x, y, width, height) {
        ctx.beginPath();
        ctx.rect(x, y, width, height);
        ctx.stroke();
    }

    var drawCircle = function (x, y, radius) {
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    var drawLine = function (x1, y1, x2, y2) {
        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
    }

    return {
        drawRect: drawRect,
        drawCircle: drawCircle,
        drawLine: drawLine
    }
};

var render = new canvasRender("canvas");
render.drawRect(5, 5, 200, 250);
render.drawCircle(150, 100, 50);
render.drawLine(250, 100, 350, 350);
