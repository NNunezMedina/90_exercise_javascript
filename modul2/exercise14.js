/*
 * Escribe un programa que se encargue de comprobar si un número es o no primo.
 * Hecho esto, imprime los números primos entre 1 y 100.
 */

function isPrime(num) {
    if (num <= 1) return false; // Los números menores o iguales a 1 no son primos
    if (num <= 3) return true;  // 2 y 3 son números primos

    if (num % 2 === 0 || num % 3 === 0) return false; // Eliminar múltiplos de 2 y 3

    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}

function printPrimesUpTo(max) {
    for (let i = 1; i <= max; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
}

printPrimesUpTo(100);

