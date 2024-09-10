window.addEventListener("keydown", function(event) {
    var textarea = document.getElementById("keylogger");
    if (event.key.length === 1 && event.key.match(/[a-z]/i)) {
        if (document.activeElement === textarea) {
            textarea.value += event.key ;
        } else {
            textarea.value += event.key;
        }
    }
});