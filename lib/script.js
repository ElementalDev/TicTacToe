$(function(event) {

  var move = 0;
  var result = false;
  var createX = $("<img class='gameimg' src='../Images/redX.png' alt='Cross'/>");
  var createO = $("<img class='gameimg' src='../Images/blueO.png' alt='Naughts'/>");

  //Create the grid and style in jQuery.
  function createGrid() {
    var boxArr = []; //Create an array for html elements

    for (var i = 0; i < 9; i++) {
      boxArr.push("<div class='box'></div>") //Add the html span to an array
    }
    $(".container").append(boxArr.join('\n')); //Join the array by its seperate elements to append it to the container
  }

  //Determines who turn it is.
  function playGame() {
    var sideX = $("img[alt='Cross']");
    var sideO = $("img[alt='Naughts']");

    $(".box").on("click", function() {
      if (move < 9){
        if ((move % 2) == 0) { // If move is even, its crosses turn
          $(this).append(createX); //Add this to the box you are in
          createX = $("<img class='gameimg' src='../Images/redX.png' alt='Cross'/>"); //Recreate the variable
          move++
          result = winningConditions($(".box"), sideX);
        } else {
          $(this).append(createO);
          createO = $("<img class='gameimg' src='../Images/blueO.png' alt='Naughts'/>");
          move++
          result = winningConditions($(".box"), sideO);
        }
      } else {
        return;
      }
    });
  }


  //Main
  createGrid();
  playGame();

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
