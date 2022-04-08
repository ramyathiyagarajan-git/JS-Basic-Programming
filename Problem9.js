function Roots(){
  var a = parseInt(document.getElementById('A').value);
  var b = parseInt(document.getElementById('B').value);
  var c = parseInt(document.getElementById('C').value);

  let discriminant = b * b - 4 * a * c;
  
  if (discriminant > 0)
  {
    root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
    root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
  
  }
  else if (discriminant == 0) 
  {
    root1 = root2 = -b / (2 * a);
  
  }
  else {
    alert("Roots are Imaginary (Problem9)")
  }
  
  var answer9 = document.getElementById ('ans9');
  answer9.innerHTML ="(" + (root1).toFixed(2) + "," + (root2).toFixed(2) + ")" ;
}