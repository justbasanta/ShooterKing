var $body = document.getElementsByTagName("body")[0];
var speed = 0;
var speed_dy = 1;
var counter = 0;
var bullet_count=0;
var bullets = [];
var game_status = true;

var $main = document.getElementById('main');
var $homescreen = document.getElementById('homescreen-wrapper');
var $background = document.getElementById('background');
var $button = document.getElementById('fly-button');

var frame = new Frame();

$button.onclick = function(){
	console.log('clicked');
	var pos = 0;
	$homescreen.style.display = 'block';
	$background.style.display = 'block';
	this.style.display = 'none';
	main();
}
function main(){
	console.log('main started');
	resetGame();
	setInterval(MainGameLoop,15);
}

function MainGameLoop(){
	// console.log('MainGameLoop Entered');
	updateBullets();
	frame.updateBackgroundPostion();

	counter++;
	// bullet_count++;
}

function Frame(){
	this.backgroundY = 0;
	this.background_dY = 0;

	var self = this;

	this.updateBackgroundPostion = function(){
		self.background_dY = speed_dy;
		$background.style.backgroundPosition = "0px " + self.backgroundY+ "px";
		self.backgroundY = self.backgroundY + self.background_dY;
	}
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


function enemy(){
	this.x = 0;
	this.y = -100;
	this.dy = 0;
	this.health = 500;
	var self = this;
	var $new_enemy = document.createElement('div');
	this.createEnemy = function(){
		self.$new_enemy.className = 'enemy';
		self.$new_enemy.style.left = self.x + 'px';
		self.$new_enemy.style.top = self.y + 'px';
		$background.appendChild(self.$new_enemy);
	}
	this.updateEnemey = function(){
		self.dy = speed_dy;
		self.y = self.y + self.dy;
		self.$new_enemy.style.top = self.y+'px';
	}
	this.deleteEnemy = function(){
		$background.removeChild(self.$new_enemy);
	}
}

function Bullet(){
	this.bulletX = 0;
	this.bulletY = 0;
	this.dy = 10;

	var self = this;
	var $new_bullet = document.createElement('div');

	this.createBullet = function(){
		// console.log($new_bullet);
		$new_bullet.className = 'bullet';
		self.bulletX = car.carX + 45;
		self.bulletY = car.carY;
		$new_bullet.style.left = self.bulletX + 'px';
		$new_bullet.style.top = self.bulletY + 'px';
		$main.appendChild($new_bullet);
	}
	this.updateBullet = function(){
		var t = self.bulletY - self.dy;
		self.bulletY = t;
		self.$new_bullet.style.top = self.bulletY+"px";
	}
	this.deleteBullet = function(){
		$main.removeChild($new_bullet);
	}
}

function updateBullets(){
	var temp = bullets;
	for(var i=0; i<bullets.length; i++){
		temp[i].updateBullet();
		if (temp[i].bullet.bulletY<0) {
			temp[i].deleteBullet();
			temp[i]=null;
			bullets = clearArray(temp);
		}
	}
}

function resetGame(){
	// var enemies = enemy_cars;
	// 	for(var i =0; i<enemies.length;i++)
	// 		{
	// 			enemies[i].deleteEnemy();
	// 			enemies[i] =null;
	// 		}
	// 	enemy_cars = clearArray(enemies);
		
		var bullets_temp = bullets;
		for(var i =0; i<bullets_temp.length;i++)
			{
				bullets_temp[i].deleteBullet();
				bullets_temp[i] =null;
			}
		bullets = clearArray(bullets_temp);
		
		gamestatus="true";
	// 	Frame.background_y =0;
		counter=0; bullet_count=0;
		// speedcounter=0;  invulcounter=0;
		speed_dy=1;
	// 	score=0;
		
	// 	var gameover_background = document.getElementById("gameover-background");
	// 	gameover_background.style.display = "none"
}

function clearArray(input){
	var temp = [];
	var len = input.length;
	for(var i=0; i<len; i++){
		if (input[i]!= null) {
			temp.push(input[i]);
		}
	}
	return temp;
}

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
				
				
				if(e.keyCode == 32)
				{
					//left
					if(bullet_count >= 9)
					{
					var e = new Bullet();
					(bullets).push(e);
					e.createBullet();
					bullet_count =0;
					}
				}
				
				if(e.keyCode == 27)
				{
					gameOver();
					resetGame();
					var homescreen = document.getElementById("homescreen");
					homescreen.style.display="block";
				}
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
		return undefined;
	}


	document.onkeydown = keydownEventHandler;
	document.onkeyup = keyupEventHandler;

/*OBJECTS*/
var car = new HeroCar();
car.updateCarPostion();
car.resetCarPosition();

var bullet = new Bullet();
bullet.createBullet();