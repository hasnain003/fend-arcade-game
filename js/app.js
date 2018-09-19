// Enemies our player must avoid
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
	
	this.x=x;
	this.y=y;
	this.speed=speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
	
	this.x+=this.speed*dt;
	
	//When off canvas reset the enemy position to move across again
	if(this.x>505){
		this.x=-100;
	this.speed=100+Math.floor(Math.random()*1024);
	}
	
	//checking for collision between player and enemeis
	
	if(player.x < this.x+60
	   && player.x+37 > this.x 
	   && player.y < this.y+25 
	   && player.y+30>this.y)
		{
			player.x=200;
			player.y=380;
		}
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player=function(x,y,speed)
{
	this.x=x;
	this.y=y;
	this.speed=speed;
	
	this.sprite = 'images/char-boy.png';
};


Player.prototype.update=function() {	
	if(this.x>425){
		this.x=0;
	}
	if(this.x<0)
		{
			x=420;
		}
	if(this.y > 440)
		{
			this.y=380;
		}
	if(this.y<0)
		{
			this.y=380;
		}
};


Player.prototype.render= function() {
	ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
};


Player.prototype.handleInput= function(key) {
	switch(key){
		case 'up':
			this.y-=this.speed+30;
			break;
		case 'left':
			this.x-=this.speed+50;
			break;
		case 'down':
			this.y+=this.speed+30;
			break;
		case 'right':
			this.x+=this.speed+50;
			break;
	}
};


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player

var allEnemies=[];
var player=new Player(425,440,50);
var EnemeyPosition=[60,140,220];
var enemy;

EnemeyPosition.forEach(function(posY){
	enemy=new Enemy(0,posY,100+Math.floor(Math.random()*1024));
	allEnemies.push(enemy);
});
// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
