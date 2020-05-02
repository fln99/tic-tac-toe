var board = ['','','','','','','','',''];

function drawField(containerID) {
    let content = '';

    for(position in board) {
        content += `<div onclick="markCell(${position})">${board[position]}</div>`;
    }

    containerID.innerHTML = content;
}

function markCell(index) {
    board[index].replace('', 'O')
}