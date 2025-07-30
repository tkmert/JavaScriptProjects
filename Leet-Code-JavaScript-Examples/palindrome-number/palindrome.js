var sayi = 121;

var isPalindrome = function(x) {
  let sayi1tostr = x.toString();
  let reversedStr = sayi1tostr.split('').reverse().join('');

  if (sayi1tostr === reversedStr) {
  } else {
    return false;
  }
}

console.log(isPalindrome(sayi));