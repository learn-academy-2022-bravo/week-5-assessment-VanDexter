// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with expect statements using the variables provided.

// const secretCodeWord1 = "Lackadaisical"
// // Expected output: "L4ck4d41s1c4l"
// const secretCodeWord2 = "Gobbledygook"
// // Expected output: "G0bbl3dyg00k"
// const secretCodeWord3 = "Eccentric"
// // Expected output: "3cc3ntr1c"


// pseudo code
// .replace to find element replace them. Do for each element
//

describe("deCodeifier", () => {
  it("Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0", () => {
    const secretCodeWord1 = "Lackadaisical"
    // Expected output: "L4ck4d41s1c4l"
    const secretCodeWord2 = "Gobbledygook"
    // Expected output: "G0bbl3dyg00k"
    const secretCodeWord3 = "Eccentric"
    // Expected output: "3cc3ntr1c"
    expect(deCodeifier(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(deCodeifier(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(deCodeifier(secretCodeWord3)).toEqual("3cc3ntr1c")
  })
})

// FAIL  ./code-challenges.test.js
//  deCodeifier
//    ✕ Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0 (2 ms)
//
//  ● deCodeifier › Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0

// b) Create the function that makes the test pass.

deCodeifier = (string) => {
  const tester = string.replace(/a/g,'4').replace(/E/g,'3').replace(/e/g,'3').replace(/i/g,'1').replace(/o/g,'0')
    return tester
}

// console.log(deCodeifier(secretCodeWord1));
// console.log(deCodeifier(secretCodeWord2));
// console.log(deCodeifier(secretCodeWord3));


// --------------------2) Create a function that takes in an array of words and a single letter and returns all the words that contain that particular letter.

// a) Create a test with expects statement using the variable provided.

// psuedo code
// create a function that takes in an array and single letter (string)
// use .filter to make new array
// use .include to make it have a certain element


describe("alphabetFruits", () => {
  it("reate a function that takes in an array of words and a single letter and returns all the words that contain that particular letter", () => {
    const arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    const letterA = "a"
    // Expected output: ["Apple", "Banana", "Orange"]
    const arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    const letterE = "e"
    // Expected output: ["Cherry", "Blueberry", "Peach"]
    expect(alphabetFruits(arrayOfWords1, letterA)).toEqual(["Apple", "Banana", "Orange"])
    expect(alphabetFruits(arrayOfWords2, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
  })
})
//
alphabetFruits = (array, string) => {
  const letterSifter = array.filter(function(string) {
  return array.includes(string)
  })
return letterSifter}

// console.log(alphabetFruits(arrayOfWords1, letterA));


// b) Create the function that makes the test pass.


// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

// psuedo code
// conditonal statment to check if indexes equal each other i.e index 0 equals index 1 AND index 3 equals index 4

const hand1 = [5, 5, 5, 3, 3]
// Expected output: true
const hand2 = [5, 5, 3, 3, 4]
// Expected output: false
const hand3 = [5, 5, 5, 5, 4]
// Expected output: false

describe("fullHouseChecker", () => {
  it("Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.", () => {
    const hand1 = [5, 5, 5, 3, 3]
    // Expected output: true
    const hand2 = [5, 5, 3, 3, 4]
    // Expected output: false
    const hand3 = [5, 5, 5, 5, 4]
    // Expected output: false
    expect(fullHouseChecker(hand1)).toEqual(true)
    expect(fullHouseChecker(hand2)).toEqual(false)
    expect(fullHouseChecker(hand3)).toEqual(false)
  })
})

//
// console.log(fullHouseChecker(hand1));
// console.log(fullHouseChecker(hand2));
// console.log(fullHouseChecker(hand3));

// b) Create the function that makes the test pass.

const fullHouseChecker = (arr) => {
    if((arr[0] === arr[1])&&(arr[3] === arr[4])) {
        return true
    }else return false
}
