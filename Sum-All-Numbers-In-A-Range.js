// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.
// For example, sumAll([4,1]) should return 10
// because sum of all the numbers between 1 and 4 (both inclusive) is 10.

function sumAll(arr) {
	let bigger = Math.max(arr[0], arr[1]);
	let smaller = Math.min(arr[0], arr[1]);
	let num = 0;

	while (bigger >= smaller) {
		num += bigger;
		bigger--;
	}

	return num;
}

console.log(sumAll([1, 4]));
console.log(sumAll([5, 10]));