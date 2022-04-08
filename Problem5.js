function CeltoFAh() {
  var Temp = parseInt(document.getElementById('temp').value);
  var Fah  = (Temp * 9/5 ) +32
  var answer5 = document.getElementById ('ans5');
  answer5.innerHTML = Fah + "°F";
}
