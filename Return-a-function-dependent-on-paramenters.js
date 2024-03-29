// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);

// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether(param) {
	let args = Array.from(arguments);

	if (args.length == 2 && args.every((item) => typeof item == "number")) {
		return args[0] + args[1];

	} else if (args.length == 1 && typeof args[0] == "number") {
		let curried = function (param) {
			if (typeof param == "number")
				return function (args2) {
					if (typeof args2 == "number") return param + args2;
				};
		};
		return curried(param);
        
	} else {
		return undefined;
	}
}

console.log(addTogether(2)(3));
