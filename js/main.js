const gameSource = {
    board: ['','','','','','','','',''],

    player: {
        options: ['X', 'O'],
        options_index: 0,
        changePlayerOption() {
            this.options[this.options_index] === 0 ? 1 : 0;
        }
    },

    drawField(containerID) {
        let content = '';

        for(position in this.board) {
            content += `<div onclick="markPosition(${position})"></div>`;
        }

        containerID.innerHTML = content;
    },
}

function markPosition(item) {
    console.log(gameSource.board[item] = gameSource.player.options[gameSource.player.options.options_index]);
};