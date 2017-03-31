#pragma strict

var nr=0;
var tablou: Transform;
var cam : GameObject;
var inv : Transform;

function OnMouseDown()
{
	nr++;
	if(nr%2==1)
	{
		cam.GetComponent.<Animation>().Stop();
	    iTween.MoveTo(cam.gameObject,tablou.position,5);
        iTween.RotateTo(cam.gameObject,tablou.rotation.eulerAngles,5);
	}
	
	if(nr%2==0)
	{
	    iTween.MoveTo(cam.gameObject,inv.position,5);
        iTween.RotateTo(cam.gameObject,inv.eulerAngles,5);
        yield WaitForSeconds(5);
        cam.GetComponent.<Animation>().Play();
	}
	

}
