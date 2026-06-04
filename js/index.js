import Proyectos from './Proyectos.js';

document.addEventListener('DOMContentLoaded', async () => {

    const contenedor = document.getElementById('listaProyectos');

    const proyectos = await Proyectos.obtenerProyectos();

    proyectos.forEach(proyecto => {
        contenedor.innerHTML += proyecto.crearCard();
    });

});