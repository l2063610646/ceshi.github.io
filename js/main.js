(function(){
	var that;
	function game(map){
		this.snake = new Snake();
		this.food = new Food();
		this.map =map;
		that = this;
	}
	game.prototype.start = function(){
		that.food.draw(that.map);
		var run = setInterval(function(){
			that.snake.move(that.food,that.map);
			that.snake.draw(that.map);
			if(that.snake.body[0].y >15 || that.snake.body[0].y<0||that.snake.body[0].x>15||that.snake.body[0].x<0 )
			{
				alert("游戏结束，"+"您的分数为:"+that.snake.scores);
				clearInterval(run);	
			}
		},200);
		window.run = run;
	}
	window.game = game;
	var leftb = document.getElementById("left");
	var rightb = document.getElementById("right");
	var upb = document.getElementById("up");
	var downb = document.getElementById("down");
	rightb.addEventListener('click',function(){if(that.snake.face!='left')that.snake.face = 'right';},false);
        leftb.addEventListener('click',function(){if(that.snake.face!='right')that.snake.face = 'left';},false);
	upb.addEventListener('click',function(){if(that.snake.face!='down')that.snake.face = 'up';},false);
	downb.addEventListener('click',function(){if(that.snake.face!='up')that.snake.face = 'down';},false);
	var mao = document.getElementById("container");
	var g = new game(mao);
	g.start();
	
})();
