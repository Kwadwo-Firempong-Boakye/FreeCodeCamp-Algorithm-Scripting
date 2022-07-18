function confirmEnding(str, target) {
    //Use the RegExp Constructor to create expression for target at end of string.
    let regexForTarget = new RegExp(target + "$");
  
    //Use Regex match method to check if theres a match for target at str end.
    let checkIfTargetAtEndOfString = str.match(regexForTarget);
    
    //if checkIfTargetAtEndOfString does not return null then voila! Target is at the end of str.
    if(checkIfTargetAtEndOfString !== null){
      return true;
    } else {
      return false;
    }
  }

  confirmEnding("Bastian", "n");