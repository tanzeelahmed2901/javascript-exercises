const palindromeModule = require("./palindrome");
const each = require("jest-each").default;


describe('When calling the palindrome function', () => {

    describe("Palindrome will return true or false when called", () => {
        each([
            ["madam", true],
            ["car", false],
        ]).it("when the input is '%s'", (text, expected) => {
            const acutal = palindromeModule.palindrome(text)
            expect(acutal).toBe(expected);
        });
    });

    describe("When calling Palindrome", () => {

        each([
            ["Other", false],
            ["test", false],
        ]).it("will return false for invalid inputs", (text, expected) => {
            const acutal = palindromeModule.palindrome(text)
            expect(acutal).toBe(expected);
        });

        each([
            ["madam", true],
            ["tacocat", true],
            ["12321", true],
            [" ", true],
            ["", true],
        ]).it("will return true for text that is a palindrome", (text, expected) => {
            const acutal = palindromeModule.palindrome(text)
            expect(acutal).toBe(expected);
        });
    });
});
