var scoresAndName = [];

function newGame() {
    var canvas = document.getElementById("snake");
    var ctx = canvas.getContext("2d");
    var resultField = document.getElementById("result");
    resultField.innerHTML = '';

    function makeFood(positions) {
        var positionX;
        var positionY;
        positionX = positions[0];
        positionY = positions[1];

        if (positionX < 10) {
            positionX += 25;
        }
        if (positionY < 10) {
            positionY += 25;
        }
        if (positionX > CANVAS_WIDTH - 10) {
            positionX -= 25;
        }
        if (positionY > CANVAS_HEIGHT - 10) {
            positionY -= 25;
        }

        return {
            positionX: positionX,
            positionY: positionY,
            draw: function () {
                ctx.beginPath();
                ctx.fillStyle = '#F00';
                ctx.fillRect(this.positionX, this.positionY, SQUARE_WIDTH, SQUARE_HEIGHT);
            }
        }
    }

    function generatePositionsForFood() {
        var posX = Math.floor(Math.random() * CANVAS_WIDTH);
        var posY = Math.floor(Math.random() * CANVAS_HEIGHT);

        return [posX, posY];
    }

    function partOfBody(x, y, width, height, type) {
        return {
            x: x,
            y: y,
            width: width,
            height: height,
            draw: function () {
                ctx.beginPath();
                ctx.fillStyle = '#000000';
                ctx.fillRect(this.x, this.y, this.width, this.height);
            },
            type: 'body'
        }
    }

    function makeHead(x, y, radius, startAngle, endAngle, type) {
        return {
            x: x,
            y: y,
            radius: radius,
            startAngle: startAngle,
            endAngle: endAngle,
            draw: function drawHead() {
                ctx.beginPath();
                ctx.fillStyle = "#B5E61D";
                ctx.arc(this.x, this.y, this.radius, startAngle, endAngle);
                ctx.fill();
            },
            type: 'head'
        }
    }

    function drawSnakeAndFood(snake, positionsForFood) {
        ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        makeFood(positionsForFood).draw();
        for (var i = 0; i < snake.length; i++) {
            if (snake[i].type == 'head') {
                drawHead(ctx, snake[i].x, snake[i].y, snake[i].radius, snake[i].startAngle, snake[i].endAngle);
            }
            else if (snake[i].type == 'body') {
                drawPartOfBody(snake[i].x, snake[i].y, snake[i].width, snake[i].height);
            }
        }
    }

    function drawPartOfBody(x, y, width, height) {
        ctx.beginPath();
        ctx.fillStyle = '#000000';
        ctx.fillRect(x, y, width, height);
    }

    function drawHead(ctx, x, y, radius, startAngle, endAngle) {
        ctx.beginPath();
        ctx.fillStyle = "#B5E61D";
        ctx.arc(x, y, radius, startAngle, endAngle);
        ctx.fill();
    }

    function snakeHasEatenTheFood(snake, generatedPositions) {
        var posXOfHead = snake[snake.length - 1].x;
        var posYOfHead = snake[snake.length - 1].y;

        if ((posXOfHead >= generatedPositions[0] - 10) &&
            (posXOfHead <= generatedPositions[0] + 25) &&
            (posYOfHead >= generatedPositions[1] - 10) &&
            (posYOfHead <= generatedPositions[1] + 25)) {
            return true;
        }

        return false;
    }

    function snakeHitAnEdge(snake) {
        if ((snake[snake.length - 1].x >= CANVAS_WIDTH) ||
            (snake[snake.length - 1].x < 0) ||
            (snake[snake.length - 1].y >= CANVAS_HEIGHT) ||
            (snake[snake.length - 1].y < 0)) {
            return true;
        }

        return false;
    }

    function snakeEatenItsSelf(snake) {
        var posXOfHead = snake[snake.length - 1].x;
        var posYOfHead = snake[snake.length - 1].y;



        for (var i = 0; i < snake.length - 1; i++) {
            if (((posXOfHead <= (snake[i].x + SQUARE_WIDTH)) && (posYOfHead <= (snake[i].y + SQUARE_HEIGHT))) &&
                ((posXOfHead >= snake[i].x) && (posYOfHead >= snake[i].y))) {
                return true;
            }
        }

        return false;
    }

    function updateInterval() {
        if (secondsOfExecution >= 50) {
            secondsOfExecution -= 10;
            clearInterval(interval);
            interval = setInterval(animationFrame, secondsOfExecution);
        }
    }

    function endGame() {
        scores = (snake.length - 4) * 20;

        if (snakeHitAnEdge(snake) || snakeEatenItsSelf(snake)) {
            resultField.innerHTML = "GAME OVER! Scores: " + scores.toString();
            addToTopScores(scores);
            document.getElementById("game").innerHTML = "New Game!";
            clearInterval(interval);
            return;
        }
    }

    function addToTopScores(scores) {
        var personName = prompt("Please enter your name", "unnamed");
        var name = '';

        if (personName != null) {
            name = personName;
        }

        var nameAndScores = {
            'name': name,
            'scores': scores
        };

        // Put the object into storage
        localStorage.setItem('nameAndScores', JSON.stringify(nameAndScores));

        // Retrieve the object from storage
        var retrievedObject = localStorage.getItem('nameAndScores');

        scoresAndName.push(retrievedObject);

        var exchangeValues;

        for (var i = 0; i < scoresAndName.length - 1; i++) {
            for (var j = i + 1; j < scoresAndName.length; j++) {
                if (JSON.parse(scoresAndName[j]).scores > JSON.parse(scoresAndName[i]).scores) {
                    exchangeValues = scoresAndName[i];
                    scoresAndName[i] = scoresAndName[j];
                    scoresAndName[j] = exchangeValues;
                }
            }
        }

        updateInnerHtml();
    }

    function updateInnerHtml() {
        var showScores = document.getElementById("each-score");
        showScores.innerHTML = 'Scores: ';
        for (var i = 0; i < scoresAndName.length; i++) {
            showScores.innerHTML += '<br>' + (i + 1) + ')   ' + JSON.parse(scoresAndName[i]).name + ' -> ' + JSON.parse(scoresAndName[i]).scores + ' scores';
        }
    }

    var snake = [];
    var head;
    var eachPartOfBody;
    var x = 70;
    var y = 13;
    var interval;
    var secondsOfExecution = 200;
    var direction = 'right';
    //constants
    var CANVAS_WIDTH = canvas.width;
    var CANVAS_HEIGHT = canvas.height;
    var RADIUS = 10;
    var STARTANGLE = 0;
    var ENDANGLE = Math.PI * 2;
    var UPDATE = 20;
    var BODY_TYPE = 'body';
    var HEAD_TYPE = 'head';
    var SQUARE_WIDTH = 15;
    var SQUARE_HEIGHT = 15;

    eachPartOfBody = partOfBody(0, 5, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
    snake.push(eachPartOfBody);
    eachPartOfBody = partOfBody(20, 5, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
    snake.push(eachPartOfBody);
    eachPartOfBody = partOfBody(40, 5, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
    snake.push(eachPartOfBody);
    head = makeHead(x, y, RADIUS, STARTANGLE, ENDANGLE, HEAD_TYPE);
    snake.push(head);

    var scores = (snake.length - 4) * 20;

    var generatedPositions = generatePositionsForFood();
    makeFood(generatedPositions).draw();

    drawSnakeAndFood(snake, generatedPositions);

    interval = setInterval(animationFrame, secondsOfExecution);

    function animationFrame() {
        if (direction == 'up') {
            y -= UPDATE;
            snake.pop();
            eachPartOfBody = partOfBody(x - 8, y + 12, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
            snake.push(eachPartOfBody);
            head = makeHead(x, y, RADIUS, STARTANGLE, ENDANGLE, HEAD_TYPE);
            snake.push(head);
            snake.shift();

            if (snakeHasEatenTheFood(snake, generatedPositions)) {
                generatedPositions = generatePositionsForFood();

                //adding element to the queue

                var possX = snake[snake.length - 1].x;
                var possY = snake[snake.length - 1].y;

                eachPartOfBody = partOfBody(possX - 8, possY + 12, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
                snake.unshift(eachPartOfBody);

                updateInterval();
            }

            if (snakeHitAnEdge(snake) || snakeEatenItsSelf(snake)) {
                endGame();
                return;
            }

            drawSnakeAndFood(snake, generatedPositions);
        }
        else if (direction == 'right') {
            x += UPDATE;
            snake.pop();
            eachPartOfBody = partOfBody(x - 28, y - 8, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
            snake.push(eachPartOfBody);
            head = makeHead(x, y, RADIUS, STARTANGLE, ENDANGLE, HEAD_TYPE);
            snake.push(head);
            snake.shift();

            if (snakeHasEatenTheFood(snake, generatedPositions)) {
                generatedPositions = generatePositionsForFood();

                //adding element to the queue

                var possX = snake[snake.length - 1].x;
                var possY = snake[snake.length - 1].y;

                eachPartOfBody = partOfBody(possX - 28, possY - 8, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
                snake.unshift(eachPartOfBody);

                updateInterval();
            }

            if (snakeHitAnEdge(snake) || snakeEatenItsSelf(snake)) {
                endGame();
                return;
            }

            drawSnakeAndFood(snake, generatedPositions);
        }
        else if (direction == 'left') {
            x -= UPDATE;
            snake.pop();
            eachPartOfBody = partOfBody(x + 12, y - 8, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
            snake.push(eachPartOfBody);
            head = makeHead(x, y, RADIUS, STARTANGLE, ENDANGLE, HEAD_TYPE);
            snake.push(head);
            snake.shift();

            if (snakeHasEatenTheFood(snake, generatedPositions)) {
                generatedPositions = generatePositionsForFood();

                //adding element to the queue

                var possX = snake[snake.length - 1].x;
                var possY = snake[snake.length - 1].y;

                eachPartOfBody = partOfBody(possX + 12, possY - 8, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
                snake.unshift(eachPartOfBody);

                updateInterval();
            }

            if (snakeHitAnEdge(snake) || snakeEatenItsSelf(snake)) {
                endGame();
                return;
            }

            drawSnakeAndFood(snake, generatedPositions);
        }
        else if (direction == 'down') {
            y += UPDATE;
            snake.pop();
            eachPartOfBody = partOfBody(x - 8, y - 28, SQUARE_WIDTH, SQUARE_HEIGHT, BODY_TYPE);
            snake.push(eachPartOfBody);
            head = makeHead(x, y, RADIUS, STARTANGLE, ENDANGLE, HEAD_TYPE);
            snake.push(head);
            snake.shift();

            if (snakeHasEatenTheFood(snake, generatedPositions)) {
                generatedPositions = generatePositionsForFood();

                //adding element to the queue
                addElementToTheQueue();
                var possX = snake[snake.length - 1].x;
                var possY = snake[snake.length - 1].y;

                eachPartOfBody = partOfBody(possX - 8, possY - 28, 15, 15, BODY_TYPE);
                snake.unshift(eachPartOfBody);

                updateInterval();
            }

            if (snakeHitAnEdge(snake) || snakeEatenItsSelf(snake)) {
                endGame();
                return;
            }

            drawSnakeAndFood(snake, generatedPositions);
        }
    }

    //checks which arrow has been pressed
    document.onkeydown = checkKey;

    function checkKey(e) {
        e = e || window.event;

        if (e.keyCode == '38') {
            //up
            direction = 'up';
        }
        else if (e.keyCode == '40') {
            //down
            direction = 'down';
        }
        else if (e.keyCode == '39') {
            //right
            direction = 'right';
        }
        else if (e.keyCode == '37') {
            //left
            direction = 'left';
        }
    }
}