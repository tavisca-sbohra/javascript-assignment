var ballno=0;
var ht=window.innerHeight;
var wd=window.innerWidth;
var dx=new Array();
var dy=new Array();

var newBall=function(){
    var addnewBall = document.createElement("div");
    addnewBall.id = "ball"+ballno;ballno++;
    dx.push(Math.random()*5);
    dy.push(Math.random()*5);
    addnewBall.style.width="20px";
    addnewBall.style.height="20px";
    addnewBall.style.position = "absolute";
    addnewBall.style.borderRadius="50%";
    addnewBall.style.left = this.xstart+"px";
    addnewBall.style.top = this.ystart+"px";
    addnewBall.style.background="#" + Math.random().toString(16).slice(2, 8);
    document.getElementById("bodyid").appendChild(addnewBall);
    
 }
 var moveBall = function(){
 	window.alert("move ball");
 	window.alert("ballno:"+ballno);
    for(var i =0; i < ballno;i++)
    {
        wd = window.innerWidth-15;
        ht = window.innerHeight-15;
        var divId = "ball"+i;
        var ballB = document.getElementById(divId);
        var x = parseInt(ballB.style.left,10);
        var y = parseInt(ballB.style.top,10);
        if(x > wd  || x < 0)
            dx[i] = -dx[i];
        if(y > ht  || y < 0)
            dy[i] = -dy[i];
        ballB.style.left = (x+dx[i])+"px";
        ballB.style.top = (y+dy[i])+"px";
    }
}


var ball = function(){
    this.xstart = Math.ceil((Math.random()*100)+10);
    this.ystart = Math.ceil((Math.random()*100)+10);
    this.addBalls= newBall.call(this);
}

window.onload =function(){
	setInterval(moveBall,100);
}

window.onkeypress=function(){
	var b=new ball;
}