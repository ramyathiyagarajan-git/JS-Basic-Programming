function Palindrome() {
  var number = Number(document.getElementById("int").value);
  
  var count = 0;
  
		for(var i=1; i<=number; i++)
    {
     var rem, temp, final = 0;
     temp = i;
     while(temp>0)
		 {
			rem = temp % 10;
			temp = parseInt(temp/10);
			final = final*10+rem;
		 }
     if(final == i)
		 {
      count+=1;
       
		 }
      
    }
		
  var answer12 = document.getElementById ('ans12');
  answer12.innerHTML = count;
  
}