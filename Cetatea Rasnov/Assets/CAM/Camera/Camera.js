#pragma strict

var carte : GameObject;
var inc : GameObject;

function Start () {

        this.GetComponent.<Animation>().Stop();
        iTween.MoveTo(this.gameObject,carte.transform.position,.1);
        iTween.RotateTo(this.gameObject,carte.transform.rotation.eulerAngles,.1);
        
        
        yield WaitForSeconds(100);
        iTween.MoveTo(this.gameObject,inc.transform.position,5);
        iTween.RotateTo(this.gameObject,inc.transform.rotation.eulerAngles,5);
        yield WaitForSeconds(5);
        this.GetComponent.<Animation>().Play();
        
        
        
        
}

function Update () {

}