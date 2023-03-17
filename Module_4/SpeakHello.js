(function(window){
    var speakWord = "Hello";
    var helloGreeter = function(name) {
      console.log(speakWord + " " + name);
      }
    window.helloGreeter = helloGreeter;
})(window);