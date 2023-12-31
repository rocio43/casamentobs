const dia = document.getElementById("dia");
const hora = document.getElementById("hora");
const minuto = document.getElementById("min");
const segundo = document.getElementById("seg");

const release = "30 JUN 2023 19:30";

function countdown() {

    const dataRelease = new Date(release);
    const hoje = new Date();

    const segTotal = (dataRelease - hoje) / 1000;
    const dias = Math.floor((segTotal / 3600 / 24));
    const horas = Math.floor((segTotal / 3600) % 24);
    const minutos = Math.floor(segTotal / 60) % 60;
    const segundos = Math.floor(segTotal % 60);

    dia.innerHTML = ` <strong>${dias} <br>dias</strong>`
    hora.innerHTML = formatacao(horas) + ("<strong>horas</strong>")
    minuto.innerHTML = formatacao(minutos) + ("<strong>minutos</strong>")
    segundo.innerHTML = formatacao(segundos) + ("<strong>segundos</strong>")
}
function formatacao(tempo) {
    return tempo < 10 ? `<strong>0${tempo}</strong>` : `<strong>${tempo}</strong>`;
}

countdown();

setInterval(countdown, 1000);