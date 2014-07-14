var domModule = (function () {
    var buffer = [];

    function appendChild(element, selector) {
        var parentNode = document.querySelector(selector);
        parentNode.appendChild(element);
    }

    function removeChild(element, selector) {
        var parentNode = document.querySelector(element);
        var childNode = parentNode.querySelector(selector);
        parentNode.removeChild(childNode);
    }

    function addHandler(selector, eventType, handler) {
        var element = document.querySelector(selector);
        if (element.addEventListener) {
            element.addEventListener(eventType, handler, false);
        }
        else {
            element.attachEvent("on" + eventType, handler);
        }
    }

    function appendToBuffer(selector, element) {
        if (!document.querySelector(selector)) {
            throw "Invalid selector";
        }
        if (buffer[selector]) {
            buffer[selector].push(element);
            if (buffer[selector].length >= 100) {
                var currentDomElement = document.querySelector(selector);
                for (var i = 0; i < buffer[selector].length; i++) {
                    currentDomElement.appendChild(buffer[selector][i]);
                }

                buffer[selector] = [];
            }
        }
        else {
            buffer[selector] = [];
            buffer[selector].push(element);
        }
    }

    return {
        appendChild: appendChild,
        removeChild: removeChild,
        addHandler: addHandler,
        appendToBuffer: appendToBuffer
    }
}());

var div = document.createElement("div");

//appends div to #wrapper
domModule.appendChild(div, "#wrapper");
//removes li:first-child from ul
domModule.removeChild("ul", "li:first-child");
//domModule.removeChild("ul", "li:last-child");
//add handler to each a element with class button
domModule.addHandler("a.button", 'click',
                     function () { alert("Clicked") });
for (var i = 0; i < 150; i++) {
    var currentDiv = div.cloneNode(true);
    currentDiv.innerText = i;
    domModule.appendToBuffer("#container", currentDiv);
}

var liItem = document.createElement('li');

for (var i = 0; i < 150; i++) {
    var navItem = liItem.cloneNode(true);
    navItem.innerText = i;
    domModule.appendToBuffer("#main-nav ul", navItem);
}

