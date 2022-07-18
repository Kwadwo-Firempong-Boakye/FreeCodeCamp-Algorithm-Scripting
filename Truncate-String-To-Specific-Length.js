//Using the slice method on str and ternary operator
function truncateString(str, num) {
    let slicedStr = "";
    return (str.length > num) ? slicedStr = str.slice(0, num) + "..." : str
  }

  truncateString("A-tisket a-tasket A green and yellow basket", 8);


