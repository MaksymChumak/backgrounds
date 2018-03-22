var bg = document.getElementById('bg');
var bgPosX = 0;
var bgPosY = 0;
var bgHeight = 300;

// Level 5 - functions

function moveBG(keyCode, shiftIsPressed) {
	if (keyCode == 37) {
		bgPosX -= 10;
	}
	if (keyCode == 38) {
		bgPosY += 10;
	}
	if (keyCode == 39) {
		bgPosX += 10;
	}
	if (keyCode == 40) {
		bgPosY -= 10;
	}
	
	if (shiftIsPressed  && keyCode == 187) {
		bgHeight = Number(bgHeight) + 10;
		bg.style.height = bgHeight + 'px';
	}
	
	if (keyCode == 189) {
		if (bg.clientHeight > 0) {
			bgHeight = bgHeight - 10;
			bg.style.height = bgHeight + 'px';
		}
	}
	bg.style.backgroundPosition = bgPosX + "px " + bgPosY + "px";
}

// Level 3 Calculations

document.addEventListener('keyup', function(ev) {
	// left: 37, up: 38, right: 39, down: 40
	var keyCode = ev.keyCode;
	var shiftIsPressed = ev.shiftKey;
	moveBG(keyCode, shiftIsPressed);
});
