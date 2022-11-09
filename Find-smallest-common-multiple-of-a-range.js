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

//I DONT EVEN KNOW WHY I PUT MYSELF THROUGH THIS METHOD OF PRIME FACTORIZATION

function smallestCommons(arr) {
	let maxNum = Math.max(...arr);
	let minNum = Math.min(...arr);
	let fullArr = [];
	for (let i = minNum; i <= maxNum; i++) {
		if (i != 1) fullArr.push(i);
	}

	const determinePrimes = (num, arr1, arr2) => {
		let dividers = [];
		for (let i = 2; i < num; i++) {
			dividers.push(i);
		}
		if (dividers.every((divider) => num % divider != 0)) {
			arr1.push(num);
			return "yes";
		} else {
			arr2.push(num);
			return "no";
		}
	};

	let primes = [];
	let nonPrimes = [];

	fullArr.forEach((fullNum) => {
		determinePrimes(fullNum, primes, nonPrimes);
	});

	let tempPrimeFactors = [];
	let primeFactors = [];
	let uniquePrimeFactors = [];

	nonPrimes.forEach((num) => {
		let tempPrime = [];
		let tempNonPrime = [];
		for (let i = 2; i < num; i++) {
			let quot = num;
			if (determinePrimes(i, tempPrime, tempNonPrime) == "yes") {
				while (quot % i == 0) {
					tempPrimeFactors.push(i);
					if (!uniquePrimeFactors.includes(i)) {
						uniquePrimeFactors.push(i);
					}
					quot = quot / i;
				}
			}
		}
		primeFactors.push(tempPrimeFactors);
		tempPrimeFactors = [];
	});

	let finalFactors = [];
	let groupedFactors = [];
	let nonRepeatedPrimes = [];

	uniquePrimeFactors.forEach((num) => {
		let tempGroup = [];
		let length = 1;
		let index = 0;
		primeFactors.forEach((arr) => {
			let temp = arr.filter((item) => item == num);
			if (temp.length > 0) tempGroup.push(temp);
		});
		tempGroup.forEach((arr, i) => {
			if (arr.length > length) {
				length = arr.length;
				index = i;
			}
		});
		groupedFactors.push(tempGroup[index]);
		finalFactors.push(tempGroup[index].reduce((acc, cur) => acc * cur));
	});

	let count = 0;
	primes.forEach((prime) => {
		groupedFactors.forEach((group) => {
			if (group.includes(prime)) {
				count += 1;
			}
		});
		if (count == 0) {
			finalFactors.push(prime);
		}
		count = 0;
	});

	let scm = finalFactors.reduce((acc, cur) => acc * cur);

	return scm;
}

smallestCommons([1, 5]);
smallestCommons([1, 13]);
smallestCommons([2, 10]);
smallestCommons([23, 18]);
