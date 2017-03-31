using UnityEngine;
using System.Collections;

[RequireComponent(typeof(AudioSource))]
public class Sunet: MonoBehaviour {
	
    public AudioClip clip;
	public GUITexture Mesaj;
	public GUITexture Yes;
    void OnTriggerEnter() {
		
		
        AudioSource.PlayClipAtPoint(clip, Camera.main.transform.position);
		
		Mesaj.enabled = true;
		Yes.enabled = true;
		
    }
	
	
	void OnTriggerExit() {
		
		
		Mesaj.enabled = false;
		Yes.enabled = false;
		
    }
	
	
}