window.onload = function() {

    const container = document.querySelector('#container');

    document.querySelector('#changeGridButton').addEventListener('click', function(){
        let gridSize = 16;
        do{
            gridSize = prompt("How many squares per side of the grid would you like? (100 MAX)")
            if(gridSize === null){
                break;
            }

            gridSize = Number(gridSize);

            if(isNaN(gridSize) || gridSize > 100 || gridSize <= 0){
                alert("Invalid grid size. Please enter a positive number less than 100.");
            }
        } while(isNaN(gridSize) || gridSize > 100 || gridSize <= 0);
        
        DrawGrid(gridSize);
    })

    function DrawGrid(gridSize){   
        container.innerHTML = '';

        let row = null;
        let cell = null;
        for (let i=0; i<gridSize; i++){
            row = document.createElement("div");
            row.setAttribute('class', 'row');
            row.style.height = `${100/gridSize}%`
            container.appendChild(row);
            for (let j=0; j<gridSize; j++){
                cell = document.createElement("div");
                cell.setAttribute('class', 'cell');
                row.appendChild(cell);
                cell.addEventListener("mouseover", function() {
                    this.style.backgroundColor = "orange";
                })
            }
        }
    }
    
}
