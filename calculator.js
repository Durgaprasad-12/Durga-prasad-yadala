function show(durga)
{
    document.getElementById("madhu").value += durga;
}
function clearall( )
{
    document.getElementById("madhu").value='';
}
function det()
{
    let currentValue=document.getElementById("madhu").value;
document.getElementById("madhu").value = currentValue.slice(0,-1);
}
function calculate()
{
    const madhu = document.getElementById ('madhu');
  try
  {madhu.value=eval(madhu.value);

 }catch (error){
    madhu.value='error';
 }
}
