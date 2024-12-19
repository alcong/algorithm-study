var decodeString = function (s) {
  let stack = [];
  let str = String(s).split("");

  for (let i = 0; i < str.length; i++) {
    stack.push(str[i]);
    if (str[i] === "]") {
      stack.pop();
      let temp = "";

      while (1) {
        p = stack.pop();
        if (p === "[") break;
        else temp = p + temp;
      }
      let num = "";
      while (1) {
        if (stack.length === 0 || isNaN(stack[stack.length - 1])) break;
        num = stack.pop() + num;
      }
      let repStr = temp.repeat(Number(num));
      repStr.split("").forEach((el) => stack.push(el));
    }
  }

  return stack.join("");
};
