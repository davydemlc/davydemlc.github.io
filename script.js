document.addEventListener('keydown', function(e) {
	// CTRL + U
    if (e.ctrlKey && e.keyCode == 85) {
        e.preventDefault();
        return false;
    }
});

document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
    return false;
});
