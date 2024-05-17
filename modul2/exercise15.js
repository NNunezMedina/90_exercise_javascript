/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

function polygonArea (polygonType,num1,num2) {
    if(num1 <=0 || num2 <= 0) {
        return "Invalid polygon type";
    } else if(polygonType === "triangle") {
        const resultTriangle= (num1 * num2)/2
        return resultTriangle;
    } else if (polygonType === "square" || polygonType === "rectangle") {
        const result = num1 * num2
        return result;
    } else {
        return "Invalid polygon type";
    }

}
console.log(polygonArea("triangle",-4,5))
console.log(polygonArea("square",4,4));
console.log(polygonArea("rectangle",6,7))