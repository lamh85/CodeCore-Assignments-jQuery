# Overview

Let's make our Jukebox more user-friendly. Instead of automatically prompting the user for a song, we'll add a "Play" button and only prompt the user for a song when this button is clicked.

I've provided a starting point, a Jukebox that repeatedly prompts for a song and plays it. Your job is to complete the tasks below.

# Tasks

1. Add jQuery to your Jukebox page. Make sure to load jQuery before any other Javascript files on your page.

2. Comment out the `promptAndPlay` functionality in `main.js` so that the page no longer automatically prompts for songs.

3. Add a "Play" button to the page.

4. When the user clicks the "Play" button, the Jukebox should prompt the user to enter a song and play it. Implement this in `main.js`

5. Change the "Play" button to read "Playing..." while the song is playing. Make sure to change it back to "Play" when the song is finished. (Hint: Remember that you can pass a callback function to `playSong` that will get called when a song is finished playing.)

6. [Bonus] Disable the "Play" button while the song is playing. Make sure to re-enable it when the song is finished playing.

