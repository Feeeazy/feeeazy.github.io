// Suponha que você tenha o horário atual em horas (0-23) da API.
// Por exemplo, 14 para 2:00 PM.
const horaAtual = 14;

// Calcule o ângulo de rotação do sol com base na hora atual (0-23).
const angulo = ((horaAtual - 6) / 12) * 180; // -6 para ajustar o meio-dia ao topo do arco

// Selecione o elemento do sol e aplique a rotação.
const sol = document.querySelector('.sun');
sol.style.transform = `rotate(${angulo}deg)`;
