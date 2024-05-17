/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

let image = new Image()
image.src ="https://fastly.picsum.photos/id/301/1920/1080.jpg?hmac=-h20lEcazeSzwCALlmynk0Tgufw8NUP3OP4Bgz91jSs";

image.onload = function () {
    let imageWidth= image.width
    let imageHeigt =image.height
    let aspectRatio = imageWidth / imageHeigt;
    console.log("Aspect Ratio:", aspectRatio);
}
    
        


