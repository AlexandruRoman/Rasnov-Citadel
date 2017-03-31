#pragma strict

var pag: GameObject;
var tata: GameObject;
function OnMouseDown()
{
	tata.GetComponent.<Animation>()["Pagina d-s"].time = tata.GetComponent.<Animation>()["Pagina d-s"].length;
	tata.GetComponent.<Animation>()["Pagina d-s"].speed = -1;
	tata.GetComponent.<Animation>().Play("Pagina d-s");
	yield WaitForSeconds(tata.GetComponent.<Animation>()["Pagina d-s"].length + 0.1);
	tata.transform.position = pag.transform.position + Vector3(0,0.001,0);
}