function Rotate(){
  var N1 = parseInt(document.getElementById('N1').value);
  var k = parseInt(document.getElementById('k').value);

  var array = N1.toString().split('');

  console.log(array);

  for (var i = k ; i < array.length; i++){
    var del = array.pop();
    array.unshift(del);
    
  }

  var answer14 = document.getElementById ('ans14');
  answer14.innerHTML = array;
  
}