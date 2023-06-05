const draggableContainer = document.querySelector('.draggable-container');

let offsetX, offsetY;

draggableContainer.addEventListener('mousedown', startDragging);
draggableContainer.addEventListener('mouseup', stopDragging);

function startDragging(e) {
  offsetX = e.clientX - draggableContainer.offsetLeft;
  offsetY = e.clientY - draggableContainer.offsetTop;

  document.addEventListener('mousemove', drag);
}

function stopDragging() {
  document.removeEventListener('mousemove', drag);
}

function drag(e) {
  draggableContainer.style.left = e.clientX - offsetX + 'px';
  draggableContainer.style.top = e.clientY - offsetY + 'px';
}