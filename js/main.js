const inputMes = document.querySelector('input[type="month"]#input-mes');

class Actividad {
    constructor(dia, titulo, tipo, descripcion) {
        this.dia = dia
        this.titulo = titulo
        this.tipo = tipo
        this.descripcion = descripcion
    }
}

actividades = []

function iniciarApp() {
    mostrarDias(Date.now())
    cargarActividades()
}

function mostrarDias(date) {
    fecha = new Date(date)
    mes = formatoMes(fecha)
    console.log("Fecha de ahora:")
    console.log(fecha)
    inputMes.value = mes
    numeroDeDias = fecha.getDate()
    console.log("Numero de dias:")
    console.warn(numeroDeDias)
}

function cargarActividades() {
    console.error("Actividades:")
    actividades.push(
            new Actividad(
                    new Date('11/16/2022'),
                    'Patrullaje en el sendero La Lagartija',
                    'Patrullaje',
                    'Se realizo patullaje en el sendero de ida y vuelta'
            ),
            new Actividad(
                    new Date('11/15/2022'),
                    'Atencion de incendios en la col. Las Bondades',
                    'Atencion de incendios',
                    'Se atendio un incendio en...'
            ),
            new Actividad(
                    new Date('11/16/2022'),
                    'Reforestacion en la ANP las Ranas',
                    'Reforestacion',
                    'Se plantaron 25 arboles'
                    ),
    )
    mostrarActividades()
}

function mostrarActividades() {
    console.log(actividades)
}

function formatoMes(fecha) {
    mes = fecha.getMonth() + 1
    anio = fecha.getFullYear()
    if(mes < 10)
        return anio + '-' + '0' + mes
    else
        return anio + '-' + mes
}

window.addEventListener('load', iniciarApp)