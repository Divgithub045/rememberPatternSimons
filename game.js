var  gamePattern=[];
var buttonColors = ["red", "green", "yellow", "blue"];
var userClickedPattern =[];
var level=0;
var started = false;
$(document).keypress(function() {
    if (!started) {
      $("#level-title").text("Level " + level);
      nextSequence();
      started = true;
    }
  });
  
function animatePress(currentColour)
{
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){$("#"+currentColour).removeClass("pressed")},100);
}
function playSound(name)
{
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play(); 
}
$(".btn").on('click', function()
{
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
}
)

function nextSequence()
{
  userClickedPattern = [];
    level++;
  $("#level-title").text("Level " + level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChoosenColor = buttonColors[randomNumber];
    gamePattern.push(randomChoosenColor);
    $('#' + randomChoosenColor).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChoosenColor);

}

function checkAnswer(currentLevel) {

  
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

    console.log("success");

    
    if (userClickedPattern.length === gamePattern.length){

   
      setTimeout(function () {
        nextSequence();
      }, 1000);

    }

  } else {

    console.log("wrong");
    playSound("wrong");
    $("body").addClass("game-over");
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);
      $("#level-title").text("Game Over, Press Any Key to Restart");
      startover();

  }}
  function startover()
  {
    started=false;
    level=0;
    gamePattern=[];
  }


