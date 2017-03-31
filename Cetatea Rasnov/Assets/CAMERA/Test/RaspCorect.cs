using UnityEngine;
using System.Collections;

public class RaspCorect : MonoBehaviour {

	void Start()
	{
		PlayerPrefs.SetInt("SCOR", 0);
	}

	void OnMouseDown()
	{
		int a = PlayerPrefs.GetInt("SCOR");

		PlayerPrefs.SetInt("SCOR", a+1);
	}
}
