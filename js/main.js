function onDragStart(ev) {
    var element = ev.target;
    var color = element.getAttribute("color");

    ev.dataTransfer.setData("text/plain", color);
}


function onDrop(ev) {
    ev.preventDefault();

    var element = ev.target;
    var color = ev.dataTransfer.getData("text/plain");

    element.style.backgroundColor = color;
}

function onDragOver(ev) {
    ev.preventDefault();
}