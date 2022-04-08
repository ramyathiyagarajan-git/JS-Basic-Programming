function Cube() {
  var num = document.getElementById('cube').value;
  var cube = num*num*num;
  var answer2 = document.getElementById ('ans2');
  answer2.innerHTML = cube;
}