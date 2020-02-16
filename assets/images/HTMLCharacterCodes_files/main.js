var main, clickable;

function init(){

	console.log("INIT")

	//SET ELEMENT VARIABLES FOR ACCESS (NOT ALWAYS NEEDED FOR SIMPLE EXECUTIONS WHEN USING TweenMax)

	main = document.getElementById("viewport");
	clickable = document.getElementById("clickable");

	console.log(main);

  	trackClips();

	eventListeners();

}

function trackClips(){

	// SET ELEMENT INITIAL PROPERTY VALUES HERE

	TweenMax.set([border, background, cta1, cta2, ctaArrow], {autoAlpha:1})

	frameOne();

}

function eventListeners(){

	console.log("Setting Buttons");

	clickable.style.cursor = "pointer"
	//clickable.addEventListener("click", mainExit, false);
	clickable.addEventListener("mouseover", bannerOver, false);
	clickable.addEventListener("mouseout", bannerOut, false);

}

function frameOne(){
	var d = 1;

	TweenMax.to([text1], 0.2, {autoAlpha: 1})

	TweenMax.delayedCall(d, frameTwo);
}

function frameTwo(){
	var d = 1.5;

	TweenMax.to([text2], 0.2, {autoAlpha: 1});

	TweenMax.delayedCall(d, frameThree);
}

function frameThree(){
	var d = 3.5;

	TweenMax.set([text1], {autoAlpha: 0});
	TweenMax.set([text2], {autoAlpha: 0});

	TweenMax.to([text3], 0.2, {autoAlpha: 1});
	TweenMax.to([bolt1], 0.2, {autoAlpha: 1, ease:RoughEase.ease.config({strength: 1.5, points:20, template:Linear.easeNone, randomize:false}), yoyo: true, repeat: 2, delay: 0.3});
	TweenLite.fromTo(bolt1, 0.2, {x:-1, y: -1}, {x:1, y: 1, ease:RoughEase.ease.config({strength:4, points:20, template:Linear.easeNone, randomize:false}), yoyo: true, repeat: 4, clearProps:"x", delay: 0.3})

	TweenMax.delayedCall(d, frameFour);
}

function frameFour(){

	TweenMax.set([text3], {autoAlpha: 0});
	TweenMax.set([bolt1], {autoAlpha: 0});

	TweenMax.to([text4], 0.2, {autoAlpha: 1});
	TweenMax.to([bolt2], 0.1, {autoAlpha: 1, ease:RoughEase.ease.config({strength: 1.5, points:20, template:Linear.easeNone, randomize:false}), yoyo: true, repeat: 6});
	TweenLite.fromTo(bolt2, 0.5, {x:-1, y: -1}, {x:1, y: 1, ease:RoughEase.ease.config({strength:4, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x", delay: 0.5})
	TweenMax.set([product1], {autoAlpha: 1})

	TweenMax.to([ctaArrow], 0.5, {autoAlpha: 1, delay: 1.2, onComplete: bannerOver})

}

function bannerOver(e) {
	TweenMax.to(ctaArrow, 0.4, { x: 4, yoyo: true, repeat: 5 })
	TweenLite.fromTo(bolt2, 0.5, {x:-1, y: -1}, {x:1, y: 1, ease:RoughEase.ease.config({strength:1.5, points:20, template:Linear.easeNone, randomize:false}) , clearProps:"x"})
}

function bannerOut(e) {
	TweenMax.to(ctaArrow, 0.4, { x: 0 })
}

