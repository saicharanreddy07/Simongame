var i=1;
var actualans=0;
var givenans=0;
var tens=1;
var forcheckans=0;
var forcheckten=0;
var start=0;
function bluepress(){
    givenans=4;
    $(".blue").addClass("pressed");
    var aud=new Audio("blue.mp3");
    aud.play();
    setTimeout(function(){
        $(".blue").removeClass("pressed");
    },1000);
}
function greenpress(){
    givenans=1;
    $(".green").addClass("pressed");
    var aud=new Audio("green.mp3");
    aud.play();
    setTimeout(function(){
        $(".green").removeClass("pressed");
    },1000);
}
function redpress(){
    givenans=2;
    $(".red").addClass("pressed");
    var aud=new Audio("red.mp3");
    aud.play();
    setTimeout(function(){
        $(".red").removeClass("pressed");
    },1000);
}
function yellowpress(){
    givenans=3;
    $(".yellow").addClass("pressed");
    var aud=new Audio("yellow.mp3");
    aud.play();
    setTimeout(function(){
        $(".yellow").removeClass("pressed");
    },1000);
}
$(".blue").on("click",bluepress);
$(".green").on("click",greenpress);
$(".red").on("click",redpress);
$(".yellow").on("click",yellowpress);

$(document).on("keypress",function(){
    start=1;
    $("h1").text("LEVEL-1");
     i=1;
 actualans=0;
 givenans=0;
 tens=1;
 forcheckans=0;
 forcheckten=0;
    generatenumber();
});

$(".btn").on("click",wrong);
function wrong(){
    if(start===0)
    {$("h1").text("GAME OVER,PRESS ANY KEY TO RESTART!");
        var aud=new Audio(".wrong.mp3");
    aud.play();
}
}


    
function generatenumber(){
    if(start===1){
        setTimeout(function(){},500);
        var show=Math.floor(Math.random()*4+1);
        actualans=actualans*10+show;
        tens=tens*10;
        forcheckans=actualans;
        forcheckten=tens/10;;
        switch(show){
            case 1:
                greenpress();
                break;
            case 2:
                redpress();
                break;
            case 3:
                yellowpress();
                break;
            case 4:
                bluepress();
                break;
            default:

        }
    }
}
function levelup(){
   
    i++;
    $("h1").text("LEVEL-"+i);
    setTimeout(function(){generatenumber();},1000);
    
}
function checkans(){
    if(Math.floor(forcheckans/forcheckten)!==givenans)
    {
        start=0;
        wrong();
    }
    else{
        forcheckans-=givenans*forcheckten;
        forcheckten=forcheckten/10;
        if(forcheckans===0)
       { levelup();}
    }

}
$(".red").on("click",checkans);
$(".green").on("click",checkans);
$(".blue").on("click",checkans);
$(".yellow").on("click",checkans);
