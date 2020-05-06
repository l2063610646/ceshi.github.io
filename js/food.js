(function(){
	
var elev=[];
function Food(){
	this.width=50;
	this.height=50;
	this.color = 'rgb('+tool.getNumber(0,255)+','+tool.getNumber(0,255)+','+tool.getNumber(0,255)+')';
	this.x =0;
	this.y =0;
	//alert("1");
};
Food.prototype.draw = function(pt){
	removef();
	var t = document.createElement('div');
	pt.appendChild(t);
	elev.push(t);
	this.x = tool.getNumber(0,15);
	this.y = tool.getNumber(0,15);
	t.style.position = 'absolute';
	t.style.left = this.x * 50 +'px';
	t.style.top = this.y * 50 + 'px';
	t.style.backgroundColor = this.color;
	t.style.width = this.width + 'px';
	t.style.height = this.height +'px';
};
function removef(){
	for( var i = elev.length-1;i>=0;i--)
	{
		elev[i].parentNode.removeChild(elev[i]);
		elev.splice(i,1);
	}
}
window.Food = Food;
/*
var map = document.getElementById("container");
var box = new Food();
box.draw(map);*/
})();
