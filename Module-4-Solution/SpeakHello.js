(function () {
	var helloSpeaker = new Object()
	var speakword = "HELLO";
	helloSpeaker.speak = function (name) {
		console.log(speakword + " " + name);
	};
	window.helloSpeaker = helloSpeaker ;
}) (window);