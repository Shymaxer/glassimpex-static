let link = document.getElementById("rew-choice");
let big_image = document.getElementById("reward-big");
let images = document.getElementsByClassName("img-rewards img-rewards--small");
let border = '2px solid #00A8FF';
let border_none = 'none';
let src = "src/images/certificates/rewards.svg";
AttachEvent(images, "click", EventHandler);

function AttachEvent(element, type, handler) {
	for (let i = 0; i < element.length; i++) {
		if (element[i].addEventListener) element[i].addEventListener(type, handler, false);
		else element[i].attachEvent("on" + type, handler);
	}

}

function EventHandler(e) {
	for (let i = 0; i < images.length; i++) {
		images[i].style.border = border_none;
	}

	e.target.style.border = border;
	big_image.src = e.target.src;
}