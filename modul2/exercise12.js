/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(a ,b) {
    if( a === b) {
        return false;
    } else if (a.length !== b.length) {
        return false;
    } let sortedA = a.split("").sort().join("")
      let sortedB = b.split("").sort().join("")
      return sortedA === sortedB
      }

console.log(isAnagram("ana","naa"));