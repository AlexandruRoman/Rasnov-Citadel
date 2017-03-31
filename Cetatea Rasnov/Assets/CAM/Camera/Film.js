#pragma strict

function Start () {

	PlayAnim();
}

var framesPerSecond = 10.0;
var myTextures : Texture2D[];
 
function PlayAnim () {
	var i = 0;
    var waitTime = 1.0/framesPerSecond;
    for (i = 0; i < myTextures.Length; i++) {
        GetComponent.<GUITexture>().texture = myTextures[i];
        yield WaitForSeconds(waitTime);
    }
    GetComponent.<GUITexture>().enabled = false;
}