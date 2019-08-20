<script>
var buttonstate2=1;
function onoff2(element)
{
  buttonstate2= buttonstate2 - 1;
  var blabel;
  if(buttonstate2)
  {
    blabel="on";
  }
  else
  {
    blabel="off";
  }
  var child=element.firstChild;
  child.innerHTML=blabel;
}
</script>
