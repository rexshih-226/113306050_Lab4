var sounds = {
	'w': 'sounds/crash.mp3',
	'a': 'sounds/kick-bass.mp3',
	's': 'sounds/snare.mp3',
	'd': 'sounds/tom-1.mp3',
	'j': 'sounds/tom-2.mp3',
	'k': 'sounds/tom-3.mp3',
	'l': 'sounds/tom-4.mp3'};

function start(){
	var buttons = document.getElementsByClassName("drum");
	for(var i = 0; i < buttons.length; i++){
		buttons[i].addEventListener("click", sound);
	}
}

function sound(){
	var key = this.innerHTML.toLowerCase();
	play(key);
	buttonCSS(key);
}

document.addEventListener("keydown", keyboard);

function keyboard(event){
	var key = event.key.toLowerCase();
	if(sounds[key]){
		play(key);
		buttonCSS(key);
	}
}

function play(key){
	var audio = new Audio(sounds[key]); 
	audio.play();
}

function buttonCSS(key){
	var activeButton = document.querySelector("." + key);
	activeButton.classList.add("pressed");
	setTimeout(function(){activeButton.classList.remove("pressed");}, 100);
}

window.addEventListener("load", start);