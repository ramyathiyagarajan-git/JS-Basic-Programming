function Factorial()
{
var num = document.getElementById('num').value 
var fact = 1;
for(let i=1; i<=num; i++)
{
  fact*=i;
}
var answer1 = document.getElementById ('ans1');
answer1.innerHTML = fact;

}