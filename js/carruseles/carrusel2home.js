//Segundo carrusel
var imagenes2 = ['/wpimages/homepage/Illustracion pag web02.png', '/wpimages/homepage/illustracion pag web04.png', '/wpimages/homepage/illustración pag web03.png'],
cont = 0; 
function carrousel2 (contenedor2){
    console.log("funcion carrusel 2");
contenedor2.addEventListener('click',f =>{
let atras2 = contenedor2.querySelector('.atras2'),
adelante2= contenedor2.querySelector('.adelante2'),
img = contenedor2.querySelector(' img'),
tgt = f.target;

if(tgt== atras2){
if(cont> 0){
    img.src=image1nes2[cont-1];
    cont--;
}else{
    img.src=imagenes2[imagenes.length -1];
    cont=imagenes2.length -1;

}


}else if(tgt==adelante2){
    if(cont < imagenes2.length -1){
        img.src = imagenes2[cont + 1];
        cont++;
    }else{
        img.src=imagenes2[0];
        cont=0;
    
    }
    
}


});
}
document.addEventListener("DOMContentLoaded", () =>{
let contenedor2= document.querySelector('.contenedor2');
carrousel2(contenedor2);
});
