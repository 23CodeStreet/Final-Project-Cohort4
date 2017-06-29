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
    [grassCell, grassCell, carrotCell, grassCell, grassCell],
    [waterCell, waterCell, waterCell, rockCell, waterCell],
    [logCell, logCell, waterCell, waterCell, waterCell],
    [waterCell, rockCell, rockCell, waterCell, waterCell],
    [grassCell, grassCell, grassCell, grassCell, grassCell],
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
  whereIsBunny();

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
          console.log('Bunny is on cell ' + x + ' ' + y);
        }
      }
    }
  }

});
