using UnityEngine;
using System.Collections;

public class AlegeNivel : MonoBehaviour {

	public string nivel;



	void OnMouseDown()
	{
		Application.LoadLevel(nivel);
	}
}
