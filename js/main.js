const gameSource = {
    board: ['X','','','','','','','',''],

    drawField(container) {
        let content = '';

        for(position in this.board) {
            content += `<div onclick="eventOnCell(${position})">${this.board[position]}</div>`;
        }

        container.innerHTML = content;
    },    
};

function eventOnCell(cellPos) {
    const player_config = {
        type: ['X', 'O'],
        type_index: 0,
        change() {
            let selected = this.type[this.type_index];

            if(this.type.indexOf(selected) === 0) {
                return this.type_index = 1;
            } else {
                return this.type_index = 0;
            }

            console.log(selected);
        }
    }
};