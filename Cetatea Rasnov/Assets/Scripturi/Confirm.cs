using UnityEngine;
using System.Collections;

public class Confirm : MonoBehaviour {
	public string Level;

	void OnMouseDown()
	{
	Application.LoadLevel(Level);	
		
	}
}