console.log('menu-mobile');
const menuBtn = document.querySelector('.menu-btn');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('open');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    menuOpen = false;
  }
});

(function () {
  const MENU_OBJ = {
    init: function () {
      console.log('cargando javascript menu...');

      this.eventHandlers();
    },

    eventHandlers: function () {
      document.querySelector('.menu-btn').addEventListener('click', function(){
        document.querySelector('.menu-navegacion').classList.toggle('spread');
      });
    

    }
 

  }

  MENU_OBJ.init();
})();


		window.onload = function(){
			var contenedor = document.getElementById('contenedor_carga');
			contenedor.style.visibility = 'hidden';
			contenedor.style.opacity = '0';
      console.log('Barra de carga'); 
		}

