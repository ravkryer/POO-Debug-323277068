class Videojuego {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }

    mostrarDatos() {
        console.log("Juego: " + this.nombre);
        console.log("Precio: " + this.precio);
    }
}

let juego1 = new Videojuego("Minecraft", 500);

console.log(juego1.nombre);
console.log(juego1.precioo);