var btnEight = $("eight");
var inputEight = $("8")
var btnNine = $("#nine");
var inputNine = $("#9");
var btnTen = $("#ten");
var inputTen = $("#10");
var btnElev = $("#eleven");
var inputElev = $("#11");
var btnTwel = $("#twelve");
var inputTwel = $("#12");
var btnOne = $("#one");
var inputOne = $("#1");
var btnTwo = $("#two");
var inputTwo = $("#2");
var btnThree = $("#three");
var inputThree = $("#3");


onPageLoad();

// sets local time and date 
function getCurrentDate() {
	var today = moment().format("MMMM Do YYYY, h:mm:ss a");
	var currentDay = $("#currentDay");
	currentDay.html(today);
}


let hour = moment().format("H");


function onPageLoad() {
	setValue();
	getCurrentDate();

	// created an array for local storage key frames
	var keys = [
        "entryEight",
		"entryNine",
		"entryTen",
		"entryElev",
		"entryTwel",
		"entryOne",
		"entryTwo",
		"entryThree",
	];

	
	for (var i = 0; i < localStorage.length; i++) {
		inputNine.val(localStorage.getItem(keys[0]));
		inputTen.val(localStorage.getItem(keys[1]));
		inputElev.val(localStorage.getItem(keys[2]));
		inputTwel.val(localStorage.getItem(keys[3]));
		inputOne.val(localStorage.getItem(keys[4]));
		inputTwo.val(localStorage.getItem(keys[5]));
		inputThree.val(localStorage.getItem(keys[6]));
		inputFour.val(localStorage.getItem(keys[7]));
	}
}

//sets value when clicking button 
function setValue() {
    $(btnEight).on("click", function () {
		var inputNineValue = $("#8").val();
		localStorage.setItem("entryNine", inputNineValue);
	});
	$(btnNine).on("click", function () {
		var inputNineValue = $("#9").val();
		localStorage.setItem("entryNine", inputNineValue);
	});
	$(btnTen).on("click", function () {
		var inputTenValue = $("#10").val();
		localStorage.setItem("entryTen", inputTenValue);
	});
	$(btnElev).on("click", function () {
		var inputElevValue = $("#11").val();
		localStorage.setItem("entryElev", inputElevValue);
	});
	$(btnTwel).on("click", function () {
		var inputTwelValue = $("#12").val();
		localStorage.setItem("entryTwel", inputTwelValue);
	});
	$(btnOne).on("click", function () {
		var inputOneValue = $("#1").val();
		localStorage.setItem("entryOne", inputOneValue);
	});
	$(btnTwo).on("click", function () {
		var inputTwoValue = $("#2").val();
		localStorage.setItem("entryTwo", inputTwoValue);
	});
	$(btnThree).on("click", function () {
		var inputThreeValue = $("#3").val();
		localStorage.setItem("entryThree", inputThreeValue);
	});

}





// push array 
var hourArray = [];
hourArray.push($(".eight"));
hourArray.push($(".nine"));
hourArray.push($(".ten"));
hourArray.push($(".eleven"));
hourArray.push($(".twelve"));
hourArray.push($(".one"));
hourArray.push($(".two"));
hourArray.push($(".three"));



$(".eight").data("val",8);
$(".nine").data("val", 9);
$(".ten").data("val", 10);
$(".eleven").data("val", 11);
$(".twelve").data("val", 12);
$(".one").data("val", 13);
$(".two").data("val", 14);
$(".three").data("val", 15);


// changes color based on time
function setColors() {
	for (i = 0; i < hourArray.length; i++) {
		console.log(hourArray[i].data("val"));
		if (hour < hourArray[i].data("val")) {
			hourArray[i].attr("class", "future");
		} else if (hour > hourArray[i].data("val")) {
			hourArray[i].attr("class", "past");
		} else {
			hourArray[i].attr("class", "present");
		}
	}
}
setColors();