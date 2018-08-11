$(function() {

  var move = 0;

  //Create the grid and style in jQuery.
  function createContainer() {
    var boxArr = []; //Create an array for html elements

    for (var i = 0; i < 9; i++) {
      boxArr.push("<div class='box'></div>") //Add the html span to an array
    }
    $(".container").append(boxArr.join('\n')); //Join the array by its seperate elements to append it to the container
  }

  function isTurn() {
    var xTurn = false;

    if ((move % 2) == 0) {
      xTurn = true;
      move++
    }
    else {
      xTurn = false;
      move++
    }

    return xTurn;
  }

  createContainer();

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
