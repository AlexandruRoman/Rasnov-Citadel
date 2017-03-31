

var Level : String;
var FPC : GameObject;
var MiniMap : GameObject;
var Cam : GameObject;
var Film : MovieTexture;
function OnMouseDown()

{
Cam.active = true;
MiniMap.active = false;
FPC.active = false;

Film.Play();
yield WaitForSeconds(20.0);
Application.LoadLevel(Level);



}