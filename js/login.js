document.addEventListener('DOMContentLoaded', () =>{

    const contenedor = document.getElementById('contenedor-login');
    const boton = document.getElementById('boton-enviar');
    boton.addEventListener('click', login)

    
    contenedor.addEventListener('keypress', function (event){
        if(event.key === 'Enter'){
            login();
        }
    })

    
})

function login(){
    let user = {};
    user.correo = document.getElementById('correo').value;
    user.contraseña = document.getElementById('contraseña').value;


    if((user.correo.length >= 9) && (user.contraseña.length >= 6)){
        localStorage.setItem('usuario', JSON.stringify(user));
        location.href = 'index.html'
    }else{
        if(user.correo.length < 9 && user.contraseña.length < 6){
            alert('Correo y contraseña demasiado cortos')
        }else{
            if(user.correo.length < 9){
                alert('Correo demasiado corto')
            }
            if(user.contraseña.length < 6 ){
                alert('Contraseña demsiado corta')
            }
        }
    }
}