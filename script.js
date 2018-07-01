var $body = document.getElementsByTagName("body")[0];
var speed = 0;
var speed_dy = 1;
var counter = 0;
var game_status = true;
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

function HeroCar(){
	this.$car = document.getElementById('car');
	this.carY = 0;
	this.carX = 0;
	var self = this;

	this.resetCarPosition = function(){
		self.carY = 500;
		self.carX = 150;
		self.$car.style.top = self.carY + 'px';
		self.$car.style.left = self.carX + 'px';
	}
	this.updateCarPostion = function(e){
	var value = 0;
			if(e==1 && self.carX<260)
				{
					value=110;
				}
			else if (e==-1 && self.carX>140)
				{
					value=-110;
				}
			else
				{
					value=0;
				}
			
			self.carX = self.carX + value;
			self.$car.style.left = self.carX + 'px';
	}
}
var car = new HeroCar();


function keydownEventHandler(e)
	{
		console.log(e.keyCode);
		if(game_status)
			{
				if(e.keyCode == 37)
				{
					//left
					car.updateCarPostion(-1);
				}
				
				if(e.keyCode == 39)
				{
					//right
					car.updateCarPostion(+1);
				}
				
				
				// if(e.keyCode == 32)
				// {
				// 	//left
				// 	if(bullet_counter >= 9)
				// 	{
				// 	var e = new Bullet();
				// 	(bullets).push(e);
				// 	e.createBullet();
				// 	bullet_counter =0;
				// 	}
				// }
				
				// if(e.keyCode == 27)
				// {
				// 	gameOver();
				// 	resetGame();
				// 	var homescreen = document.getElementById("homescreen");
				// 	homescreen.style.display="block";
				// }
			}
			else
			{
				if(e.keyCode == 27)
				{
					var homescreen = document.getElementById("homescreen");
					homescreen.style.display="block";
				}
			}
	}

function keyupEventHandler(e)
	{

	}


	document.onkeydown = keydownEventHandler;
	document.onkeyup = keyupEventHandler;






/*OBJECTS*/
var hero = new HeroCar();
hero.updateCarPostion();
car.resetCarPosition();