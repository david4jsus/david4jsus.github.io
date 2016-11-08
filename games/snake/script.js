/*
   Code by David Valenzuela González
   Original:    11 July 2016
   Last edited: 11 July 2016
*/

// First variables
var map    = document.getElementById("map");
var ctx    = map.getContext("2d");
var unit   = 40;     // Size of grid boxes and snake's body (Grid Size will be 20x20 with canvas size 800x800 -> canvas size defined in html file)
var snakex = 8 ;     // Snake's head x position
var snakey = 10;     // Snake's head y position
var foodx  = 3;      // Food's x position
var foody  = 3;      // Food's y position
var currentDir  = 0; // Direction of snake (0 = UP, 1 = RIGHT, 2 = DOWN, 3 = LEFT, -1 = STOP/GAME OVER)
var nextDir     = 0; // Directions of snake in the next turn
var snakeLength = 1; // Length of the snake
var snakePos    =[0];// Array of snake's part's positions
var move   = true;   // To avoid moving more than one unit at a time

// Keyboard listener
document.addEventListener('keydown', function(e) {
   if (currentDir != -1) {
      if (currentDir != 2 && (e.keyCode == 87 || e.keyCode == 38) ) // Up
         nextDir = 0;
         
      if (currentDir != 3 && (e.keyCode == 68 || e.keyCode == 39) ) // Right
         nextDir = 1;
         
      if (currentDir != 0 && (e.keyCode == 83 || e.keyCode == 40) ) // Down
         nextDir = 2;
         
      if (currentDir != 1 && (e.keyCode == 65 || e.keyCode == 37) ) // Left
         nextDir = 3;

   } else {
      if (e.keyCode == 32)
         gameReset();
   }
}, false);

// Main()
runGame();

// Renitialize variables, getting ready for new game
function gameReset() {
   snakex = 8;
   snakey = 10;
   foodx  = 3;
   foody  = 3;
   currentDir  = 0;
   nextDir     = 0;
   snakeLength = 1;
   snakePos    =[0];
   move   = true;
   
   snakePos[0] = new Array(2);
}

// Run the game (initialize some variables and use the function gameLogic() at 60 fps)
function runGame() {   
   snakePos[0] = new Array(2);

   setInterval(gameLogic, 1000/60.0);
}

// Logic of the game
function gameLogic() {
   
   // Run the game (if not game over)
   if (currentDir != -1) {
      
      // Time variables
      var d = new Date();
      var t = d.getTime();
      
      // Move the snake
      if ( (Math.round(t/100) % 2) == 0 ) {  // Speed of movement defined here
         if (move) {
            updateSnakePos();                // Update snake's positions array
            currentDir = nextDir;
            if (currentDir == 0) snakey--;
            if (currentDir == 1) snakex++;
            if (currentDir == 2) snakey++;
            if (currentDir == 3) snakex--;
            move = false;
         }
         
         // Check snake's collision
         checkCollision();
      }
      else
         move = true;
   }
   
   // Draw the things that are needed to be drawn
   drawImage();
}

// Check the collision of the snake
function checkCollision() {
   if (snakex < 0 || snakex >= 20 || snakey < 0 || snakey >= 20) // Borders
      currentDir = nextDir = -1;
   if (snakex == foodx && snakey == foody) {                     // Eating food
      // Change food's location (to random)
      foodx = Math.floor((Math.random() * 19) + 1);
      foody = Math.floor((Math.random() * 19) + 1);
      // Add snake part to snake
      addSnakeLength();
   }
   for (var i = 1; i < snakeLength; i++) {                      // Collision against other parts of the snake
      if (snakex == snakePos[i][0] && snakey == snakePos[i][1])
         currentDir = nextDir = -1;
   }
}

// Update snake's positions array
function updateSnakePos() {
   // Feed snake's positions array with new head's position
   snakePos[0][0] = snakex;
   snakePos[0][1] = snakey;
   
   // The rest of the array
   for (var i = snakeLength - 1; i > 0; i--) {
      snakePos[i][0] = snakePos[i - 1][0];
      snakePos[i][1] = snakePos[i - 1][1];
   }
}

// Enlarge the snake
function addSnakeLength() {
   snakeLength++;
   snakePos.length++;
   snakePos[snakeLength - 1] = new Array(2);
   snakePos[snakeLength - 1][0] = snakePos[snakeLength - 2][0];
   snakePos[snakeLength - 1][1] = snakePos[snakeLength - 2][1];
}

// Draw the components of the game
function drawImage() {
   if (currentDir != -1) {                         // Game running
      ctx.clearRect(0, 0, map.width, map.height);
      
      // White background
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(0, 0, map.width, map.height);

      // Food
      drawFood();
      
      // Snake
      drawSnake();
   } else {                                        // Game over
      drawGameOver();
   }
}

// Draw the snake
function drawSnake() {
   ctx.fillStyle   = "#000000";                                               // Black fill
   ctx.strokeStyle = "#FFFFFF";                                               // White stroke (border)
   ctx.fillRect  (snakex * unit, snakey * unit, unit, unit);                  // Head
   ctx.strokeRect(snakex * unit, snakey * unit, unit, unit);
   for (var i = 1; i < snakeLength; i++) {                                    // Rest of the snake's body
      ctx.fillRect  (snakePos[i][0] * unit, snakePos[i][1] * unit, unit, unit);
      ctx.strokeRect(snakePos[i][0] * unit, snakePos[i][1] * unit, unit, unit);
   }
}

// Draw the food
function drawFood() {
   ctx.fillStyle = "#00FF00";
   ctx.fillRect(foodx * unit, foody * unit, unit, unit);
}

// Display "Game Over" text
function drawGameOver() {
   var d = new Date();
   var t = d.getTime();
   
   // "Game Over" text
   ctx.fillStyle   = "#000000"; // Black fill
   ctx.strokeStyle = "#FFFFFF"; // White stroke (border)
   ctx.textAlign   = "center";
   ctx.font        = "bold 40px Consolas";
   ctx.fillText  ("GAME OVER", map.width/2, map.height/2);
   ctx.strokeText("GAME OVER", map.width/2, map.height/2);


   // "Restart" text
   ctx.font = "25px Consolas";                                                      // Font + size

   ctx.strokeText("Press the spacebar to restart", map.width/2, (map.height/3)*2);  // White border

   if (Math.round(t/1000) % 2 == 0) {                                               // Black text --> make it flashy
      ctx.fillStyle = "#000000";
      ctx.fillText("Press the spacebar to restart", map.width/2, (map.height/3)*2);
   } else {                                                                         // White text
      ctx.fillStyle = "#FFFFFF";
      ctx.fillText("Press the spacebar to restart", map.width/2, (map.height/3)*2);
   }
}