const placeModule = require('./place');

describe('When calling the place function', () => {
    test("We can place a piece in an empty column", () => {
        // Consider descriptive test names:
        // "When place is called on an empty row the counter goes to the bottom of the row"

        // Arrange
        let board = [
            [null, null, null, null], 
            [null, null, null, null], 
            [null, null, null, null], 
            [null, null, null, null]
        ];
        const player = "Mike";
        const column = 1;

        const expectedOutput = [
            [null, null, null, null], 
            ["Mike", null, null, null], 
            [null, null, null, null], 
            [null, null, null, null]
        ];

        // Act
        const actualOutput = placeModule.place(board, player, column);

        // Assert
        expect(actualOutput).toStrictEqual(expectedOutput);
    });
});
