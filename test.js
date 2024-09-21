// Import the function sum from the app.js file
const { sum } = require('./app.js');

test("One euro should be 1.07 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');

    const dollars = fromEuroToDollar(3.5);

    const expected = 3.5 * 1.07; 
    
     expect(fromEuroToDollar(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("3.5 dollars should be 511.91 yen", () => {
    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(3.5);

    const expected = 3.5 / 1.07 * 156.5; 
    
     expect(fromDollarToYen(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})
test("3.5 yen should be 1.07 pounds", () => {
    const { fromYenToPound } = require('./app.js');

    const pound = fromYenToPound(3.5);

    const expected = 3.5 / 156.5 * 0.87; 
    
     expect(fromYenToPound(3.5)).toBe(expected); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
})