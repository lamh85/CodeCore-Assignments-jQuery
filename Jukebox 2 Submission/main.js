// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
var promptAndPlay = function() {

  var songString = $('#songField').val();
  var song = parseSong(songString);
  var bpm = $('#bpmField').val();

  playSong(song, bpm, resetButton);
};

var resetButton = function() {
  $('#play').html('Play').attr('disabled', false);
}

// Adds event handler to the Play button
$('#play').on( 'click', function() {

  promptAndPlay();

  $(this).html("Playing...").attr('disabled', true)
  }
);