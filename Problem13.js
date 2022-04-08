function FindSeries(){
  var Nth = parseInt(document.getElementById('N').value);
  var init = 0;
  
  for(var i = 1; i <= Nth; i++){
    init = init + (2*i);
  }
  
  var answer13 = document.getElementById ('ans13');
  answer13.innerHTML = init;
}