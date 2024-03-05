// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}



// We declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen  = function(valueInDollar) {
    // Convert the given valueInEuro to dollars
    let valueInYen = valueInDollar * 156.5;
    // return the dollar value
    return valueInYen;
}

const fromYenToPound  = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.87;
    // return the dollar value
    return valueInPound;
}

module.exports = {
    fromEuroToDollar, fromDollarToYen,fromYenToPound
    }