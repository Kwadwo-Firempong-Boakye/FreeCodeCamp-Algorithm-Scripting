// Pairs of DNA strands consist of nucleobase pairs.
// Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.
// The DNA strand is missing the pairing element. 
// Write a function to match the missing base pairs for the provided DNA strand. 
// For each character in the provided string, find the base pair character. Return the results as a 2d array.
// For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]


function pairElement(str) {
	let strArr = [...str];
	let containerArr = [];
	let pairArr = [];
	for (let i = 0; i < strArr.length; i++) {
		switch (strArr[i]) {
			case "C":
				pairArr.push(strArr[i]);
				pairArr.push("G");
				break;

			case "G":
				pairArr.push(strArr[i]);
				pairArr.push("C");
				break;

			case "A":
				pairArr.push(strArr[i]);
				pairArr.push("T");
				break;

			case "T":
				pairArr.push(strArr[i]);
				pairArr.push("A");
				break;
		}
		containerArr.push(pairArr);
		pairArr = [];
	}
	return containerArr;
}

console.log(pairElement("GCG"));
