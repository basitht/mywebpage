
        function play() {
            document.getElementById("audio").play();
              
          }
		  function preventDefaultAction(evt) {
  evt.preventDefault();
}

window.addEventListener("dblclick", preventDefaultAction, false);

