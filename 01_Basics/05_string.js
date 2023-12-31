
// [[Prototype]]: String

//  1. anchor: ƒ anchor()
// 2. at: ƒ at()
// 3. big: ƒ big()
// 4. blink: ƒ blink()
// 5. bold: ƒ bold()
// 6. charAt: ƒ charAt()
// 7. charCodeAt: ƒ charCodeAt()
// 8. codePointAt: ƒ codePointAt()
// 9. concat: ƒ concat()
// 10. constructor: ƒ String()
// 11. endsWith: ƒ endsWith()
// 12. fixed: ƒ fixed()
// 13. fontcolor: ƒ fontcolor()
// 14. fontsize: ƒ fontsize()
// 15. includes: ƒ includes()
// 16. indexOf: ƒ indexOf()
// 17. isWellFormed: ƒ isWellFormed()
// 18. italics: ƒ italics()
// 19. lastIndexOf: ƒ lastIndexOf()
// 20. length: 0
// 21. link: ƒ link()
// 22. localeCompare: ƒ localeCompare()
// 23. match: ƒ match()
// 24. matchAll: ƒ matchAll()
// 25. normalize: ƒ normalize()
// 26. padEnd: ƒ padEnd()
// 27. padStart: ƒ padStart()
// 28. repeat: ƒ repeat()
// 29. replace: ƒ replace()
// 30. replaceAll: ƒ replaceAll()
// 31. search: ƒ search()
// 32. slice: ƒ slice()
// 33. small: ƒ small()
// 34. split: ƒ split()
// 35. startsWith: ƒ startsWith()
// 36. strike: ƒ strike()
// 37. sub: ƒ sub()
// 38. substr: ƒ substr()
// 39. substring: ƒ substring()
// 40. sup: ƒ sup()
// 41 toLocaleLowerCase: ƒ toLocaleLowerCase()
// 42. toLocaleUpperCase: ƒ toLocaleUpperCase()
// 43, toLowerCase: ƒ toLowerCase()
// 44. toString: ƒ toString()
// 45. toUpperCase: ƒ toUpperCase()
// 46. toWellFormed: ƒ toWellFormed()
// 47. trim: ƒ trim()
// 48. trimEnd: ƒ trimEnd()
// 49. trimLeft: ƒ trimStart()
// 50. trimRight: ƒ trimEnd()
// 51. trimStart: ƒ trimStart()
// 52. valueOf: ƒ valueOf()
// 53. Symbol(Symbol.iterator): ƒ [Symbol.iterator]()
// [[Prototype]]: Object








const name = "sandeep"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('sandeep-pt')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
// console.log(newString);

const anotherString = gameName.slice(-5, 4)
// console.log(anotherString);


const newStringOne = "   sandeep    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sandeep.com/sandeep%20patel"

console.log(url.replace('%20', '_'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));





