
function Sort(){
  
  var n = document.getElementById("element").value;
  
  var arr = n.toString().split('');

  arr.shift(0);
  
  console.log(arr);

  var even =[];
  
  for(var i=0; i < arr.length; i+=2)
  {
    even.push(arr[i]);
  }

  even.sort();

  var j=0;
  for(var i=0; i < arr.length; i+=2){
    arr[i] = even[j];
    j+=1;
  }
     
  var answer10 = document.getElementById ('ans10');
  answer10.innerHTML = arr;
}
