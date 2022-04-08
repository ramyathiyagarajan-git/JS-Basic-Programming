function String() {
  var str = document.getElementById('string').value;

  var string = str.replace(/ /g, "");
  
  var answer8 = document.getElementById ('ans8');
  answer8.innerHTML = string.length ;
}