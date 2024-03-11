const formIngresar = document.querySelector("#formIngresar"),
userInput = document.querySelector("#user"),
passInput = document.querySelector("#pass"),
p = document.querySelector("#mensaje");

function inicioSesion(usuarios){
    let userFound= usuarios.find((usuario)=>{
        return usuario.usuario === userInput.value && usuario.pass === passInput.value;
    });
if(userFound){
    location.href="./servicios.html"
}else{
    document.querySelector("#mensaje").innerHTML="Usuario no encontrado"
}

}


function recuperarLS(){
    return JSON.parse(localStorage.getItem("usuarios"));
}


const usuariosLS=recuperarLS();


formIngresar.addEventListener("submit",(e)=>{
    e.preventDefault();
    inicioSesion(usuariosLS)
})