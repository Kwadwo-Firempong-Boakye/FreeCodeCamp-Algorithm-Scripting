function findLongestWordLength(str) {
    //Break string into an array of words
    let wordRegex = /\w+/g
    let words = str.match(wordRegex);
    
    //Loop through the array to log the longest word or/and its length.
    let longestWord = [];
    let longestWordLength = 0;
    for(let i = 0;  i < words.length; i++){
      if(words[i].length > longestWordLength){
        longestWord = words[i]
        longestWordLength = words[i].length
      }
    }
    return longestWordLength;
  }
  
  findLongestWordLength("The quick brown fox jumped over the lazy dog");