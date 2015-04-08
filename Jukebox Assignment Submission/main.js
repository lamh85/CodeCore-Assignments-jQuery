// promptAndPlay
//
// Prompts the user to enter a song.
// Plays the entered song.
// Repeats when the song is complete.
//
var promptAndPlay = function() {
  $('#play').html('Play').attr('disabled', false);

  var songString = prompt("Welcome to JukeBox!\nEnter a song to play:");
  var song = parseSong(songString);

  playSong(song, 500, promptAndPlay);
};


// Adds event handler to the Play button
$('#play').on( 'click', function() {

  promptAndPlay();

  $(this).html("Playing...").attr('disabled', true)
  }
);