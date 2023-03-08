document.getElementById("druckansicht").addEventListener("click", function () {
  let data = document.querySelectorAll("input");
  let select = document.getElementById("pizzenauswahl").value;
  let checkbox = document.getElementById("extras").checked;
  let date = document.getElementById("geburtsdatum").value;

  let gender = data[5].checked ? "r Herr" : " Frau";

  let text =
    "Sehr geehrte" +
    gender +
    " " +
    data[0].value +
    " " +
    data[1].value +
    "<br></br>" +
    "geboren am " +
    date +
    "<br></br>" +
    data[2].value +
    ", " +
    data[3].value +
    "<br></br>" +
    "Sie haben folgende Pizza bestellt: " +
    select +
    "<br></br>";

  document.getElementById("lelele").innerHTML = text;
});

document.getElementById("schaerfe").addEventListener("change", function () {
  document.getElementById("schaerfeslider").value =
    document.getElementById("schaerfe").value;
});

document
  .getElementById("schaerfeslider")
  .addEventListener("change", function () {
    document.getElementById("schaerfe").value =
      document.getElementById("schaerfeslider").value;
  });
