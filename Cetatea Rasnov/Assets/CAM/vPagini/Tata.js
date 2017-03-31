#pragma strict

var pag: GameObject;

function OnMouseDown()
{
	this.GetComponent.<Animation>()["Pagina d-s"].speed = 1;
	this.GetComponent.<Animation>().Play("Pagina d-s");
	yield WaitForSeconds(this.GetComponent.<Animation>()["Pagina d-s"].length + 0.1);
	this.transform.position = pag.transform.position + Vector3(0,0.001,0);
}