var playButton = $('#play-button');
var listTable = $('#song-queue');

var startPlaylist = function() {
  // When the play button is clicked...

  playButton.slideUp();

  // If the list of songs is not empty...
  if ( $('table tr:first').text() != "" ) {

    // Extract the text from the first row, second cell
    var songString = $('table tr:first td').eq(1).text();

    // Extract the song name from the first row, first cell
    var songName = $('table tr:first td:first').text();

    // Disable the 'Play' button, and display the song name
    $('#message').text('Now playing: ' + songName)

    // Parse the uer-inputed notes
    var song = parseSong(songString);

    // Remove the first song of the list
    $('table tr:first').remove();

    // Play the song
    playSong(song, 500, startPlaylist);    

  // If the list of songs is empty...
  } else {

    playButton.slideDown();

    $('#message').text('No song is currently playing. Enter songs to start.')
  }

};

// Function for queueing songs
$('[type="submit"]').click( function(){

  // Store user input into this variable
  var notesInput = $('[name="notes"]').val();
  var songNameInput = $('[name="songName"]').val();

  // Store the variable's value into the list
  listTable.append(
    '<tr>' +
    '<td>' + songNameInput + '</td>' +
    '<td>' + notesInput + '</td>' +
    '</tr>'
    );
  // Clear the text field
  $('[name="notes"]').val("");
  $('[name="songName"]').val("");

})

// Attach the function to the 'Play' button
playButton.on('click', startPlaylist );