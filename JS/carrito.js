const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito"));

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-producto");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
const contenedorCarritoComprado = document.querySelector("#carrito-comprado");
let botonesEliminar = document.querySelector(".carrito-producto-eliminar");
const botonComprar = document.querySelector(".carrito-acciones-comprar");


function cargarProductosCarrito(){
    if (productosEnCarrito) {

        contenedorCarritoVacio.classList.add("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        
    
        productosEnCarrito.forEach(producto =>{
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
    
            div.innerHTML =` 
            <img class ="carrito-producto-imagen" src="${producto.imagen}" alt="${producto.titulo}">
                <div class="carrito-producto-titulo">
                    <small>Titulo</small>
                        <h3>${producto.titulo}</h3>
                </div>
                <div class="carrito-producto-cantidad">
                    <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                </div>
                <div class="carrito-producto-precio">
                    <small>Precio</small>
                        <p>$${producto.precio}</p>
                </div>
                <div class="carrito-producto-subtotal">
                    <small>Subtotal</small>
                        <p>$${producto.precio * producto.cantidad}</p>
                </div>
                <button class="carrito-producto-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>`;
    
                contenedorCarritoProductos.append(div);
        })
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disable");
        contenedorCarritoAcciones.classList.add("disable");
        contenedorCarritoComprado.classList.add("disable");
    } 
    actualizarBotonesEliminar();
}


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-producto-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    });
}

function eliminarDelCarrito() {
    const idBoton = e.currentTarget.id;
    const index = productosEn.findIndex(producto => producto.id === idBoton);
    
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito" , JSON.stringify(productosEnCarrito));
}

botonVaciar.addEventListener("click", vaciarCarrito);
function vaciarCarrito (){
  

    productosEnCarrito.lenght = 0;
    localStorage.setItem("productos-en-carrito" , JSON.stringify(productosEnCarrito));
    cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto) => acc (producto.precio * precio.cantidad),0);
    total.innerText = `$${totalCalculado}`;
}

botonComprar.addEventListener("click", vaciarCarrito);
function vaciarCarrito(){

    productosEnCarrito.lenght = 0;
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
    contenedorCarritoVacio.classList.add("disabled");
    contenedorCarritoProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.remove("disabled");
}
