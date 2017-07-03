$(document).ready(function() {
  var carrotCell = {
    class: 'carrot',
    hasBunny: false,
  };
  var grassCell = {
    class: 'grass',
    hasBunny: false,
  };
  var rockCell = {
    class: 'rock',
    hasBunny: false,
  };
  var waterCell = {
    class: 'water',
    hasBunny: false,
  };
  var logCell = {
    class: 'log',
    hasBunny: false,
  };
  var arrayX = new Array(5);
  var arrayY = new Array(5);
  var board = [
    [$.extend({}, grassCell), $.extend({}, grassCell), $.extend({}, carrotCell), $.extend({}, grassCell), $.extend({}, grassCell)],
    [$.extend({}, waterCell), $.extend({}, waterCell), $.extend({}, waterCell), $.extend({}, rockCell), $.extend({}, waterCell)],
    [$.extend({}, logCell), $.extend({}, logCell), $.extend({}, waterCell), $.extend({}, waterCell), $.extend({}, waterCell)],
    [$.extend({}, waterCell), $.extend({}, rockCell), $.extend({}, rockCell), $.extend({}, waterCell), $.extend({}, waterCell)],
    [$.extend({}, grassCell), $.extend({}, grassCell), $.extend({}, grassCell), $.extend({}, grassCell), $.extend({}, grassCell)],
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

  board[4][2].hasBunny = true;
  redrawCell('#4-2', board[4][2]);

  function redrawCell(id, currentCell) {
    $(id)
      .attr('class', '')
      .addClass('cell')
      .addClass(currentCell.class);

    if(currentCell.hasBunny) {
      $(id).addClass('bunny');
    }
  }

  function whereIsBunny() {
    for (x = 0; x < arrayX.length; x++) {
      for (y = 0; y < arrayY.length; y++) {
        if (board[x][y].hasBunny) {
          return {
            x: x,
            y: y,
          };
        }
      }
    }
  }

  $(document).keydown(function( event ) {
    event.preventDefault();
    if ( event.which === 38 ) { // go up
      // where is the bunny
      var currentBunny = whereIsBunny();

      if (currentBunny.x !== 0) {
        // remove bunny from current cell
        board[currentBunny.x][currentBunny.y].hasBunny = false;
        redrawCell(
          '#' + currentBunny.x + '-' + currentBunny.y,
          board[currentBunny.x][currentBunny.y]
        );

        // add bunny to next cell
        board[currentBunny.x - 1][currentBunny.y].hasBunny = true;
        redrawCell(
          '#' + (currentBunny.x - 1) + '-' + currentBunny.y,
          board[currentBunny.x - 1][currentBunny.y]
        );
      }
    } else if (event.which === 40) { // go down
      // where is the bunny
      var currentBunny = whereIsBunny();

      if (currentBunny.x !== 4) {
        // remove bunny from current cell
        board[currentBunny.x][currentBunny.y].hasBunny = false;
        redrawCell(
          '#' + currentBunny.x + '-' + currentBunny.y,
          board[currentBunny.x][currentBunny.y]
        );

        // add bunny to next cell
        board[currentBunny.x + 1][currentBunny.y].hasBunny = true;
        redrawCell(
          '#' + (currentBunny.x + 1) + '-' + currentBunny.y,
          board[currentBunny.x + 1][currentBunny.y]
        );
      }
    } else if (event.which === 39) { // go right
      // where is the bunny
      var currentBunny = whereIsBunny();

      if (currentBunny.y !== 4) {
        // remove bunny from current cell
        board[currentBunny.x][currentBunny.y].hasBunny = false;
        redrawCell(
          '#' + currentBunny.x + '-' + currentBunny.y,
          board[currentBunny.x][currentBunny.y]
        );

        // add bunny to next cell
        board[currentBunny.x][currentBunny.y + 1].hasBunny = true;
        redrawCell(
          '#' + currentBunny.x + '-' + (currentBunny.y + 1),
          board[currentBunny.x][currentBunny.y + 1]
        );
      }
    } else if (event.which === 37) { // go left
      // where is the bunny
      var currentBunny = whereIsBunny();

      if (currentBunny.y !== 0) {
        // remove bunny from current cell
        board[currentBunny.x][currentBunny.y].hasBunny = false;
        redrawCell(
          '#' + currentBunny.x + '-' + currentBunny.y,
          board[currentBunny.x][currentBunny.y]
        );

        // add bunny to next cell
        board[currentBunny.x][currentBunny.y - 1].hasBunny = true;
        redrawCell(
          '#' + currentBunny.x + '-' + (currentBunny.y - 1),
          board[currentBunny.x][currentBunny.y - 1]
        );
      }
    }

  });


});
