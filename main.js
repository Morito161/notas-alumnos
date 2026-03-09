//alert(25)

const nombre = prompt("¿Cuál es tu nombre?")
const apellidoP = prompt("¿Cuál es tu apellido Paterno?")
const apellidoM = prompt("¿Cuál es tu Apellido Materno?")

const nota1 = parseFloat(prompt("Ingresa tu primer nota"))
const nota2 = parseFloat(prompt("Ingresa tu segunda nota"))
const nota3 = parseFloat(prompt("Ingresa tu tercera nota"))

const promedio = (nota1 + nota2 + nota3) / 3

function calcularPromedio(){
    document.getElementById("resultado").innerHTML =
    "Hola tu promedio es: " + promedio.toFixed(1);

}

if(promedio < 60) {
    document.write(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} "NO APROBADO"`)
    console.log(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} "NO APROBADO"`)
}else if(promedio >= 60 && promedio <= 74) {
    document.write(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} Aprobado con "SUFICIENTE"`)
    console.log(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} Aprobado con "SUFICIENTE"`)
}else if(promedio >= 75 && promedio <= 89) {
    document.write(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} Aprobado con "BIEN"`)
    console.log(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} Aprobado con "BIEN"`)
}else if(promedio >= 90 && promedio <= 100) {
    document.write(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} Aprobado con "EXCELENTE"`)
    console.log(`Hola ${nombre} ${apellidoP} ${apellidoM}, tu promedio es: ${promedio.toFixed(1)} Aprobado con "EXCELENTE"`)
}