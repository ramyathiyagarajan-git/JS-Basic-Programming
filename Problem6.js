function Sum() {
  var sum = parseInt(document.getElementById('sum').value);
  var Sum = 0;
  for (var i=1;i<=sum;i++){
    Sum+=i;
  }
  
  var answer6 = document.getElementById ('ans6');
  answer6.innerHTML = Sum ;
  
}
