$(function(event) {

  //Amount of moves
  var move = 0;
  //Create an element
  var createX = $("<p class='cross'>X</p>");
  var createO = $("<p class='naught'>O</p>");
  // All possible winning conditions
  var isWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
  //Score keeper variables
  var xTally = 0;
  var oTally = 0;

  //Create the grid and style in jQuery.
  function createGrid() {
    //Create an array for html elements
    var boxArr = [];

    for (var i = 0; i < 9; i++) {
      //Add the html span to an array
      boxArr.push("<div class='box'></div>")
    }
    //Join the array by its seperate elements to append it to the container
    $(".container").append(boxArr.join(''));
  }

  //All game functionality
  function playGame() {
    $(".box").one("click", function() {
      if (move < 9){
        // If move is even, its crosses turn
        if ((move % 2) == 0) {
          //Add this to the box you are in
          $(this).append(createX);
          //Recreate the variable
          createX = $("<p class='cross'>X</p>")

          //Display whos turn it is next
          $("#turn").html("Naughts turn");
          //Add one to the move counter
          move++
          //Check if moves are more than 9
          checkDraw(move);
          //Evaluate the board to see if anyone has won
          winningConditions($(".box"), $(".cross").html());
        } else {
          $(this).append(createO);
          createO = $("<p class='naught'>O</p>");
          $("#turn").html("Crosses turn");
          move++;
          checkDraw(move);
          winningConditions($(".box"), $(".naught").html());
        }
      }
    });
  }

  //If there is no winner, display that it was a draw
  function checkDraw(moves) {
    if (moves == 9) {
      $("#turn").html("Draw!");
      return true;
    }
    return false;
  }

  //Determines who wins
  function winningConditions(board, side) {
    for (var i = 0; i < isWin.length; i++) {
       //Goes through the winning conditions to store one and compare it
      var sum = 0;
      //Stores a winning condition
      var w = isWin[i]

      //Goes through the board and the winning condition to see if they are the same
      for (var j = 0; j < w.length; j++) {
        if(board[w[j]].textContent == side) {
          sum++;
        }
      }
      if (sum == 3) {
        if (side == "X"){
          //Displays crosses win
          $("#turn").html("Crosses win!").css("color", "#FF0000CC")
          //Adds a point to crosses to be added to the score total
           $("#crossTally").html(xTally += 1);
        } else {
          //Display naughts win
          $("#turn").html("Naughts win!").css("color", "#0000FFCC")
          //Adds a point to naughts to be added to the score total
          $("#naughtTally").html(oTally += 1);
        }
          //Takes the event listener off all boxes to prevent any more moves being played
          $(".box").off("click");
          return side;
        }
      }
    }

 //Main game
  createGrid();
  playGame();
  //Reset all of the functions except for the tally
  $("#reset").on("click", function() {
    $(".box").remove();
    $("#turn").html("Welcome to the game. Crosses Start!").css("color", "black");
    move = 0;
    play = true;
    createGrid();
    playGame();
  })
})

module.exports = {
  checkDraw: checkDraw,
  winningConditions: winningConditions
}
