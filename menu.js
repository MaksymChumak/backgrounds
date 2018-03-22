var menu = document.getElementById('menu');
var controls = document.getElementById('controls');
var bgInput = document.getElementById('bg-input');
var titleInput = document.getElementById('title-input');
var colorInput = document.getElementById('color-input');
var descriptionInput = document.getElementById('description-input');
var bg = document.getElementById('bg');
var title = document.getElementById('title');
var description = document.getElementById('description');
var currentBgUrl = "url(./img/bg1.jpg)";
colorInput.defaultValue = '#D3D3D3';

// Level 5 - functions

function expandMenu() {	
	controls.style.bottom = '0px';
};

function changeColor() {
	title.style.color = colorInput.value;
	description.style.color = colorInput.value;
};

function changeDescription() {
	description.innerHTML = descriptionInput.value;
}

function changeTitle() {
	title.innerHTML = titleInput.value;
}

function changeBG() {
	var bgUrl = bgInput.value
	if (bgUrl == 'horse') {
		bg.style.backgroundImage = "url(./img/bg1.jpg)";
		currentBgUrl = "url(./img/bg1.jpg)";
			
	} else if (bgUrl == 'night') {
		bg.style.backgroundImage = "url(./img/bg2.jpg)";
		currentBgUrl = "url(./img/bg2.jpg)";
			
	} else if (bgUrl == 'mountain') {
		bg.style.backgroundImage = "url(./img/bg3.jpg)";
		currentBgUrl = "url(./img/bg3.jpg)";
			
	} else if (bgUrl.indexOf('epic') != -1) {
			bg.style.backgroundImage = "url(./img/bg4.jpeg)";
			currentBgUrl = "url(./img/bg4.jpeg)";
			
	} else {
			bg.style.backgroundImage = "url(" + bgUrl + ")";
			currentBgUrl = "url(" + bgUrl + ")";
	}
};

// Level 2 - simple JS

menu.addEventListener('click', function() {
	expandMenu();
});

bgInput.addEventListener('keyup', function(ev) {
	if (ev.keyCode == 13) {
		changeBG();
	}
});

titleInput.addEventListener('keyup', function() {
	changeTitle();
});

descriptionInput.addEventListener('keyup', function() {
	changeDescription();
});

colorInput.addEventListener('change', function() {
	changeColor();
});

// Level 6 - creating new elements 

var createComponent = document.getElementById('create-component');

function createBg() {
	var displayDiv = document.getElementById('display');
	var myBg = document.createElement('div');
	var myTitle = document.createElement('div');
	var myDescription = document.createElement('div');
	var currentTextColor = colorInput.value;

	
  myDescription.style.cssText = 'position: absolute; left: 10%; top: 20%; color: ' + currentTextColor + ';'
	myTitle.style.cssText = 'position: absolute; text-align: center; left: 10%; top: 10%; font-size: 20px; border-bottom: 1px solid grey; color: ' + currentTextColor + ';';
	
	myBg.style.backgroundImage = currentBgUrl;
	myTitle.innerHTML = title.innerHTML;
	myDescription.innerHTML = description.innerHTML;
	

	myBg.classList += 'my-bg ';
	myBg.classList += 'col-lg-3 col-md-4 col-sm-6 col-12';
	myBg.appendChild(myTitle);
	myBg.appendChild(myDescription);
	displayDiv.appendChild(myBg);
	
};

createComponent.addEventListener('click', function() {
	createBg();
});
