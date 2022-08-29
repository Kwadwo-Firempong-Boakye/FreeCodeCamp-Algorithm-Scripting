// Convert the characters
// &, <, >, " (double quote), and ' (apostrophe), in a string
// to their corresponding HTML entities.

function convertHTML(str) {
	return str
		.split("")
		.map((item) => {
			switch (item) {
				case "&":
					return "&amp;";
					break;

				case "<":
					return "&lt;";
					break;

				case ">":
					return "&gt;";
					break;

				case '"':
					return "&quot;";
					break;

				case "'":
					return "&apos;";
					break;

				default:
					return item;
			}
		})
		.join("");
}

console.log(convertHTML("Dolce & Gabbana"));