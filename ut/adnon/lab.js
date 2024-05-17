board.addEventListener('touchmove', handleTouchMove, { passive: false });

function handleTouchMove(event) {
  // Prevent the browser's default touch actions.
  event.preventDefault();

  // Get the coordinates of the touch.
  const touch = event.touches[0];
  const x = touch.clientX;
  const y = touch.clientY;

  // Do something with the coordinates.
  // ...
}
