// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.
// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3,
// find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3.
// The answer here would be 6.

function smallestCommons(arr) {
	let bigNum = Math.max(...arr);
	let smallNum = Math.min(...arr);

	let scm = bigNum;
	let fixedFactor = bigNum;

	outerLoop: for (let i = smallNum; i <= bigNum; i++) {
		for (let j = 0; j <= bigNum; j++) {
			if (scm % i == 0) {
				fixedFactor = scm;
				continue outerLoop; // You can also use break
			} else {
				scm += fixedFactor;
			}
		}
	}

	return scm;
}

console.log(smallestCommons([1, 5]));
console.log(smallestCommons([23, 18]));
