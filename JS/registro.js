const formRegistro = document.querySelector("#formReg"),
email= document.querySelector("#email"),
nombre= document.querySelector("#nombre"),
userReg= document.querySelector("#userReg"),
passReg= document.querySelector("#passReg"),
btnCrearCuenta= document.querySelector("#registrar");

let usuarios;
if(localStorage.getItem("usuarios")){
    usuarios=JSON.parse(localStorage.getItem("usuarios"))
}else{
    usuarios=[]
}


class Usuario {
    constructor(nombre, usuario, email, password){
        this.nombre= nombre;
        this.usuario= usuario;
        this.email= email;
        this.pass= password;
    }
}


function guardarUsuario(usuario){
    return usuarios.push(usuario)
}

function guardarEnLS(arr){
    return localStorage.setItem("usuarios", JSON.stringify(arr))
}

formRegistro.addEventListener("submit", (e)=>{
  e.preventDefault()
  const newUsuario= new Usuario(nombre.value, userReg.value, email.value, passReg.value)
  guardarUsuario(newUsuario)
  guardarEnLS(usuarios)
})