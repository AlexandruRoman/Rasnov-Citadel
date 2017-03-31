using UnityEngine;
using System.Collections;

public class TimpSat : MonoBehaviour {

	public float Total = 0, Min = 0, Ore = 12;
	private TextMesh Timpc;
	public GameObject Soare;
	public GameObject Foc;
	public int Viteza = 20;
	
	public Material Sky1;
	public Material Sky2;
	public Material Sky3;
	public Material Sky4;
	
	void Awake()
		
	{
		RenderSettings.skybox = Sky1;
		Foc.SetActive (false);
		
	}
	
	
	
	void FixedUpdate ()
	
	{
		
	Total = Total + Viteza * Time.deltaTime / 60 *100;
	Min = Min + Viteza * Time.deltaTime / 60 * 15;
	Ore = Ore + Viteza * Time.deltaTime / 3600 * 15;
		if(Min >= 60) Min=0;
		if(Ore >= 24) Ore=0;
		

			
		//Skybox
		if((int)Ore==5)		{RenderSettings.skybox = Sky4;Soare.GetComponent<Light>().intensity = 0.5f;Foc.SetActive (false);}
		if((int)Ore==7)		RenderSettings.skybox = Sky1;
		if((int)Ore==16)	RenderSettings.skybox = Sky2;
		if((int)Ore==18)	{RenderSettings.skybox = Sky3;Soare.GetComponent<Light>().intensity = 0.01f;Foc.SetActive (true);}
		
		
	
		Soare.transform.Rotate(Vector3.left * Time.deltaTime * Viteza / 240 * 15);
		
		
	}
	
	
	
	
	
	
}
