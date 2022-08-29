// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
	let alphabet = "abcdefghijklmnopqrstuvwxyz";
	let strRegex = new RegExp(`${str[0]}`, "i");

	let range = alphabet.match(strRegex);
	let matchIndex = range.index;
	let matchArea = alphabet.slice(matchIndex, matchIndex + str.length + 1);

	let matchFilter = matchArea.split("").filter((letter) => {
		if (!str.includes(letter)) {
			return letter;
		}
	});

	return matchFilter.length != 0 ? matchFilter.toString() : undefined;
}

// console.log(fearNotLetter("abce"));
// console.log(fearNotLetter("abcdefghjklmno"));
// console.log(fearNotLetter("stvwx"));
// console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"))
