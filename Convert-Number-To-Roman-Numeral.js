// Convert the given number into a roman numeral.
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
	let reference = {
		1000: "M",
		900: "CM",
		500: "D",
		400: "CD",
		100: "C",
		90: "XC",
		50: "L",
		40: "XL",
		10: "X",
		9: "IX",
		5: "V",
		4: "IV",
		1: "I",
	};
	let romanNum = [];
	let arrNum = num.toString().split("");

	let ones = (value) => {
		if (reference.hasOwnProperty(value)) {
			romanNum.push(reference[value]);
		} else if (+value < 4) {
			for (let i = 0; i < +value; i++) {
				romanNum.push("I");
			}
		} else if (+value > 5 && +value < 9) {
			romanNum.push("V");
			for (let j = 5; j < +value; j++) {
				romanNum.push("I");
			}
		}
	};
	//////////
	let tens = (value) => {
		let tensValue = (value[0] * 10).toString();
		let onesValue = value[1];

		if (reference.hasOwnProperty(tensValue)) {
			romanNum.push(reference[tensValue]);
		} else if (+tensValue < 40) {
			for (let i = 0; i < +tensValue; i += 10) {
				romanNum.push("X");
			}
		} else if (+tensValue > 50 && +tensValue < 90) {
			romanNum.push("L");
			for (let j = 50; j < +tensValue; j += 10) {
				romanNum.push("X");
			}
		}
		ones(onesValue);
	};
	//////////
	let hundreds = (value) => {
		let hundredsValue = (value[0] * 100).toString();
		let tensValue = (value[1] * 10).toString();
		let onesValue = value[2];

		if (reference.hasOwnProperty(hundredsValue)) {
			romanNum.push(reference[hundredsValue]);
		} else if (+hundredsValue < 400) {
			for (let i = 0; i < +hundredsValue; i += 100) {
				romanNum.push("C");
			}
		} else if (+hundredsValue > 500 && +hundredsValue < 900) {
			romanNum.push("D");
			for (let j = 500; j < +hundredsValue; j += 100) {
				romanNum.push("C");
			}
		}
		tens(tensValue);
		ones(onesValue);
	};
	//////////
	let thousands = (value) => {
		let thousandsValue = (value[0] * 1000).toString();
		let hundredsValue = (value[1] * 100).toString();
		let tensValue = (value[2] * 10).toString();
		let onesValue = value[3];

		if (reference.hasOwnProperty(thousandsValue)) {
			romanNum.push(reference[thousandsValue]);
		} else {
			for (let i = 0; i < +thousandsValue; i += 1000) {
				romanNum.push("M");
			}
		}
		hundreds(hundredsValue);
		tens(tensValue);
		ones(onesValue);
	};
	//////////
	let convert = (arrNum) => {
		if (arrNum.length == 4) {
			thousands(arrNum);
		} else if (arrNum.length == 3) {
			hundreds(arrNum);
		} else if (arrNum.length == 2) {
			tens(arrNum);
		} else {
			ones(arrNum);
		}
	};
	//////////
	convert(arrNum);
	return romanNum.join("");
}

console.log(convertToRoman(51));
