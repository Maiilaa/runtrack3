function tri(numbers, order) {
    if (order === "asc") {
        numbers.sort((a, b) => a - b);
    } else if (order === "desc") {
        numbers.sort((a, b) => b - a);
    } else {
        return "L'ordre doit être 'asc' ou 'desc'";
    }
    return numbers;
}

console.log(tri([5,28, 3, 8, 43 , 94, 1, 2], "asc"));  
   
