$(document).ready(function() {

  var playButton = $('#play-button');

  playButton.on('click', function() {
    // When the play button is clicked...

    // Set the button text to "Playing".
    playButton.html('Playing');
    // and disable it.
    playButton.attr('disabled', true);

    // Prompt for a song to play.
    var songString = prompt("Enter a song to play:");
    var song = parseSong(songString);

    // Play the submitted song.
    playSong(song, 500, function() {

      // When the song is finished playing...

      // Set the play button text back to "Play"
      playButton.html('Play All');
      // and re-enable it.
      playButton.attr('disabled', false);

    });

  });

  // Your code goes here.
});