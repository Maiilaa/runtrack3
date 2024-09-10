let count = 0;
        function addone() {
            count++;
            document.getElementById("compteur").innerText = count;
        }
        window.onload = function() {
            document.getElementById("button").addEventListener("click", addone);
        }