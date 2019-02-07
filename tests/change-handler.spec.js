// These test cases are all unfinished. We will finish them together.
// describe("tests for change-handler", function() {

    // Set up a test below...
    // it("does something (change this)", function() {
    //     // Remember, you can arrange, act, and assert...start small
    //     expect(changethis).toBeDefined();
    // });
    // it("inserting a penny adds 1 to cashtendered", function() {
    //     let vendingMachine = new ChangeHandler(50)
    //     // Remember, you can arrange, act, and assert...start small
    //     vendingMachine.insertCoin("penny")
    //     expect(vendingMachine.cashTendered).toBe(1);
    // });
    // it("inserting a nickel adds 5 to cashtendered", function() {
    //     let vendingMachine = new ChangeHandler(50)
    //     // Remember, you can arrange, act, and assert...start small
    //     vendingMachine.insertCoin("nickel")
    //     expect(vendingMachine.cashTendered).toBe(5);
    // });
    // it("inserting a dime adds 10 to cashtendered", function() {
    //     let vendingMachine = new ChangeHandler(50)
    //     // Remember, you can arrange, act, and assert...start small
    //     vendingMachine.insertCoin("dime")
    //     expect(vendingMachine.cashTendered).toBe(10);
    // });

    // Returns true if cashTendered more than amountDue.
    it(" Returns true if cashTendered more than amountDue.", function () {
        const vendingMachine = new ChangeHandler(50)
        vendingMachine.insertCoin("quarter")
        vendingMachine.insertCoin("quarter")
        vendingMachine.insertCoin("quarter")
        expect(vendingMachine.isPaymentSufficient()).toBe(true);
    });

    // it("inserting a quarter adds 25 to cashtendered)", function() {
    //     let vendingMachine = new ChangeHandler(100)
    //     // Remember, you can arrange, act, and assert...start small
    //     vendingMachine.insertCoin("quarter")
    //     expect(vendingMachine.cashTendered).toBe(25);
    // });
//         it("inserting a quarter adds 25 to cashtendered", function() {
//         let vendingMachine = new ChangeHandler(100)
//         // Remember, you can arrange, act, and assert...start small
//         vendingMachine.insertCoin("quarter")
//         expect(vendingMachine.cashTendered).toBe(25);
    
// });