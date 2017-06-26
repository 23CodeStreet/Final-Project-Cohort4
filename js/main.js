$(document).ready(function() {
  var emptyCell = {
    class: 'empty',
  };
  var bunnyCell = {
    class: 'bunny',
  };
  var arrayX = new Array(5);
  var arrayY = new Array(5);
  var board = [
    [bunnyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
    [emptyCell, emptyCell, emptyCell, emptyCell, emptyCell],
  ];

  var x;
  var y;
  // create HTML board
  for (x = 0; x < arrayX.length; x++) {
    for (y = 0; y < arrayY.length; y++) {
      $('.boardgame')
        .append(
          '<div id="' + x + '-' + y +
          '" class="cell ' + board[x][y].class + '"></div>');
    }
  }

  whereIsBunny();
  board[0][0] = emptyCell;
  board[1][0] = bunnyCell;
  redrawCell('#0-0', emptyCell);
  redrawCell('#1-0', bunnyCell);
  whereIsBunny();

  function redrawCell(id, currentCell) {
    $(id)
      .attr('class', '')
      .addClass('cell')
      .addClass(currentCell.class);
  }

  function whereIsBunny() {
    for (x = 0; x < arrayX.length; x++) {
      for (y = 0; y < arrayY.length; y++) {
        if (board[x][y] === bunnyCell) {
          console.log('Bunny is on cell ' + x + ' ' + y);
        }
      }
    }
  }

});
