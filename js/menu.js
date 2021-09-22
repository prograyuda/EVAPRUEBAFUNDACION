(function () {
    const MAIN_OBJ = {
      init: function () {
        console.log('cargando menu js');
  
        this.eventHandlers();
      },
  
      eventHandlers: function () {
        document.querySelector('.Lineas').addEventListener('click', function(){
          document.querySelector('.Contenedor').classList.toggle('abrir');
        });
  
      }
    }
    MAIN_OBJ.init();
  })();
 
