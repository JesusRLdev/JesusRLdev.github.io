export default class Proyectos {

    constructor(nombre, descripcion, tecnologias, imagen,url) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tecnologias = tecnologias;
        this.imagen = imagen;
        this.url = url;
    }

    static async obtenerProyectos() {

        const response = await fetch("./data/datos.json");
        const data = await response.json();

        return data.proyectos.map(
            proyecto => new Proyectos(
                proyecto.nombre,
                proyecto.descripcion,
                proyecto.tecnologias,
                proyecto.imagen,
                proyecto.url
            )
        );
    }

    crearCard() {

        return `
            <div class="col-md-4 mb-4">
                <div class="card shadow h-100">

                    <img src="${this.imagen}"
                         class="card-img-top"
                         alt="${this.nombre}">
                    <a href="${this.url}" target="_blank" class="btn btn-primary">Ver Proyecto</a>

                    <div class="card-body">

                        <h5 class="card-title">
                            ${this.nombre}
                        </h5>

                        <p class="card-text">
                            ${this.descripcion}
                        </p>

                        <small class="text-muted">
                            ${this.tecnologias}
                        </small>

                    </div>

                </div>
            </div>
        `;
    }
}