using UnityEngine;
using System.Collections;

public class RotireCheck : MonoBehaviour {



	void Update () 
	{
	
		transform.Rotate(new Vector3(0,1,0) * Time.deltaTime * 30);
		
		
	}
	
	
	
}
