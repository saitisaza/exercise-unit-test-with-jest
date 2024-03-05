test("One euro should be 1.07 dollars", () => {
    // Import the function from app.js
    const { fromEuroToDollar } = require('./app.js');

    // Use the function like its supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
     
    })
    
    test("One dollar should be 156.5 yens", () => {
        // Import the function from app.js
        const { fromDollarToYen } = require('./app.js');
    
        // Use the function like its supposed to be used
        const dollars = fromDollarToYen(3.5);
    
        // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
        const expected = 3.5 * 156.5; 
        
        // This is the comparison for the unit test
         expect(fromDollarToYen(3.5)).toBe(547.75); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
         
        })

        test("One yen should be 0.87 pounds", () => {
            // Import the function from app.js
            const { fromYenToPound } = require('./app.js');
        
            // Use the function like its supposed to be used
            const dollars = fromYenToPound(3.5);
        
            // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
            const expected = 3.5 * 0.87; 
            
            // This is the comparison for the unit test
             expect(fromYenToPound(3.5)).toBe(3.045); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
             
            })
        