#pragma strict



var nr = 0;
var gam : GameObject[];

function Update () {


	if(Input.GetMouseButtonDown(0))
	{
		nr++;
		
		if(nr==1) iTween.FadeTo(gam[0],0,1);
		if(nr==2) iTween.FadeTo(gam[1],0,1);
		if(nr==3) iTween.FadeTo(gam[2],0,1);
		if(nr==4) iTween.FadeTo(gam[3],0,1);
		if(nr==5) iTween.FadeTo(gam[4],0,1);
		if(nr==6) iTween.FadeTo(gam[5],0,1);
		if(nr==7) iTween.FadeTo(gam[6],0,1);
		if(nr==8) iTween.FadeTo(gam[7],0,1);
		if(nr==9) iTween.FadeTo(gam[8],0,1);
		if(nr==10) Application.LoadLevel("Laptop");
	
	
	
	
	
	
	
	
	
	
	
	
	}
	
	
}