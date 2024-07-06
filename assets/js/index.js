let tareas = [
    { id: 1, descripcion: 'Tarea 1', completada: false },
    { id: 2, descripcion: 'Tarea 2', completada: false },
    { id: 3, descripcion: 'Tarea 3', completada: false }
];

function actualizarResumenTareas() {
    const totalTareas = tareas.length;
    const tareasRealizadas = tareas.filter(tarea => tarea.completada).length;
    
    document.getElementById('total-tareas').innerText = totalTareas;
    document.getElementById('tareas-realizadas').innerText = tareasRealizadas;
}

function renderizarTareas() {
    const listaTareas = document.getElementById('lista-tareas');
    listaTareas.innerHTML = '';
    
    tareas.forEach(tarea => {
        const itemTarea = document.createElement('li');
        itemTarea.innerHTML = `
            <span>${tarea.id} - ${tarea.descripcion}</span>
            <div class="acciones-tarea">
                <input type="checkbox" class="checkbox-completar" onclick="cambiarEstadoTarea(${tarea.id})" ${tarea.completada ? 'checked' : ''}>
                <button class="boton-eliminar" onclick="eliminarTarea(${tarea.id})">X</button>
            </div>
        `;
        listaTareas.appendChild(itemTarea);
    });

    actualizarResumenTareas();
}

function agregarTarea() {
    const nuevaTareaInput = document.getElementById('nueva-tarea');
    const nuevaDescripcionTarea = nuevaTareaInput.value.trim();
    
    if (nuevaDescripcionTarea) {
        const nuevaTarea = {
            id: tareas.length ? tareas[tareas.length - 1].id + 1 : 1,
            descripcion: nuevaDescripcionTarea,
            completada: false
        };
        tareas.push(nuevaTarea);
        nuevaTareaInput.value = '';
        renderizarTareas();
    }
}

function eliminarTarea(tareaId) {
    tareas = tareas.filter(tarea => tarea.id !== tareaId);
    renderizarTareas();
}

function cambiarEstadoTarea(tareaId) {
    const tarea = tareas.find(tarea => tarea.id === tareaId);
    if (tarea) {
        tarea.completada = !tarea.completada;
        renderizarTareas();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderizarTareas();
});
