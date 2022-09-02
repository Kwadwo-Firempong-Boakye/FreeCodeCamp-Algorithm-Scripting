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

//USING THE RULE OF MULTIPLES AND CHECK FOR THE LEAST COMMON MULTIPLE

function smallestCommons2(arr) {
	let max = Math.max(...arr);
	let min = Math.min(...arr);
	let seq = [];
	for (let i = min; i <= max; i++) {
		seq.push(i);
	}
	let leastCommonMultiple = max;

	const lcm = (num1, num2) => {
		let arr1 = [];
		for (let i = 1; i <= num2; i++) {
			arr1.push(num1 * i);
		}

		let arr2 = [];
		for (let i = 1; i <= num1; i++) {
			arr2.push(num2 * i);
		}

		let commonMultiples = [];

		arr1.forEach((item) => {
			if (arr2.includes(item)) {
				commonMultiples.push(item);
			}
		});

		leastCommonMultiple = Math.min(...commonMultiples);
	};

	seq.forEach((item) => {
		lcm(leastCommonMultiple, item);
	});

	return leastCommonMultiple;
}

smallestCommons([2, 10]);
