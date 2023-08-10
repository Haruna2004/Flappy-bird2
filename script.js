
//get elements from html files
var game = document.getElementById("game")
var block = document.getElementById("block")
var hole = document.getElementById("hole")
var bird = document.getElementById("bird")
var result = document.getElementById("result")
var text = document.getElementById("text")
//initailize variables
var score = 0
var jumping = 0

//make hole appear randomly
hole.addEventListener("animationiteration",ranHole)
function ranHole() {
    var random = -((Math.random()*350)+150)
    hole.style.top = random+"px"
    score++
}

//make flappy jumb
window.addEventListener("keydown",hop)
function hop() {
    jumping = 1
    var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"))
    bird.style.top = (birdTop - 60) + "px"
    setTimeout(function(){
        jumping = 0
    },100)
}

//determine game result
setInterval(function(){
    var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top")) //100px
    var holeTop = parseInt(getComputedStyle(hole).getPropertyValue("top")) //random 100
    var blockLeft = parseInt(getComputedStyle(block).getPropertyValue("left")) //from 400 -> -50
    var hTop = 500+holeTop
    if ((birdTop > 450) || ((blockLeft < 50) && (blockLeft > -50) && ((birdTop < hTop) || (birdTop > hTop+100 )))) {
        game.style.display = "none"
        result.style.display = "block"
        text.innerText = `Your Score is: ${score}`
        score = 0
        window.addEventListener("keypress",reloadGame)    //reloads the game on button press when game over
    }

},10)

//declare fall
setInterval(function() {
    var birdTop = parseInt(getComputedStyle(bird).getPropertyValue("top"))
    if (jumping == 0) {
        bird.style.top = (birdTop+2) +"px"
    }
},10)



var reloadGame = function() {
    location.reload()
}


