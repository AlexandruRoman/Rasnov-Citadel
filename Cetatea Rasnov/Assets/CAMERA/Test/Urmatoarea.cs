using UnityEngine;
using System.Collections;

public class Urmatoarea : MonoBehaviour {

	public SpriteRenderer asta, urm;
	public float t;


	IEnumerator OnMouseDown()
	{



		for(float f = 1; f >= 0; f-=t)
		{
			Color c = Color.white;
			c.a = f;
			asta.color = c;
			yield return new WaitForSeconds(0.01f);
		}

		Color d = Color.white;
		d.a = 0;
		asta.color = d;
		asta.transform.position = new Vector3(100,100,100);




		yield return new WaitForSeconds(0.5f);





		urm.transform.position = new Vector3(0,-0.74f,0);

		for(float f = 0; f <= 1; f+=t)
		{
			Color c = Color.white;
			c.a = f;
			urm.color = c;
			yield return new WaitForSeconds(0.01f);
		}

		d.a = 1;
		urm.color = d;


	}
}
