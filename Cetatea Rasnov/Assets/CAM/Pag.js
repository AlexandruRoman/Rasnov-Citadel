#pragma strict

var ceva: Transform;

function Start () {
	GetComponent.<Rigidbody>().centerOfMass = ceva.localPosition;
	iTween.RotateTo(this.gameObject,Vector3(90,0,0),2);
}
