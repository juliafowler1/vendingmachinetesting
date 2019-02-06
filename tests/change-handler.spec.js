// These test cases are all unfinished. We will finish them together.
// describe("tests for change-handler", function() {

    // Set up a test below...
    // it("does something (change this)", function() {
    //     // Remember, you can arrange, act, and assert...start small
    //     expect(changethis).toBeDefined();
    // });
    it("insert a penny)", function() {
        let vendingMachine = new ChangeHandler(100)
        // Remember, you can arrange, act, and assert...start small
        vendingMachine.insertCoin("penny")
        expect(vendingMachine.cashTendered).toBe(1);
    });
// })