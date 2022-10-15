export const encode = string => {
  let encodedStr = '';
  let currentChar = '';
  let count = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i] === currentChar) {
      count++;
    } else {
      if (count > 1) {
        encodedStr += count;
      }
      encodedStr += currentChar;
      currentChar = string[i];
      count = 1;
    }
  }
  if (count > 1) {
    encodedStr += count;
  }
  encodedStr += currentChar;
  return encodedStr;
};

export const decode = string => {
  let decodedStr = '';
  let count = '';

  for (let i = 0; i < string.length; i++) {
    if (/\d/.test(string[i])) {
      count += string[i];
    } else {
      if (count) {
        decodedStr += string[i].repeat(count);
        count = '';
      } else {
        decodedStr += string[i];
      }
    }
  }
  return decodedStr;
};
