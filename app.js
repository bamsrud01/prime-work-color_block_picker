$(document).ready(function() {

  var right = 0;
  var total = 0;

  createBlocks();

  assignColors();

  choose();

  $('#blocks').on('click', '.pick', function() {
      var $chosen = $(this).css('background-color');
      console.log('Chosen: ' + $chosen);
      console.log('To choose: ' + $('#color_select').css('color'));
      if ($chosen === $('#color_select').css('color')) {
        $('#response').text('That\'s right!');
        right++;
        $('#score').text(right);
      } else {
        $('#response').text('Sorry, that\'s not right.');
      }
      total++;
      $('#total_done').text(total);
      choose();

  });

});

var colorList = ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'aqua',
'magenta', 'tomato', 'pink', 'navy', 'olive', 'maroon', 'lime', 'salmon', 'brown'];

var chooserArray = shuffleArray(colorList);

function createBlocks() {
  for ( var i = 0; i < 4; i++ ) {
    $('#blocks').append('<div class="row"></div>');
    for ( var j = 0; j < 4; j++ ) {
      $('#blocks').children().last().append('<div class="pick" id="block' + ((4 * i) + j + 1) + '"></div>');
    }
  }
}

function assignColors() {
  shuffleArray(colorList);
  for (var i = 0; i < 16; i++) {
    $('#block' + (i + 1)).css('background-color', colorList[i]);
  }
}
//I take no credit for this function.  I found it on Stack Overflow, and it suited my needs.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

function choose() {
  var current = chooserArray.pop();
  $('#color_select').css('color', current);
  $('#color_select').text(current.toUpperCase());
}
