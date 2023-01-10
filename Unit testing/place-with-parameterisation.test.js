const placeModule = require('./place');

describe('When calling the place function', () => {
    test("We can place a piece in an empty column", () => {
        // Consider descriptive test names:
        // "When place is called on an empty row the counter goes to the bottom of the row"
        let board = [
            [null, null, null, null], 
            [null, null, null, null], 
            [null, null, null, null], 
            [null, null, null, null]
        ];
        
        const scenarios = [[board, "Mike", 1],
                            ]

        // Arrange
    
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