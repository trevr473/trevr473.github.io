// when user clicks on a speech bubble
// show the HTML element with emojis that is closest to it
// when user hovers over emoji, make the background of that emoji blue
// if user chooses emoji, hide the rest of the emojis and display the one they clicked on above the speech bubble
// if user clicks outside of speech bubble then hide the emoji menu

// when user clicks on a speech bubble
var allSpeechBubbles = document.getElementsByClassName("speech-bubble");
Array.from(allSpeechBubbles).forEach(function(bubble) {
  bubble.addEventListener('click', function() { showEmojiMenu(bubble); });
});
// show the HTML element with emojis that is closest to it
showEmojiMenu(bubble) {
  var emojiMenuForThisBubble = el.closest(".emoji-menu");
  emojiMenuForThisBubble.classList.add("show");
}