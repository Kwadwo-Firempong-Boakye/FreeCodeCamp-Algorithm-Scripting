// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

function sumFibs(num) {
	//fibonacci generator
	let fibArr = [1, 1];
	for (let i = 2; i < num; i++) {
		let sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
		fibArr.push(sum);
	}
	// console.log(fibArr)
	return fibArr
		.filter((item) => {
			return item % 2 == 1 && item <= num;
		})
		.reduce((a, b) => a + b);
	// return num;
}

console.log(sumFibs(4));
console.log(sumFibs(1));
