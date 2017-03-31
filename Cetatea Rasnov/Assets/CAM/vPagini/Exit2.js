#pragma strict

var inc : GameObject;
var cam : GameObject;
var carte : GameObject;
function OnMouseDown()
{
        iTween.MoveTo(cam.gameObject,inc.transform.position,5);
        iTween.RotateTo(cam.gameObject,inc.transform.rotation.eulerAngles,5);
        yield WaitForSeconds(5);
        cam.GetComponent.<Animation>().Play();


}

function OnMouseEnter()
{
	    if(Vector3.Distance(cam.transform.position,this.transform.position) > 7)
	    {
	    cam.GetComponent.<Animation>().Stop();
        iTween.MoveTo(cam.gameObject,carte.transform.position,5);
        iTween.RotateTo(cam.gameObject,carte.transform.rotation.eulerAngles,5);
		}
		
}