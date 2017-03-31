#pragma strict


var scris : GameObject;

function Start () {
	
	iTween.FadeTo(scris,0,.5);
	
}

function OnMouseEnter()
{
	iTween.FadeTo(scris,1,.5);

}

function OnMouseExit()
{
	iTween.FadeTo(scris,0,.5);

}

