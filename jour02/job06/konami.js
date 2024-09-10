// Code Konami : ↑ ↑ ↓ ↓ ← → ← → B A
const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let konamiIndex = 0;

document.addEventListener('keydown', function(e) {
    if (e.keyCode === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            activateKonamiStyle();
            konamiIndex = 0;  
        }
    } else {
        konamiIndex = 0; 
    }
});

function activateKonamiStyle() {
    document.body.classList.add('konami-active');
    const content = document.createElement('div');
    content.innerHTML = `
        <h1>La Plateforme_ style caché au code Konami !</h1>
    `;
    document.body.appendChild(content);
}
