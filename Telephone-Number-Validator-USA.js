// Return true if the passed string looks like a valid US phone number.

// The user may fill out the form field any way they choose as long as it has the format of a valid US number.

// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
// Your job is to validate or reject the US phone number based on any combination of the formats provided above.
// The area code is required. If the country code is provided, you must confirm that the country code is 1.
// Return true if the string is a valid US phone number; otherwise return false.

function telephoneCheck(str) {
	//use regex to create an array of numbers
	//check number length - if length is 11 - check first number
	// if first number is not "1", return false else,
	//check if length is 10, if not, return false
	//if length is 10 - create regex for checking brackets

	const numRegex = /[0-9]/g;
	const leftBracketRegex = /\(/;
	const rightBracketRegex = /\)/;
	const dashRegex = /-/;
	const spaceRegex = /\s/;
	const allowedRegex = /[0-9]|-|\(|\)|\s/g;
	const regexStrArr = str.match(numRegex);

	//Create function that checks that every item in str is eligible for processing using allowedRegex
	const charTest = str.split("").every((item) => {
		return item.match(allowedRegex);
	});

	//Create a function that checks str for presence of "(" - if indexof "(" is not 0,1,2 - return false
	//check str for last index of "(" - if it is not the same as first index of "(" - return false
	//if it is check str for presence of ")" at 4 indexes away - if it isn't there - return false
	const bracketCheck = (str) => {
		if (str.match(leftBracketRegex) != null) {
			if (str.indexOf("(") != str.lastIndexOf("(")) {
				return false;
			} else if (str.indexOf("(") > 2) {
				return false;
			} else if (str.match(rightBracketRegex) == null) {
				return false;
			} else if (str.indexOf(")") != str.lastIndexOf(")")) {
				return false;
			} else if (str.indexOf(")") != str.indexOf("(") + 4) {
				return false;
			} else {
				return nonDigitTest(str);
			}
		} else if (str.match(rightBracketRegex)) {
			return false;
		} else {
			return nonDigitTest(str);
		}
	};

	const nonDigitTest = (str) => {
		if (str.match(dashRegex)) {
			if (
				str.indexOf(str.match(dashRegex)) -
					str.lastIndexOf(str.match(dashRegex)) ==
					-4 ||
				str.indexOf(str.match(dashRegex)) -
					str.lastIndexOf(str.match(dashRegex)) ==
					0
			) {
				return true;
			} else {
				return false;
			}
		} else if (str.match(spaceRegex)) {
			if (
				str.indexOf(str.match(spaceRegex)) -
					str.lastIndexOf(str.match(spaceRegex)) ==
					-8 ||
				str.indexOf(str.match(spaceRegex)) -
					str.lastIndexOf(str.match(spaceRegex)) ==
					-4 ||
				str.indexOf(str.match(spaceRegex)) -
					str.lastIndexOf(str.match(spaceRegex)) ==
					0
			) {
				return true;
			} else {
				return false;
			}
		} else if (
			str.match(leftBracketRegex) &&
			(str.indexOf(str.match(spaceRegex)) -
				str.lastIndexOf(str.match(spaceRegex)) ==
				-10 ||
				str.indexOf(str.match(spaceRegex)) -
					str.lastIndexOf(str.match(spaceRegex)) ==
					-6)
		) {
			return true;
		} else if (str.length == 10) {
			return true;
		} else {
			return false;
		}
	};

	////////////////////////------MAIN FUNCTION------////////////////////////

	if (!charTest) {
		return false;
	}

	if (regexStrArr.length == 10 || regexStrArr.length == 11) {
		if (regexStrArr.length == 11 && regexStrArr[0] != 1) {
			return false;
		} else {
			return bracketCheck(str);
		}
	} else if (regexStrArr.length < 10 || regexStrArr.length > 11) {
		return false;
	}
}

telephoneCheck("555-555-5555");
// console.log(telephoneCheck("5555555555"));
