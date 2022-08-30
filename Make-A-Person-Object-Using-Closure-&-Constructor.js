// Fill in the object constructor with the following methods below:

// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)

// Run the tests to see the expected output for each method.
// The methods that take an argument must accept only one argument and it has to be a string.
// These methods must be the only available means of interacting with the object.

const Person = function (firstAndLast) {
	// Only change code below this line
	// Complete the method below and implement the others similarly
	let args = firstAndLast.split(" ");
	let firstName = args[0];
	let lastName = args[1];

	this.getFirstName = function () {
		return firstName;
	};

	this.getLastName = function () {
		return lastName;
	};

	this.getFullName = function () {
		return this.getFirstName() + " " + this.getLastName();
	};

	this.setFirstName = function (first) {
		firstName = first;
	};

	this.setLastName = function (last) {
		lastName = last;
	};

	this.setFullName = function (firstAndLast) {
		let args2 = firstAndLast.split(" ");
		this.setFirstName(args2[0]);
		this.setLastName(args2[1]);
	};

	return firstAndLast;
};

const bob = new Person("Bob Ross");

console.log(bob.getLastName());
