function estPremier(n) {
    if (n <= 1) return false; 
    if (n <= 3) return true;  
    if (n % 2 === 0 || n % 3 === 0) return false; 
    for (let i = 5; i * i <= n; i += 6) {
        if (n % i === 0 || n % (i + 2) === 0) return false;
    }
    return true;
}

function sommenombrespremiers(a, b) {
    if (estPremier(a) && estPremier(b)) {
        return a + b;
    } else {
        return false;
    }
}

console.log(sommenombrespremiers(2, 5)); 