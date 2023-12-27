let pesoEl = document.getElementById("weight");
let alturaEl = document.getElementById("height");
let button = document.querySelector("button");

function calcularIMC(peso, altura_cm) {
  let altura_m = altura_cm / 100; // Convertendo altura de centímetros para metros
  let imc = peso / (altura_m ** 2); // Calculando o IMC
  return imc;
}

button.addEventListener("click", (e) => {
  e.preventDefault();

  let peso = parseFloat(pesoEl.value); // Obtendo o valor do peso e convertendo para número
  let altura = parseFloat(alturaEl.value); // Obtendo o valor da altura e convertendo para número

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    // Verificando se os valores inseridos são válidos
    alert("Por favor, insira valores válidos para peso e altura.");
    return;
  }

  let resultadoIMC = calcularIMC(peso, altura);
  let infoText = document.querySelector(".info-text");

  if (resultadoIMC >= 40) {
    infoText.textContent = "Você Está Com Obesidade Grau III";
  } else if (resultadoIMC >= 35 && resultadoIMC <= 39.90) {
    infoText.textContent = "Você Está Com Obesidade Grau II";
  } else if (resultadoIMC >= 30 && resultadoIMC <= 34.90) {
    infoText.textContent = "Você Está Com Obesidade Grau I";
  } else if (resultadoIMC >= 25 && resultadoIMC <= 29.90) {
    infoText.textContent = "Você Está Com Sobrepeso";
  } else if (resultadoIMC >= 18.60 && resultadoIMC <= 24.90) {
    infoText.textContent = "Seu Peso Está Normal";
  } else if (resultadoIMC <= 18.50) {
    infoText.textContent = "Seu Peso Está Abaixo Do Normal";
  }

  let resultContainer = document.querySelector(".result-container");
  let points = document.querySelector(".points span");

  if(resultContainer.style.display = "none") {
    resultContainer.style.display = "block";
    points.textContent = resultadoIMC.toFixed(2); // Arredondando o IMC para duas casas decimais
  }
});
