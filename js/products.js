let catID = localStorage.getItem('catID') + '.json';
const api = 'https://japceibal.github.io/emercado-api/cats_products/' +catID
let contenedor = document.getElementById('contenedor');


document.addEventListener('DOMContentLoaded', () =>{
    traerAutos();
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

        <div class='contenedor-imagen'>
            <img class='imagen' src=${i.image}>
        </div>

        <div class='contenedor-datos'>
            <h3>${i.name} - ${i.currency} ${i.cost}</h3>
            <p>${i.description}</p>

        </div>
           
        <div class='contenedor-vendidos'>
            <p>Vendidos</p>
            <p>&nbsp${i.soldCount}</p>
        </div>

        `
        
        
        contenedor.appendChild(contenedorProducto);
    }
}


