using UnityEngine;
using System.Collections;

public class MiscareCamera : MonoBehaviour {

	private int Viteza = 60;
	

	void Update () {
		
	if (Input.GetKey (KeyCode.UpArrow) || Input.GetKey (KeyCode.W))     transform.Translate(new Vector3(0,1,0) * Viteza * Time.deltaTime);
	if (Input.GetKey (KeyCode.DownArrow) || Input.GetKey (KeyCode.S))  transform.Translate(new Vector3(0,-1,0) * Viteza * Time.deltaTime);
	if (Input.GetKey (KeyCode.LeftArrow) || Input.GetKey (KeyCode.A))  transform.Translate(new Vector3(-1,0,0) * Viteza * Time.deltaTime);
	if (Input.GetKey (KeyCode.RightArrow) || Input.GetKey (KeyCode.D)) transform.Translate(new Vector3(1,0,0) * Viteza * Time.deltaTime);
		
	}
}
