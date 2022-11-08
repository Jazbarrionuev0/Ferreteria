let boton1 = document.querySelector(".boton1");
let modal1 = document.querySelector(".modal1");
let cerrar = document.querySelector(".cerrar");

boton1.addEventListener("click",abrirModal);
cerrar.addEventListener("click",cerrarModal);

function abrirModal(){
    modal1.classList.add("modalVisible");
}

function cerrarModal(){
    modal1.classList.remove("modalVisible");
}