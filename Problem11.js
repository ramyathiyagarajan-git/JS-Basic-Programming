
function Occurence(){
  
  var num = document.getElementById("elements").value;
  var arr1 = num.toString().split('');
  console.log(arr1);
  arr1.sort();
  var count = 1;
  var obj = [];
  for (var i=0; i < arr1.length; i++)
  {
    if(arr1[i] == arr1[i+1])
    {
      count+=1;
    }
    else{
      var ele = [];
      ele.push(arr1[i]);
      ele.push(count);
      obj.push(ele)
      count=1;
    }
  }
  obj.sort((a,b) => a[1] - b[1]);
  console.log(obj); 
  var final = [];
  for (var i = obj.length-1; i>=0 ; i--) {
    final.push(obj[i][0]);
  }
 
  var answer11 = document.getElementById ('ans11');
  answer11.innerHTML = final;
  
}
