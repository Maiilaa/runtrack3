function jsonValueKey(jsonString, key) {
    try {
        const jsonObj = JSON.parse(jsonString); 
        return jsonObj[key]; 
    } catch (error) {
        console.error("Erreur lors du parsing JSON: ", error);
        return null;
    }
}

const button = document.getElementById('fetchButton');
const resultParagraph = document.getElementById('result');
const jsonString = `{
    "name": "La Plateforme_",
    "address": "8 rue d'hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
}`;

button.addEventListener('click', function() {
    const key = 'name';
    const cityValue = jsonValueKey(jsonString, key);
    resultParagraph.textContent = ` ${cityValue}`;
});