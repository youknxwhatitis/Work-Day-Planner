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
var btnFour = $("#four");
var inputFour = $("#4");

onPageLoad();

// Runs the setValue and getCurrentDate functions on page load.
function onPageLoad() {
	setValue();
	getCurrentDate();

	// Creates an array of local storage keys.
	var keys = [
		"entryNine",
		"entryTen",
		"entryElev",
		"entryTwel",
		"entryOne",
		"entryTwo",
		"entryThree",
		"entryFour",
	];

	// Gets the values from all of the local Storage keys and sets those values to the corresponding text area.
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

// Set the value of the text areas to local storage when the save button is clicked.
function setValue() {
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
	$(btnFour).on("click", function () {
		var inputFourValue = $("#4").val();
		localStorage.setItem("entryFour", inputFourValue);
	});
}

// Setting the local date and time to the current day paragraph.
function getCurrentDate() {
	var today = moment().format("dddd, MMMM Do");
	var currentDay = $("#currentDay");
	currentDay.html(today);
}

// Sets the current hour to military time.
const hour = moment().format("H");

// Creates an array of the text areas.
var hourArray = [];
hourArray.push($(".nine"));
hourArray.push($(".ten"));
hourArray.push($(".eleven"));
hourArray.push($(".twelve"));
hourArray.push($(".one"));
hourArray.push($(".two"));
hourArray.push($(".three"));
hourArray.push($(".four"));

// Gives the text areas number values according to military time.
$(".nine").data("val", 9);
$(".ten").data("val", 10);
$(".eleven").data("val", 11);
$(".twelve").data("val", 12);
$(".one").data("val", 13);
$(".two").data("val", 14);
$(".three").data("val", 15);
$(".four").data("val", 16);

// Set the colors of the text areas to relfect the current time, past and future.
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