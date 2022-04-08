function Series(){
  var series = parseInt(document.getElementById('series').value);
  var Series;
  if (series > 0) {
    
  Series= (series*series);
    
  } 
  else {
    
  Series= "Error";
    
  }
  
  
  var answer7 = document.getElementById ('ans7');
  answer7.innerHTML = Series ;
}