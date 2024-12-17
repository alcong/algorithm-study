/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

var gcdOfStrings = function(str1, str2) {
  const length1 = str1.length;
  const length2 = str2.length;
  let gcdNum;

  if (str1+str2 !== str2+str1) return "";

  if (length1 > length2) {
      gcdNum = gcd(length1, length2);
  } else {
      gcdNum = gcd(length2, length1);
  }

  const subStr = str1.slice(0, gcdNum);

  return subStr;
};

const gcd = (a, b) => {
  if (b === 0) return a;
  else return gcd(b, a%b);
}