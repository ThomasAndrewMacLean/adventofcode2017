module.exports = 

class CaptchaSolver {
    constructor(inputString) {
        this.inputString = inputString;
    }

    lengteIs() {
        return this.inputString.length;
    }


    loopOver() {
        let result = 0;
        this.counter = 0;
        const plus = 1;
        for (let letter of this.inputString) {

            if (letter === this.inputString[(this.counter + plus) % this.lengteIs()]) {

                result += parseInt(letter);
            }
            this.counter++;

        }
        return result;

    }


    loopOver2() {
        let result = 0;
        this.counter = 0;
        const plus = this.lengteIs() / 2;
        for (let letter of this.inputString) {

            if (letter === this.inputString[(this.counter + plus) % this.lengteIs()]) {

                result += parseInt(letter);
            }
            this.counter++;

        }
        return result;

    }

}