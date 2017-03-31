#pragma strict

function Start () {
	
	this.GetComponent.<Animation>()["Camera"].speed = 1.5;
	this.GetComponent.<Animation>().Play();
	yield WaitForSeconds(60);
	Application.LoadLevel("Restul");
	
}

