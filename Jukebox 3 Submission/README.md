# Overview

Right now your Jukebox can only play one song. Users would like to be able to queue-up songs to be played next so that they can keep listening to your awesome tunes! Let's use some jQuery to do this.

Put your new javascript code in the `main.js` file.

# Tasks

## Part 1 - Enqueuing songs

1. The user will enter a string of song notes (e.g. "A B*2 C#") into the song when. When they submit the form, create a new list item in the "Song Queue" list containing the song's notes. Also clear the text field contents so that they can easily add more songs.

2. When the "Play" button is clicked:
  1. Start playing the top song in the queue.
  2. Remove the top song from the queue.
  3. When the top song is finished playing, repeat with the next top song until there are no songs left to play.

3. When the "Play" button is clicked, slide it up to show that we are currently playing. When the last song is finished playing, slide the "Play" button back down.

## Part 2 - Songs with names

1. Add a "Song Name" text field to the page just above the "Enter a song" field.

2. When the "Enqueue Song" button is clicked, add the song's name to the list item you created. Now the queue should include song names AND the song notes themselves.

3. When the Jukebox is playing a song, a message should show on the page saying "Now Playing [Song Name]". When there is no song playing, the message should say "Enter a song to play.".

## Part 3 - Bonus

1. Only show the song's title in the queue. When you move your mouse over a particular song in the queue, however, fade in the song's notes. When your mouse leaves that song, fade the song's notes back out.

2. Start playing songs as above when you press "spacebar". Make sure you can still enter songs properly in the form (the songs shouldn't start playing if you enter a space while writing the song's notes).