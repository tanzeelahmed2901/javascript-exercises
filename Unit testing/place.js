function place(board, player, column) {
    for (let i = 0; i < board[column].length; i++) {
        if (!board[column][i]) {
            board[column][i] = player;
            return board;
        }
    }
}

module.exports = { place };
