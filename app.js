//Auf den Knopfklick wird die Funktion ausgeführt
document.getElementById("druckansicht").addEventListener("click", function () {
  //Variablen deklarieren
  let data = document.querySelectorAll("input");
  let select = document.getElementById("pizzenauswahl").value;
  let date = document.getElementById("geburtsdatum").value;
  let wishtText = document.querySelector("textarea").value;

  let gender = data[5].checked ? "r Herr" : " Frau";

  let extraText = "";

  //Welche Extras wurden gewählt?
  if (data[7].checked && data[8].checked) {
    extraText += "mit extra Käse und extra Schinken";
  } else if (data[7].checked) {
    extraText += "mit extra Käse";
  } else if (data[8].checked) {
    extraText += "mit extra Schinken";
  } else {
    extraText += "ohne Extras";
  }

  //Wenn die Daten eingegeben wurden, wird der Text angepasst
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
    "<br></br>" +
    select +
    " " +
    extraText +
    " und Schärfe " +
    data[9].value +
    "<br></br>" +
    "Ihre Zusatzwünsche sind: <br></br> " +
    wishtText +
    "<br></br>" +
    "Vielen Dank für Ihre Bestellung!";

  //Anhand der Schärfe wird die Hintergrundfarbe geändert
  switch (data[9].value) {
    case "1":
      document.getElementById("colorChange").style.backgroundColor = "#3AF5FF";
      break;
    case "2":
      document.getElementById("colorChange").style.backgroundColor = "#4DFFAE";
      break;
    case "3":
      document.getElementById("colorChange").style.backgroundColor = "#F77DFF";
      break;
    case "4":
      document.getElementById("colorChange").style.backgroundColor = "#FF6D6D";
      break;
  }

  //Der Text wird in das HTML Element geschrieben
  document.getElementById("textWrapper").innerHTML = text;
  //Der Text wird sichtbar gemacht
  document.getElementById("colorChange").style.opacity = "1";
});

//Die Schärfe wird mit dem Slider verknüpft
document.getElementById("schaerfe").addEventListener("change", function () {
  document.getElementById("schaerfeslider").value =
    document.getElementById("schaerfe").value;
});

//Der Slider wird mit der Schärfe verknüpft
document
  .getElementById("schaerfeslider")
  .addEventListener("change", function () {
    document.getElementById("schaerfe").value =
      document.getElementById("schaerfeslider").value;
  });
