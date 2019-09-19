const balls = document.getElementsByClassName("ball");

document.onmousemove = function(){
    var x = event.clientX * 100 / window.innerWidth + "%"; //gets horizontal coordinate of onmouse move and the window.innerwidth gets the browser width
    var y = event.clientY * 100 / window.innerHeight + "%";//gets vertical coordinate of onmouse move and the window.innerheight gets the browser height


for( var i =0; i< 2; i++){
    balls[i].style.left =x;
    balls[i].style.top =y;
    balls[i].style.transform = "translate( -"+x+", -"+y+")";

}

}