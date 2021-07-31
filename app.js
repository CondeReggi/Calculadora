
const displayValorAnterior = document.getElementById("valor_anterior");
const displayValorActual = document.getElementById("valor_actual");

const botones_numeros = document.querySelectorAll(".numero");
const botones_operadores = document.querySelectorAll(".operador");

const display = new Display(displayValorActual, displayValorAnterior);

botones_numeros.forEach(boton => {
    boton.addEventListener("click", () => {
        display.agregar_numero(boton.innerHTML);
    })
})

botones_operadores.forEach(boton => {
    boton.addEventListener("click", () => {
        display.computar(boton.value);
    })
})
