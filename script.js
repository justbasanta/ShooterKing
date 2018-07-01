var $body = document.getElementsByTagName("body")[0];
var speed = 0;
var counter = 0;

var $homescreen = document.getElementById('homescreen-wrapper');
var $background = document.getElementById('background');
var $button = document.getElementById('fly-button');

$button.onclick = function(){
	console.log('clicked');
	var pos = 0;
	$homescreen.style.display = 'none';
	$background.style.backgroundImage = 'url("./images/clouds.jpg")';
	this.style.display = 'none';

	setInterval (function(){
		if (pos == 600) {
			pos = 0;
		}
		else{
			pos++;
			$background.style.backgroundPosition = "0px" + " " + pos +"px";	
		}
	},15)
}