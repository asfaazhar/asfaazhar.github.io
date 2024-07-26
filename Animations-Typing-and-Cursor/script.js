const cursor = document.querySelector(".cursor");
var timeout;

// Cursor Movement
document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    let y = e.pageY;

    cursor.style.top = y + 'px';
    cursor.style.left = x + 'px';
    cursor.style.display = 'block';

    // Stop Animation
    function mouseStopped () {
        cursor.style.display = 'none';
    }

    // Hide Animation
    clearTimeout (timeout);
    timeout = setTimeout(mouseStopped, 1000);
});

// Stopping animation off the Screen
document.addEventListener("mouseout", () => {
    cursor.style.display = 'none';
});
