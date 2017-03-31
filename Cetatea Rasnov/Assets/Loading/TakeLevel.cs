using UnityEngine;
using System.Collections;

public class TakeLevel : MonoBehaviour {

private Confirm Lvs;
public GameObject Cub;
public MovieTexture Film;

	void Start () {
	
		Cub = GameObject.Find("Cub");
		Film.Play();
		Lvs = Cub.GetComponent<Confirm>();
	}
	

	void Update () {
		
	if(!Film.isPlaying) Application.LoadLevel(Lvs.Level);
		
		
	}
}
