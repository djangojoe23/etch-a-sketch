
window.onload = function() {
    let container = document.createElement("div");
    container.setAttribute('id', 'container');
    document.body.appendChild(container);

    let row = null;
    let cell = null;
    for (let i=0; i<16; i++){
        row = document.createElement("div");
        row.setAttribute('class', 'row');
        container.appendChild(row);
        for (let j=0; j<16; j++){
            cell = document.createElement("div");
            cell.setAttribute('class', 'cell');
            row.appendChild(cell);
        }
    }
}
