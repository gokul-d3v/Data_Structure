// check a string is palindrome or not

const isPalindrome = (item) => {
  let str = "";
  for (let i = item.length - 1; i >= 0; i--) {
    str += item[i];
  }
  return item == str;
};

// return the count of each characters in a string as an object

const checkChar = (item) => {
  if (item.length == 1) {
    return;
  }
  let char = {};
  for (let i = 0; i < item.length; i++) {
    let str = item[i];
    if (char[str]) {
      char[str]++;
    } else {
      char[str] = 1;
    }
  }
  return char;
};

// reverse letters in the word

const revLetter = (item) => {
  let conv = item.split(" ");
  let res = [];
  const doRev = (str) => {
    let newStr = "";
    for (let k = str.length - 1; k >= 0; k--) {
      newStr += str[k];
    }
    return newStr;
  };
  for (let i = 0; i < conv.length; i++) {
    res.push(doRev(conv[i]));
  }
  return res.join(" ");
};
