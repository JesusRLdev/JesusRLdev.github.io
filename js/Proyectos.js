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
                <article class="card proyecto-card shadow h-100">

                    <img src="${this.imagen}"
                         class="card-img-top proyecto-card-img"
                         alt="Captura del proyecto ${this.nombre}"
                         loading="lazy">

                    <div class="card-body d-flex flex-column">

                        <h3 class="card-title h5">
                            ${this.nombre}
                        </h3>

                        <p class="card-text flex-grow-1">
                            ${this.descripcion}
                        </p>

                        <p class="text-muted small mb-3">
                            ${this.tecnologias}
                        </p>

                        <a href="${this.url}"
                           target="_blank"
                           rel="noopener noreferrer"
                           class="btn btn-primary mt-auto align-self-start">
                            Ver proyecto
                        </a>

                    </div>

                </article>
            </div>
        `;
    }
}