// The rules are as follows:
// If a word begins with a consonant,
// take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// If a word begins with a vowel, just add way at the end.

function translatePigLatin(str) {
	let strArr = str.split("");
	let vowels = ["a", "e", "i", "o", "u"];
	let chopped = [];

	if (vowels.some((letter) => letter == str[0])) {
		return str + "way";
	}

	for (let i = 0; i < str.length; i++) {
		if (vowels.some((letter) => letter == str[i])) {
			return strArr.join("") + chopped.join("") + "ay";
		} else {
			chopped.push(str[i]);
			strArr.shift();
		}
	}
	return str + "ay";
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("eight"));
console.log(translatePigLatin("rhythm"));

//HERE IS AN ELEGANT REGEX VERSION

function translatePigLatin2(str) {
	return str.match(/^[aeiou]+/)
		? str + "way"
		: str.replace(/^(\w+?)(?=[aeiou])(.*)/, "$2$1ay");
}

translatePigLatin2("glove");
