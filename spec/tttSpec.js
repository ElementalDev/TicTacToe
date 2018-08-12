describe("These are the tests for the TicTacToe functions", function() {

  var game = require("../lib/script.js");

  it("Should return true when a draw is reached", function() {
    expect(game.checkDraw(5)).toEqual(false);
    expect(game.checkDraw(3)).toEqual(false);
    expect(game.checkDraw(9)).toEqual(true);
  })
})
