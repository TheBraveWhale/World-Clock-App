let selectedCityTimezone = null;
let selectedCityElement = null;

function updateParis() {
  let parisElement = document.querySelector("#paris");
  let parisDate = parisElement.querySelector(".date");
  let parisTime = parisElement.querySelector(".time");
  let parisCurrentTime = moment().tz("Europe/Paris");

  parisDate.innerHTML = parisCurrentTime.format("MMMM Do YYYY");
  parisTime.innerHTML = parisCurrentTime.format(
    "hh:mm:ss [<small>]A[</small>]",
  );
}

function updateTokyo() {
  let tokyoElement = document.querySelector("#tokyo");
  let tokyoDate = tokyoElement.querySelector(".date");
  let tokyoTime = tokyoElement.querySelector(".time");
  let tokyoCurrentTime = moment().tz("Asia/Tokyo");

  tokyoDate.innerHTML = tokyoCurrentTime.format("MMMM Do YYYY");
  tokyoTime.innerHTML = tokyoCurrentTime.format(
    "hh:mm:ss [<small>]A[</small>]",
  );
}

function updateBrisbane() {
  let brisbaneElement = document.querySelector("#brisbane");
  let brisbaneDate = brisbaneElement.querySelector(".date");
  let brisbaneTime = brisbaneElement.querySelector(".time");
  let brisbaneCurrentTime = moment().tz("Australia/Brisbane");

  brisbaneDate.innerHTML = brisbaneCurrentTime.format("MMMM Do YYYY");
  brisbaneTime.innerHTML = brisbaneCurrentTime.format(
    "hh:mm:ss [<small>]A[</small>]",
  );
}

function updateSelectedCity() {
  if (selectedCityTimezone === null || selectedCityElement === null) {
    return;
  }
  let currentTime = moment().tz(selectedCityTimezone);

  selectedCityElement.querySelector(".date").innerHTML =
    currentTime.format("MMMM Do YYYY");
  selectedCityElement.querySelector(".time").innerHTML = currentTime.format(
    "hh:mm:ss [<small>]A[</small>]",
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === null) return;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesBlock = document.querySelector("#cities");

  citiesBlock.innerHTML = `<div id="cities">
        <div class="block" id="${cityName.replace(" ", "")}">
          <div class="left">
            <div class="${cityName.replace(" ", "")} city">${cityName}</div>
            <div class="date">${cityTime.format("MMMM do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("hh:mm:ss")}<small>${cityTime.format("A")}</small></div>
        </div>`;

  selectedCityTimezone = cityTimeZone;
  selectedCityElement = citiesBlock.querySelector(".block");

  updateSelectedCity();
}

updateBrisbane();
updateParis();
updateTokyo();

setInterval(updateBrisbane, 1000);
setInterval(updateParis, 1000);
setInterval(updateTokyo, 1000);

let citiesSelect = document.querySelector("#countries");
citiesSelect.addEventListener("change", updateCity);

setInterval(updateSelectedCity, 1000);
