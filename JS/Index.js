const productos = [
    {
        id: "Figura Frieren",
        titulo: "Frieren",
        imagen: "./imagenes/Frieren.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 4679
    },
    {
        id: "Figura Aqua",
        titulo: "Aqua",
        imagen: "./Imagenes/Aqua.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 3789
    },
    {
        id: "Figura Archerelf",
        titulo: "Elf",
        imagen: "./Imagenes/archerelf.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 3440
    },
    {
        id: "Figura Shinano",
        titulo: "Shinano",
        imagen: "./Imagenes/shinano.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 7690
    },
    {
        id: "Figura Roxy",
        titulo: "Roxy",
        imagen: "./Imagenes/Roxy.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 2300
    },
    {
        id: "Figura RancingMiku",
        titulo: "RancingMiky",
        imagen: "./Imagenes/rancingmiku.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 2893
    },
    {
        id: "Figura Mika",
        titulo: "Mika",
        imagen: "./Imagenes/mika.png",
        categoria:{
            nombre: "Figuras",
            id: "nendoroid"
        },
        precio: 3320
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categorias");
const tituloPrincipal = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total");

function cargarProductos(productosElegidos) {

    contenedorProductos.innerHTML = "";

    productosElegidos.forEach(producto => {
        
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" alt="${producto.titulo}"></img>
        <div class="producto-detalles">
             <h3 class="producto-titulo">${producto.titulo}</h3>
             <p class="producto-precio">$${producto.precio}</p>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </div>
        `;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(productos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");

        if (e.currentTarget.id != "todos") {
            const productoCategoria = productos.find(producto => producto.categoria.id === e.currentTarget.id);

            tituloPrincipal.innerHTML = productoCategoria.categoria.nombre;

            const productosBoton = productos.filter(producto => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
        } else {
            tituloPrincipal.innerHTML = "Todos los productos";
            cargarProductos(productos);
        }
    })
})

function actualizarBotonesAgregar() {
    botonesAgregar = document.querySelectorAll(".producto-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
}

let productosEnCarrito;

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");


if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}

function agregarAlCarrito(e) {

    const id = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);

    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
      const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
      productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1; 
        productosEnCarrito.push(productoAgregado);
    }

    actualizarNumerito();

    localStorage.setItem("producto-en-carrito", JSON.stringify(productosEnCarrito));
}

function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
} 
