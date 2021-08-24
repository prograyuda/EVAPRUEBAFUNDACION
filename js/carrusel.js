var imagenes = ['/imgs/homepage/Illustracion pag web02.png', '/imgs/homepage/illustracion pag web04.png', '/imgs/homepage/illustración pag web03.png'],
cont = 0; 
function carrousel (contenedor){
    console.log("funcion carrusel1");
contenedor.addEventListener('click',e =>{
let atras = contenedor.querySelector('.atras'),
adelante = contenedor.querySelector('.adelante'),
img = contenedor.querySelector(' img'),
tgt = e.target;

if(tgt== atras){
if(cont> 0){
    img.src=imagenes[cont-1];
    cont--;
}else{
    img.src=imagenes[imagenes.length -1];
    cont=imagenes.length -1;

}


}else if(tgt==adelante){
    if(cont < imagenes.length -1){
        img.src = imagenes[cont + 1];
        cont++;
    }else{
        img.src=imagenes[0];
        cont=0;
    
    }
    
}


});
}
document.addEventListener("DOMContentLoaded", () =>{
let contenedor= document.querySelector('.contenedor');
carrousel(contenedor);
});

