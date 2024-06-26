// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 146.26;
    // return the dollar value
    return valueInYen;
}

console.log(fromDollarToYen(12));

const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.0056;
    // return the dollar value
    return valueInPound;
}

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };