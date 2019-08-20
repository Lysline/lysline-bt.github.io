<script>
var buttonstate=1;
function onoff(element)
{
  buttonstate= buttonstate - 1;
  var blabel;
  if(buttonstate)
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
