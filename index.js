let code1;
code1 = 7 + 3;
let code2 = 100 / 2 - 10;
let code3 = (12 % 9) * 13;
let message = "The vault is secured. The combination is: ";
let codeA = code1 + "-" + code2 + "-" + code3;
console.log(codeA);
let codeB = `${code1}-${code2}-${code3}`;
console.log(message + codeA + " " + codeB);
