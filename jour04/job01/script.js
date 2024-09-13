const button = document.getElementById('button');
        const paragraph = document.getElementById('expression');
        button.addEventListener('click', function() {
            fetch('expression.txt')
                .then(response => response.text())
                .then(data => {
                    paragraph.textContent = data;
                })
                .catch(error => {
                    console.error('Erreur:', error);
                });
        });