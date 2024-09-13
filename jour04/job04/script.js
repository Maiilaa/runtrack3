function updateTable() {
    fetch('users.php')  
        .then(response => response.json()) 
        .then(data => {
            const tableBody = document.querySelector('#user-table tbody');
            tableBody.innerHTML = ''; 
            data.forEach(user => {
                const row = document.createElement('tr');
                const idCell = document.createElement('td');
                idCell.textContent = user.id;
                row.appendChild(idCell);

                const nomCell = document.createElement('td');
                nomCell.textContent = user.nom;
                row.appendChild(nomCell);

                const prenomCell = document.createElement('td');
                prenomCell.textContent = user.prenom;
                row.appendChild(prenomCell);

                const emailCell = document.createElement('td');
                emailCell.textContent = user.email;
                row.appendChild(emailCell);

                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des utilisateurs:', error));
}

document.getElementById('update-btn').addEventListener('click', updateTable);