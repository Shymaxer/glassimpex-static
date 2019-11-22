let link = document.getElementById("rew-choice");
let big_image = document.getElementById("reward-big");
let images = document.getElementsByClassName("img-rewards img-rewards--small");
let border = '2px solid #00A8FF';
let border_none = 'none';
let src = "src/images/certificates/rewards.svg";
AttachEvent(link, "click", EventHandler);

function AttachEvent(element, type, handler) {
	if (element.addEventListener) element.addEventListener(type, handler, false);
	else element.attachEvent("on" + type, handler);
}

function EventHandler(e) {
	for (let i = 0; i < images.length; i++) {
		images[i].style.border = border_none;
	}

	e.target.style.border = border;
	big_image.src = e.target.src;
}