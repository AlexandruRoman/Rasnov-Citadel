using UnityEngine;
using System.Collections;

public class COLLIDERS : MonoBehaviour {

	public Collider[] colls;
	Animation anim;
	bool ok;

	void Start ()
	{
		ok = false;
	}
	

	void Update () 
	{
		anim = GetComponent<Animation>();
		foreach (AnimationState state in anim) 
		{
			if((state.name == "Toate" && state.normalizedTime>0) || state.normalizedTime == 0)
			{
				ok = true;

			}

			else
			{
				ok = false;
			}
		}

		foreach( Collider col in colls)
		{
			col.enabled = ok;
		}
	}
}
