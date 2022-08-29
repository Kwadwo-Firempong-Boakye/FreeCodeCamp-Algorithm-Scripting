// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2.
// In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

function sumPrimes(num) {
	let genNum = [];
	let prime = [];

	//first generate array of numbers less than num.
	//note that 1 is not included in the generated array.
	for (let i = 2; i <= num; i++) {
		genNum.push(i);
	}

	//for each generated number, create an array of number to check if they can perfectly divide the number in question.
	//filter generated numbers to remove the number in question from its array to create this new array.
	//this allows us to check if any other generated numbers can perfectly divide the number in question.
	genNum.forEach((item) => {
		let selectDividers = genNum.filter((divider) => divider != item);

		//if every divider number fails to perfectly divide the number in question,
		//then the number in question is a prime number. Push it to the prime array
		//and reduce prime array to sum it.
		if (selectDividers.every((divider) => item % divider != 0)) {
			prime.push(item);
		}
	});

	return prime.reduce((a, b) => a + b);
}

// sumPrimes(10);
console.log(sumPrimes(977));
