/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */

class ChangeHandler {

    constructor(amountDue) { //single value, single number
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * The parameter "type" is a string that is either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
        if (type === "penny") {
            this.cashTendered += 1;
        } else if (type === "nickel") {
            this.cashTendered += 5;
        } else if (type === "dime") {
            this.cashTendered += 10;
        } else if (type === "quarter") {
            this.cashTendered += 25;
        };
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    xisPaymentSufficient() {
        if (cashTendered >= amountDue) {
            return true;
        }
        else {
            return false;
        }
    };

    xgiveChange() {
        // TODO return the correct change in the following format...
        let change = this.cashTendered - this.amountDue;
        let pennies = 0;
        let nickels = 0;
        let dimes = 0;
        let quarters = 0;
        while (change > 0) {
            if (change >= 25) {
                quarters = quarters + 1;
                change -= 25;
            }
            if (change >= 10) {
                dimes = dimes + 1;
                change -= 10;
            }
            if (change >= 5) {
                nickels = nickels + 1;
                change -= 5;
            }
            if (change >= 1) {
                pennies = pennies + 1;
                change -= 25;
            }
        }

        return {
            quarters: this.quarters,
            dimes: this.dimes,
            nickels: this.nickels,
            pennies: this.pennies
        }
    }

}
let vendingMachine = new ChangeHandler(100);


            //while change is greater than zero, while loop, is
            //change greater than 25 give quarter etc


            // while (cashTendered > amountDue)
            // let quarterChange = 25;
//const vending