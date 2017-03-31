#pragma strict

var cam: GameObject;
var pc : GameObject;


function OnMouseDown()
{
		cam.GetComponent.<Animation>().Stop();
	    iTween.MoveTo(cam.gameObject,pc.transform.position,5);
        iTween.RotateTo(cam.gameObject,pc.transform.rotation.eulerAngles,5);
        yield WaitForSeconds(5);
        Application.LoadLevel("Meniu");
}
