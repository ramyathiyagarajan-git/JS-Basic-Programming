function getDays()
{
  var month = parseInt(document.getElementById('day').value);
  console.log(month);
  
  switch(month) {
  case 01:
    var days = "31 days" ;
    console.log("days")
    break;
  case 02:
    var days = "28 days" ;
    break;
  case 03:
    var days = "31 days" ;
    break;
  case 04:
    var days = "30 days" ;
    break;
  case 05:
    var days = "31 days" ;
    break;
  case 06:
    var days= "30 days" ;
    break; 
  case 07:
    var days = "31 days" ;
    break; 
  case 08:
    var days = "31 days" ;
    break; 
  case 09:
    var days = "30 days" ;
    break;
  case 10:
    var days = "31 days" ;
    break;
  case 11:
    var days = "30 days" ;
    break; 
  case 12:
    var days= "31 days" ;
    break;    
  default:
    var days = "Error" ;
}

  var answer4 = document.getElementById ('ans4');
  answer4.innerHTML = days;
  
}

