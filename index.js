function isPalindrome(word) {
  // Write your algorithm here
  const chars = word.split('');
  let i = 0;
  let j = chars.length - 1;
  for(; j >= i; i++, j--){
    if(chars[i] === chars[j])
      continue;
    else if(chars[i] !== chars[j])
      return false;
    else if(i === j)
      break;
  }
  return true;
 }

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
