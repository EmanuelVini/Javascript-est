function isPalindrome(str) {
  strReverse = str.split('').reverse().join('');

  return strReverse === str;
}

console.log(isPalindrome('banana'));
