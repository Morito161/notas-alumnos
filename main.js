'use strict';

function clasificarPromedio(promedio) {
  if (promedio < 60) return 'NO APROBADO';
  if (promedio < 75) return 'SUFICIENTE';
  if (promedio < 90) return 'BIEN';
  return 'EXCELENTE';
}

function calcularPromedio() {
  const resultado = document.getElementById('resultado');
  const nombre = ['nombre', 'apellidoP', 'apellidoM']
    .map(id => document.getElementById(id).value.trim())
    .filter(Boolean).join(' ');
  const ids = ['nota1', 'nota2', 'nota3'];
  const valores = ids.map(id => document.getElementById(id).value.trim());
  if (valores.some(valor => valor === '')) {
    resultado.textContent = 'Ingresa las tres notas para calcular el promedio.';
    return;
  }
  const notas = valores.map(Number);
  if (notas.some(nota => !Number.isFinite(nota) || nota < 0 || nota > 100)) {
    resultado.textContent = 'Las notas deben ser números entre 0 y 100.';
    return;
  }
  const promedio = notas.reduce((suma, nota) => suma + nota, 0) / 3;
  const saludo = nombre ? 'Hola ' + nombre + ', ' : '';
  resultado.textContent = saludo + 'tu promedio es: ' + promedio.toFixed(1) +
    ' — ' + clasificarPromedio(promedio);
}
