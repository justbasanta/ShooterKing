var $body = document.getElementsByTagName("body")[0];
var speed = 0;
var counter = 0;

var $homescreen = document.getElementById('homescreen-wrapper');
var $background = document.getElementById('background');
var $button = document.getElementById('fly-button');

$button.onclick = function(){
	console.log('clicked');
	$homescreen.style.display = 'none';
	$background.style.backgroundImage = 'url("./images/clouds.jpg")';
	this.style.display = 'none';

}