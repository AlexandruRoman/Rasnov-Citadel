using UnityEngine;
using System.Collections;

public class Scor : MonoBehaviour {

	TextMesh text;

	void Start()
	{
		text = gameObject.GetComponent<TextMesh>();
	}

	void Update()
	{
		int a = PlayerPrefs.GetInt("SCOR");
		text.text = a + "/7";
	}
}
