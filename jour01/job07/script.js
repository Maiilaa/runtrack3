function jourtravaille(date) {
    const joursFeries2020 = [
        '2020-01-01', 
        '2020-04-13', 
        '2020-05-01', 
        '2020-05-08',
        '2020-05-21',
        '2020-06-01',
        '2020-07-14', 
        '2020-08-15', 
        '2020-11-01', 
        '2020-11-11', 
        '2020-12-25'  
    ];

    const formattedDate = date.toISOString().split('T')[0];
    const jour = date.getDate();
    const mois = date.toLocaleString('fr-FR', { month: 'long' }); 
    const annee = date.getFullYear();
    const jourSemaine = date.toLocaleString('fr-FR', { weekday: 'long' });
    if (joursFeries2020.includes(formattedDate)) {
        console.log(`Le ${jourSemaine} ${jour} ${mois} ${annee} est un jour férié`);
        return;
    }

    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) { 
        console.log(`Non, ${jourSemaine} ${jour} ${mois} ${annee} est un week-end`);
        return;
    }

    console.log(`Oui, ${jourSemaine} ${jour} ${mois} ${annee} est un jour travaillé`);
}


const dateTest = new Date('2020-06-01'); 
jourtravaille(dateTest);
