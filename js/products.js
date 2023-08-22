let catID = localStorage.getItem('catID') + '.json';
const api = 'https://japceibal.github.io/emercado-api/cats_products/' +catID
let contenedor = document.getElementById('contenedor');


document.addEventListener('DOMContentLoaded', () =>{

})

function traerAutos(unApi){
    fetch(api)
        .then(Response => Response.json())
        .then(data => mostrarProductos(data.products))
}

function mostrarProductos(array){
    for (let i of array){
        let contenedorProducto = document.createElement('div');
        contenedorProducto.classList.add('contenedor-producto');
        contenedorProducto.innerHTML = `
            `
        contenedor.appendChild(contenedorProducto);
    }
}


