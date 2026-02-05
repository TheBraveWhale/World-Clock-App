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

updateBrisbane();
updateParis();
updateTokyo();

setInterval(updateBrisbane, 1000);
setInterval(updateParis, 1000);
setInterval(updateTokyo, 1000);
