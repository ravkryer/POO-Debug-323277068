class Libro {
    constructor(titulo, autor) {
        this.titulo = titulo;
        this.autor = autor;
    }

    mostrarInformacion() {
        console.log("Libro: " + this.titulo);
        console.log("Autor: " + this.autor);
    }
}

let libro1 = new Libro("El principito", "Antoine");

libro1.mostrarInfo();