function Area() {
  var a = document.getElementById('a').value;
  console.log(a);
  var area = (1.73*a*a)/4
  var answer3 = document.getElementById ('ans3');
  answer3.innerHTML = area.toFixed(2);
}