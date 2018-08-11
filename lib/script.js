$(function(event) {

  var move = 0;
  var result = false;
  var createX = $("<p id='cross'>X</p>");
  var createO = $("<p id='naught'>O</p>");
  var isWin = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];


  //Create the grid and style in jQuery.
  function createGrid() {
    var boxArr = []; //Create an array for html elements

    for (var i = 0; i < 9; i++) {
      boxArr.push("<div class='box'></div>") //Add the html span to an array
    }
    $(".container").append(boxArr.join('')); //Join the array by its seperate elements to append it to the container
  }

  //Determines who turn it is.
  function playGame() {

    $(".box").on("click", function() {
      if (move < 9){
        if ((move % 2) == 0) { // If move is even, its crosses turn
          $(this).append(createX); //Add this to the box you are in
          createX = $("<p id='cross'>X</p>") //Recreate the variable
          move++
          result = winningConditions($(".box"), $("#cross").html());
        } else {
          $(this).append(createO);
          createO = $("<p id='naught'>O</p>");
          move++
          result = winningConditions($(".box"), $("#naught").html());
        }
      } else {
        return;
      }
    });
  }

  //Determines who wins
  function winningConditions(board, side) {
    debugger;
    for (var i = 0; i < isWin.length; i++) {
      var sum = 0;
      var w = isWin[i]

      for (var j = 0; j < w.length; j++) {
        if(board[w[j]].textContent == side) {
          sum++;
        }
      }
      if (sum == 3) {
        alert("You win")
        return true;
      }
    }
    return false;
}

  //Main
  createGrid();
  playGame();
  $("#reset").on("click", function() {
    $(".box").remove();
    createGrid();
    playGame();
  })


//On click
  //Display either a O or a X
  //Change turn
//Make it turn based
  //Functions?
  //Even and Odd?
//Allow for all winning conditions
  //Lines
  //Diagonals
  //Draw
//Use RND to determine who does first
  //Display who does first
//Allow reset of the game
//Check for winning conditions.
//BONUS
  //Let user select how big they would like the border to be
})
