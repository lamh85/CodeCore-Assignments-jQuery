// The ID is mw-content-text

var content = $('#mw-content-text').html();
$('#mw-content-text').html("");

var counter = 1;

var writer = function() {

  setInterval( function(){

    $('#mw-content-text').html(content.substr(0,counter));

    if (counter < content.length) {
      counter ++;
      writer();
    }
    
    },
    1
  )
}

writer();