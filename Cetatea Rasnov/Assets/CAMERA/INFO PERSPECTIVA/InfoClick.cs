using UnityEngine;
using System.Collections;

public class InfoClick : MonoBehaviour {

	public GameObject go;

	void OnMouseDown()
	{
		go.SetActive(true);
	}
}
