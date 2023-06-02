// Chave API HG do Brasil - Weather
const API_HG_KEY = 'f582f165'

// URL utilizada para 'chamar' a API
const url = `https://api.hgbrasil.com/weather?format=json-cors&key=${API_HG_KEY}&user_ip=remote`


let temperatureInfo = document.getElementById('temperature');
let maxTemperatureInfo = document.getElementById('max-temperature');
let minTemperatureInfo = document.getElementById('min-temperature');
let descriptionInfo = document.getElementById('description');
let currentlyInfo = document.getElementById('currently');
let cityInfo = document.getElementById('city');
let humidityInfo = document.getElementById('humidity');
let cloudinessInfo = document.getElementById('cloudiness');
let rainInfo = document.getElementById('rain');
let windSpeedyInfo = document.getElementById('wind-speedy');
let windDirectionInfo = document.getElementById('wind-direction');
let sunriseInfo = document.getElementById('sunrise');
let sunsetInfo = document.getElementById('sunset');
let conditionSlugInfo = document.getElementById('condition-slug');
let forecastInfo = document.getElementById('forecast');
let timeNowInfo = document.getElementById('time-now');

let time = new Date().getTime();


const weatherInformation = {
  temp: 18,
  date: '27/05/2023',
  time: '03:12',
  condition_code: '27',
  description: 'Tempo limpo',
  currently: 'noite',
  cid: '',
  city: 'São Paulo, SP',
  img_id: '27n',
  humidity: 81,
  cloudiness: 0,
  rain: 0,
  wind_speedy: '3.6 km/h',
  wind_direction: 60,
  sunrise: '06:38 am',
  sunset: '05:28 pm',
  condition_slug: 'clear_night',
  city_name: 'São Paulo',
  forecast: [
    {
      date: '27/05',
      weekday: 'Sáb',
      max: 26,
      min: 15,
      cloudiness: 38,
      rain: 0,
      rain_probability: 0,
      wind_speedy: '4.13 km/h',
      description: 'Parcialmente nublado',
      condition: 'cloud'
    },
    {
      date: '28/05',
      weekday: 'Dom',
      max: 23,
      min: 16,
      cloudiness: 28,
      rain: 8.76,
      rain_probability: 98,
      wind_speedy: '3.56 km/h',
      description: 'Chuva',
      condition: 'rain'
    },
    {
      date: '29/05',
      weekday: 'Seg',
      max: 17,
      min: 15,
      cloudiness: 100,
      rain: 2.13,
      rain_probability: 72,
      wind_speedy: '4.15 km/h',
      description: 'Chuvas esparsas',
      condition: 'rain'
    },
    {
      date: '30/05',
      weekday: 'Ter',
      max: 19,
      min: 15,
      cloudiness: 100,
      rain: 1.39,
      rain_probability: 66,
      wind_speedy: '3.95 km/h',
      description: 'Chuvas esparsas',
      condition: 'rain'
    },
    {
      date: '31/05',
      weekday: 'Qua',
      max: 19,
      min: 15,
      cloudiness: 100,
      rain: 12.52,
      rain_probability: 100,
      wind_speedy: '3.87 km/h',
      description: 'Chuva',
      condition: 'rain'
    },
    {
      date: '01/06',
      weekday: 'Qui',
      max: 18,
      min: 14,
      cloudiness: 99,
      rain: 0.87,
      rain_probability: 40,
      wind_speedy: '6.7 km/h',
      description: 'Chuvas esparsas',
      condition: 'rain'
    },
    {
      date: '02/06',
      weekday: 'Sex',
      max: 19,
      min: 14,
      cloudiness: 84,
      rain: 0.98,
      rain_probability: 36,
      wind_speedy: '3.5 km/h',
      description: 'Chuvas esparsas',
      condition: 'rain'
    },
    {
      date: '03/06',
      weekday: 'Sáb',
      max: 21,
      min: 11,
      cloudiness: 0,
      rain: 0,
      rain_probability: 0,
      wind_speedy: '2.33 km/h',
      description: 'Tempo limpo',
      condition: 'clear_day'
    },
    {
      date: '04/06',
      weekday: 'Dom',
      max: 20,
      min: 12,
      cloudiness: 0,
      rain: 0,
      rain_probability: 0,
      wind_speedy: '3.13 km/h',
      description: 'Tempo limpo',
      condition: 'clear_day'
    },
    {
      date: '05/06',
      weekday: 'Seg',
      max: 23,
      min: 11,
      cloudiness: 0,
      rain: 0,
      rain_probability: 0,
      wind_speedy: '1.66 km/h',
      description: 'Tempo limpo',
      condition: 'clear_day'
    }
  ],
  cref: 'e8eea3'
}


async function getApiInformations() {
  const response = await fetch(url);
  const data = await response.json();
  const weatherInformation = data.results;

  insertInHTML(weatherInformation);
}

function insertInHTML(weatherInformation) {
  temperatureInfo.innerHTML = weatherInformation.temp
  maxTemperatureInfo.innerHTML = weatherInformation.forecast[0].max + "°"
  minTemperatureInfo.innerHTML = weatherInformation.forecast[0].min + "°"
  // descriptionInfo.innerHTML = weatherInformation.description
  // currentlyInfo.innerHTML = weatherInformation.currently
  cityInfo.innerHTML = weatherInformation.city
  humidityInfo.innerHTML = weatherInformation.humidity + "%"
  // cloudinessInfo.innerHTML = weatherInformation.cloudiness
  rainInfo.innerHTML = weatherInformation.rain + "%"
  windSpeedyInfo.innerHTML = weatherInformation.wind_speedy
  // windDirectionInfo.innerHTML = weatherInformation.wind_direction
  sunriseInfo.innerHTML = weatherInformation.sunrise
  sunsetInfo.innerHTML = weatherInformation.sunset
  // conditionSlugInfo.innerHTML = weatherInformation.condition_slug
  // forecastInfo.innerHTML = weatherInformation.forecast
  timeNowInfo.innerHTML = time
}

// getApiInformations()
insertInHTML(weatherInformation)

let sunset = weatherInformation.sunset
let sunrise = weatherInformation.sunrise

function convertToTimestamp(timeString) {
  var time = timeString.split(' ')[0];
  var meridiem = timeString.split(' ')[1];

  var hours = parseInt(time.split(':')[0]);
  var minutes = parseInt(time.split(':')[1]);

  if (meridiem.toLowerCase() === 'pm' && hours !== 12) {
    hours += 12;
  } else if (meridiem.toLowerCase() === 'am' && hours === 12) {
    hours = 0;
  }

  var currentDate = new Date();
  var timestamp = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    hours,
    minutes
  ).getTime();
  return timestamp;
}

// Função para calcular a diferença em minutos entre dois horários
function calculateTimeDifference(timeString1, timeString2) {
  var timestamp1 = convertToTimestamp(timeString1);
  var timestamp2 = convertToTimestamp(timeString2);

  var differenceInMinutes = Math.abs(timestamp1 - timestamp2) / (1000 * 60);

  return differenceInMinutes;
}

function calculateTimeDifferenceNow(timestamp1, timeString2) {

  var timestamp2 = convertToTimestamp(timeString2)

  var differenceInMinutes = Math.abs(timestamp1 - timestamp2) / (1000 * 60);

  return 325;
}

function calculateSunPositionY(percentage) {
  console.log("🚀 ~ file: script.js:250 ~ calculateSunPositionY ~ percentage:", percentage)
  const minY = 72.5; // Ponto mínimo em pixels
  const maxY = 134; // Ponto máximo em pixels
  const range = maxY - minY; // Faixa total de variação
  // const positionY = minY + (percentage * maxY / 100); // Cálculo da posição Y
  const positionY = minY + (1 * range); // Cálculo da posição Y
  console.log("🚀 ~ file: script.js:256 ~ calculateSunPositionY ~ positionY:", positionY)
  return positionY;
}

let differenceTimeSun = calculateTimeDifference(sunrise, sunset)

let differenceTimeNowToSunset = calculateTimeDifferenceNow(time, sunrise)

let porcentageOfRange = (differenceTimeNowToSunset / differenceTimeSun) * 100


// Ajuste a porcentagem para garantir que esteja dentro do intervalo de 0 a 100
porcentageOfRange = Math.max(0, Math.min(100, porcentageOfRange));

let sunElement = document.querySelector('.sun');
let arcElement = document.querySelector('.arco');

// Calcula a posição horizontal em pixels com base na porcentagem
let positionX = (arcElement.offsetWidth * porcentageOfRange) / 100;

// Calcula a posição vertical em pixels com base na porcentagem
let positionY = ((arcElement.offsetHeight * (100 - porcentageOfRange)) / 100);
let positionY2 = ((arcElement.offsetHeight * (100 - porcentageOfRange)) / 100);


// Define a posição do sol no arco
sunElement.style.left = positionX + 'px';
sunElement.style.bottom = calculateSunPositionY(porcentageOfRange) + 'px';
