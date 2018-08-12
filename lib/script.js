$(function(event) {

  var move = 0;
  //Create an element
  var createX = $("<p id='cross'>X</p>");
  var createO = $("<p id='naught'>O</p>");
  // All possible winning conditions
  var isWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];
  var play = true;
  var xTally = 0;
  var oTally = 0;


  //Create the grid and style in jQuery.
  function createGrid() {
    var boxArr = []; //Create an array for html elements

    for (var i = 0; i < 9; i++) {
      boxArr.push("<div class='box'></div>") //Add the html span to an array
    }
    $(".container").append(boxArr.join('')); //Join the array by its seperate elements to append it to the container
  }

  //Determines who turn it is.
  function playGame(isPlay) {
    $(".box").on("click", function() {
      if (move < 9 && isPlay == true){
        // If move is even, its crosses turn
        if ((move % 2) == 0) {
          //Add this to the box you are in
          $(this).append(createX);
          //Recreate the variable
          createX = $("<p id='cross'>X</p>")
          //Add one to the move counter
          move++
          //Display whos turn it is next
          $("#turn").html("Naughts turn");
          //Evaluate the board to see if anyone has won
          winningConditions($(".box"), $("#cross").html());
        } else {
          $(this).append(createO);
          createO = $("<p id='naught'>O</p>");
          move++
          $("#turn").html("Crosses turn");
          winningConditions($(".box"), $("#naught").html());
        }
        return true;
      }
      if (move >= 9) {
        $("#turn").html("Draw. Please reset!") //If there is no winner, display that it was a draw
        play = false;
        return false;
      }
    });
  }

  //Determines who wins
  function winningConditions(board, side) {
    for (var i = 0; i < isWin.length; i++) { //Goes through the winning conditions to store one and compare it
      var sum = 0;
      var w = isWin[i] //Stores a winning condition

      for (var j = 0; j < w.length; j++) {
        if(board[w[j]].textContent == side) { //Goes through the board and the winning condition to see if they are the same
          sum++;
        }
      }
      if (sum == 3) {
        if (side == "X"){
          debugger;
          $("#turn").html("Crosses win!") //Displays crosses win
           $("#crossTally").html(xTally += 1); //Adds a point to crosses to be added to the score total
        } else {
          $("#turn").html("Naughts win!") //Display naughts win
          $("#naughtTally").html(oTally += 1); //Adds a point to naughts to be added to the score total
        }
          $(".box").off("click"); //Takes the event listener off all boxes to prevent any more moves being played
          play = false;
        }
      }
    }

  //Main
  createGrid();
  playGame(play);

  $("#reset").on("click", function() { //Reset all of the functions except for the tally
    $(".box").remove();
    $("#turn").html("Welcome to the game. Crosses Start!")
    move = 0;
    play = true;
    createGrid();
    playGame(play);
  })

})
