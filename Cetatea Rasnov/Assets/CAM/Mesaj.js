#pragma strict

var ex : GameObject;

function Start()
{
	iTween.FadeTo(ex,0,0.01);
    yield WaitForSeconds(20);
    iTween.FadeTo(this.gameObject,0,2);
    yield WaitForSeconds(2);
    this.gameObject.active = false;
    iTween.FadeTo(ex,1,2);
}

function OnMouseDown()
{
	iTween.FadeTo(this.gameObject,0,2);
	yield WaitForSeconds(2);
    iTween.FadeTo(ex,1,2);
	this.gameObject.active = false;

}