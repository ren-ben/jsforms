document.getElementById("druckansicht").addEventListener("click", function () {
  let data = document.querySelectorAll("input");
  let select = document.getElementById("pizzenauswahl").value;
  let checkbox = document.getElementById("extras").checked;
  let date = document.getElementById("geburtsdatum").value;

  let gender = data[4].checked ? "r Herr" : " Frau";

  let text =
    "Sehr geehrte" +
    gender +
    " " +
    data[0].value +
    " " +
    data[1].value +
    " " +
    data[2].value +
    " " +
    data[3].value +
    " " +
    select +
    " " +
    checkbox +
    " " +
    date +
    "";

  document.getElementById("lelele").innerHTML = text;
});
