// You will be provided with an initial array followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr, ...arr2) {
	return arr.filter((item) => {
		return !arr2.includes(item);
	});
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// Instead of using the spread parameter, you can use Array.from(arguments).slice(1).
// Assign it to a variable abd us it in the final return statement