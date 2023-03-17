(function(window){
    var speakWord = "Good Bye";
    var goodByeGreeter = function(name) {
      console.log(speakWord + " " + name);
      }
    window.goodByeGreeter = goodByeGreeter;
})(window);