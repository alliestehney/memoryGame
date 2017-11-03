$(document).ready(function() {

	var images = ["images/lions.png", "images/pistons.png", "images/tigers.png", "images/wings.png", "images/lions.png", "images/pistons.png", "images/tigers.png", "images/wings.png"];

	$("#reset").on("click", function() {
		console.log("clicked");

		location.reload();

	});

	$("#start").on("click", function() {
		$("#start").hide();
		$("#game").show();

	});


	// randomly select an image from an array and then remove that from the array


	function randomImage(cardID, images) {
		var random = images[Math.floor(Math.random() * images.length)];
		var itemToRemove = random;

		images.splice($.inArray(itemToRemove, images), 1);
		$(cardID).html("<img src=" + random + ">");
		return images;
	}

	randomImage("#1", images);
	randomImage("#2", images);
	randomImage("#3", images);
	randomImage("#4", images);
	randomImage("#5", images);
	randomImage("#6", images);
	randomImage("#7", images);
	randomImage("#8", images);



	startGame("#one", "#1");
	startGame("#two", "#2");
	startGame("#three", "#3");
	startGame("#four", "#4");
	startGame("#five", "#5");
	startGame("#six", "#6");
	startGame("#seven", "#7");
	startGame("#eight", "#8");


var memoryValues = [];
var elements=[];


function flipOver(frontId) {
	$(frontId).hide();
	$(frontId).siblings().show();
}

function flipBackToFront(backId) {
	$(backId).hide();
	$(backId).siblings().show();
}

var count = 0;

function checkMatch(img1, img2, element1, element2){
	if (img1 === img2) {
        setTimeout(function() {
            $(element1).addClass("disappear");
            $(element2).addClass("disappear");
         }, 3000);

				 count++;
				 if (count === 4) {

				 	 setTimeout(function() {
            			$("#reset").show();
				 		$("#thanks").show();
         			}, 3000);
				 }

	} else {
		// flip back to front and clear values from array
        setTimeout(function() {
          flipBackToFront(element1)
          flipBackToFront(element2);

        }, 3000);

	}

}


 //game starts below, click on card, flip over, start w/ two empty arrays, one stores image file names and the other is storing the elements. at start they're empty. when you click on card, it stores card image in memory value array. and store the element in the element part of the array. once you have two items in the array, it will go to check via check match function. first it will check if images match. we will add the disappear class to the element.
function startGame(frontId, backId) {
$(frontId).on("click", function() {
	flipOver(frontId);
	if (memoryValues.length === 0) {
		memoryValues.push($(backId).html());

        var wholeElement= $(backId);
        console.log(wholeElement);
        elements.push(wholeElement);
        console.log(elements[0]);

    } else if (memoryValues.length === 1) {
        memoryValues.push($(backId).html());
        console.log(memoryValues);
        elements.push($(backId));
        console.log(elements[1]);
		checkMatch(memoryValues[0], memoryValues[1], elements[0], elements[1]);
	    memoryValues = [];
        elements = [];
	}


});
}
}); // end of ready function
