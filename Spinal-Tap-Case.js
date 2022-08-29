// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.


function spinalCase(str) {
	let newarr = [];
	let arrstr = str.split(""); //split str into individual characters
	let testRegex = /[A-Z]/; //make a regex to test for alphabets

	//If character is not an alphabet, then add a space to its front
	arrstr.forEach((item) => {
		if (!testRegex.test(item)) {
			newarr.push(item);
		} else {
			newarr.push(" ");
			newarr.push(item);
		}
	});

	let semiclean = newarr.join(""); //get a string that has each group of letters together separated by spaces.
	let matchRegex = /[a-z]+/gi; //create a regex to match alphabets in any case

	return semiclean //return matched items with hyphens and in lowercase
		.match(matchRegex)
		.join("-")
		.toLowerCase();
}

//ALTERNATIVE SOLUTION MORE ELEGANT

function spinalCase2(str) {
	return str
		.split(/\s|_|(?=[A-Z])/) // split string by whitespace, underscore, or any point that precedes a capital letter
		.join("-")
		.toLowerCase();
}

console.log(spinalCase2("This Is Spinal Tap"));

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
