// not used now but interesting way to sync animations
	// let page: Element;
	// $effect(() => {
	// 	// not yet mounted
	// 	if (!page) return;
	// 	queueMicrotask(() => {
	// 		syncAnims({
	// 			animName: "hue-anim",
	// 			fromElementName: "#page-section",
	// 			toElementName: "#layout-div",
	// 		});
	// 	});
	// });

type SyncAnimsType = {
	fromElementName: string;
	toElementName: string;
	animName: string;
};
// simple helper to find an Animation by animationName
function findAnimByName(elem: Element, name: string): CSSAnimation | undefined {
	// get all the active animations on this element
	const anims = elem.getAnimations() as CSSAnimation[];
	// return the first one with the expected animationName

	return anims.find((anim) => anim.animationName === name);
}

export function syncAnims({ fromElementName, toElementName, animName }: SyncAnimsType) {
	// credit: https://stackoverflow.com/a/69612018

	try {
		document.querySelector(fromElementName)!.addEventListener("animationstart", (evt) => {
			// double check it the animation we wanted
			if ((<AnimationEvent>evt).animationName === animName) {
				// retrieve both Animation objects
				const myAnim = findAnimByName(evt.target as Element, animName);
				const otherAnim = findAnimByName(document.querySelector(toElementName)!, animName);
				// update mine to act as if it started
				// at the same time as the first one
				if (myAnim && otherAnim) {
					myAnim.startTime = otherAnim.startTime;
				}
			}
		});
	} catch (error) {
		console.error(`Element ${fromElementName} not found. (syncAnims)`);
	}
}
