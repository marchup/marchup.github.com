// Obtener los elementos de la clase .close
let links = document.querySelectorAll(".close");
// Recorrerlos
links.forEach(function(link){
  // Agregar un evento click a cada uno de ellos
  link.addEventListener('click',function(ev){
    ev.preventDefault();
    let content = document.querySelector('.content')
    // Quitarle las clases de animacion que ya tiene
    content.classList.remove('animate__fadeOutUp');
    content.classList.remove('animate__animated');
    // Agregar clases para animar su salida
    content.classList.add('animate__fadeOutUp');
    content.classList.add('animate__animated');
    // retardamos la salida para ver la animacion
    setTimeout(function(){
        location.href = "/";
    },800);

    return false;

  });
});
