
var min_x = 20;
var min_y=20;

var maxValue_x = window.innerWidth-60;
var maxValue_y =window.innerHeight-60 ;
var ball;
var dx=20;
var dy=20;
var x=0;
var y=0;



window.onload=function()
{

ball = document.getElementById("circle1");	

window.setInterval(moveBall,100);
}

function moveBall()
{

	
	maxValue_x = window.innerWidth-60;
	maxValue_y = window.innerHeight-60;
	x+=dx;
	y+=dy;
	checkBounderies();
	ball.position="absolute";
	ball.style.left = x + "px";
	ball.style.top  = y + "px";
}

function checkBounderies()
{

	if (x>maxValue_x || x<min_x )
	{
		dx=-dx;
	}
	
	if (y>maxValue_y || y<min_y)
	{
		dy=-dy;
	}
	
};
