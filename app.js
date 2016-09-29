$(document).ready(function() {

  var right = 0;
  var total = 0;

  createBlocks(4);

  assignColors();

  nextChoose();

  //  I had trouble separating this into a separate function.  This function will handle what will happen when a div is clicked.
  //  It will also add to the score of correct clicks, and call the function to choose the next color.
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
      function changeback() {
      $(this).css('background-color', 'white');
      }
      setTimeout(changeback, 2000);
      //$(this).css('background-color', $chosen).setTimeout(2000);
      nextChoose();

  });

});

//  I take no credit for this function.  I found it on Stack Overflow, and it suited my needs.
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
//  this function will shuffle sixteen colors together to use in the game.
function shuffleColors(array) {
  array = ['red', 'yellow', 'blue', 'green', 'orange', 'purple', 'aqua',
  'magenta', 'tomato', 'pink', 'navy', 'olive', 'maroon', 'lime', 'salmon', 'brown'];
  shuffleArray(array);
  return array;
}

var colorList = [];
colorList = shuffleColors(colorList);
//  this function will append the colors to the document.
function createBlocks(num) {
  for ( var i = 0; i < num; i++ ) {
    $('#blocks').append('<div class="row"></div>');
    for ( var j = 0; j < 4; j++ ) {
      $('#blocks').children().last().append('<div class="pick" id="block' + ((4 * i) + j + 1) + '"></div>');
    }
  }
}
//  This function will give each div one of the colors in the list.
function assignColors() {
  colorList = shuffleColors(colorList);
  for (var i = 0; i < 16; i++) {
    $('#block' + (i + 1)).css('background-color', colorList[i]);
  }
}
//  This function will show the user which color to click by changing the name and color of the word for the color in the instructions.
function nextChoose() {
  colorList = shuffleColors(colorList);
  var current = colorList.pop();
  $('#color_select').css('color', current);
  $('#color_select').text(current.toUpperCase());
  console.log(colorList);
  if (colorList.length <= 1) {
    colorList = shuffleColors(colorList);
  }
}
