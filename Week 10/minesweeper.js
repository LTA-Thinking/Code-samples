
var map;
var clickedCells = 0;
var maxX = 10;
var maxY = 10;
var numberOfMines = 20;
var gameOver = false;

function addMine()
{
    var xCord = Math.floor(Math.random()*maxX);
    var yCord = Math.floor(Math.random()*maxY);

    if (map[xCord][yCord] === -1)
    {
        return addMine();
    }

    map[xCord][yCord] = -1;
}

function incrementCell(xCord, yCord)
{
    if (xCord < 0 || xCord >= maxX ||
        yCord < 0 || yCord >= maxY ||
        map[xCord][yCord] === -1)
    {
        return;
    }

    map[xCord][yCord]++;
}

function createMap()
{
    map = [];

    for (var x = 0; x < maxX; x++)
    {
        map[x] = [];
        for (var y = 0; y < maxY; y++)
        {
            map[x][y] = 0;
        }
    }

    for (var mine = 0; mine < numberOfMines; mine++)
    {
        addMine();
    }

    for (var x = 0; x < maxX; x++)
    {
        for (var y = 0; y < maxY; y++)
        {
            if (map[x][y] === -1)
            {
                incrementCell(x-1, y-1);
                incrementCell(x-1, y);
                incrementCell(x-1, y+1);
                incrementCell(x, y-1);
                incrementCell(x, y+1);
                incrementCell(x+1, y-1);
                incrementCell(x+1, y);
                incrementCell(x+1, y+1);
            }
        }
    }
}

function createGrid()
{
    var table = document.createElement("table");

    for (var x = 0; x < maxX; x++)
    {
        var row = document.createElement("tr");

        for (var y = 0; y < maxY; y++)
        {
            var cell = document.createElement("td");
            cell.classList.add("cell");
            cell.addEventListener("mousedown", clickFactory(x, y));
            // cell.innerText = map[x][y];
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    var content = document.getElementById("content");
    content.appendChild(table);
}

function clickFactory(x, y)
{
    return (event) => onClick(event, x, y);
}

function onClick(event, x, y)
{
    if (gameOver === true || event.target.disabled === true)
    {
        return;
    }

    event.target.classList.add("disabled");
    event.target.disabled = true;

    if (map[x][y] === -1)
    {
        alert("Lose :(");
        gameOver = true;
        return;
    }

    event.target.innerText = map[x][y];
    clickedCells++;

    if (clickedCells === maxX * maxY - numberOfMines) 
    {
        alert("Win!");
        gameOver = true;
    }
}

createMap();
createGrid();