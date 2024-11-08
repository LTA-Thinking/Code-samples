var maxX = 10;
var maxY = 10;
var numBomb = 20;

var map;
var cellsShown;

var buttons;

function incrementIfNotMine(map, xCord, yCord)
{
    if (xCord >= 0 && xCord < map.length &&
        yCord >= 0 && yCord < map[xCord].length &&
        map[xCord][yCord] !== -1)
    {
        map[xCord][yCord]++;
    }
}

function placeBomb(map)
{
    var xCord = Math.floor(Math.random()*map.length);
    var yCord = Math.floor(Math.random()*map[0].length);

    if (map[xCord][yCord] === -1)
    {
        return placeBomb(map);
    }

    map[xCord][yCord] = -1;
}

function fillNumbers(map)
{
    for (var x = 0; x < map.length; x++)
    {
        for (var y = 0; y < map[x].length; y++)
        {
            if (map[x][y] === -1)
            {
                incrementIfNotMine(map, x-1, y-1);
                incrementIfNotMine(map, x-1, y);
                incrementIfNotMine(map, x-1, y+1);
                incrementIfNotMine(map, x, y-1);
                incrementIfNotMine(map, x, y+1);
                incrementIfNotMine(map, x+1, y-1);
                incrementIfNotMine(map, x+1, y);
                incrementIfNotMine(map, x+1, y+1);
            }
        }
    }
}

function startGame()
{
    cellsShown = 0;
    map = [];
    resetButtons();

    for (var x=0; x < maxX; x++)
    {
        map.push([]);
        for (var y=0; y < maxY; y++)
        {
            map[x].push(0);
        }
    }

    for (var b=0; b < numBomb; b++)
    {
        placeBomb(map);
    }

    fillNumbers(map);
}

function onClick(xCord, yCord, event)
{
    if (buttons[xCord][yCord].disable === true)
    {
        return;
    }

    if (event.button === 0)
    {
        leftClickCell(xCord, yCord);
    }
    else
    {
        rightClickCell(xCord, yCord);
    }
}

function leftClickCell(xCord, yCord)
{
    if (xCord < 0 || xCord >= maxX ||
        yCord < 0 || yCord >= maxY ||
        buttons[xCord][yCord].classList.contains('flagged') || 
        buttons[xCord][yCord].disable === true
    )
    {
        return;
    }

    if (map[xCord][yCord] === -1)
    {
        return gameOver();
    }

    buttons[xCord][yCord].disable = true;
    buttons[xCord][yCord].classList.add('disabled');
    cellsShown++;

    if (map[xCord][yCord] === 0)
    {
        leftClickCell(xCord-1, yCord-1);
        leftClickCell(xCord-1, yCord);
        leftClickCell(xCord-1, yCord+1);
        leftClickCell(xCord, yCord-1);
        leftClickCell(xCord, yCord+1);
        leftClickCell(xCord+1, yCord-1);
        leftClickCell(xCord+1, yCord);
        leftClickCell(xCord+1, yCord+1);
    }
    else
    {
        buttons[xCord][yCord].innerText = map[xCord][yCord];
    }

    checkVictory()
}

function rightClickCell(xCord, yCord)
{
    buttons[xCord][yCord].classList.toggle('flagged');
}

function checkVictory()
{
    if (cellsShown === maxX * maxY - numBomb)
    {
        console.log("WIN!");
    }
}

function gameOver()
{
    for (var x = 0; x < maxX; x++)
    {
        for (var y = 0; y < maxY; y++)
        {
            if (map[x][y] === -1)
            {
                buttons[x][y].innerText = "*";
            }
            else if (map[x][y] !== 0)
            {
                buttons[x][y].innerText = map[x][y];
            }

            buttons[x][y].disable = true;
        }
    }
    console.log("LOSE :(");
}

function resetButtons()
{
    buttons.forEach(row =>
    {
        row.forEach(button =>
        {
            button.disable = false;
            button.innerText = "";
            button.classList.remove("disabled");
            button.classList.remove("flagged");
        });
    });
}

function makeGrid()
{
    var contentDiv = document.getElementById("content");

    var table = document.createElement("table");

    buttons = [];

    for (var x = 0; x < maxX; x++)
    {
        var row = document.createElement("tr");
        buttons.push([]);
        for (var y = 0; y < maxY; y++)
        {
            var cell = document.createElement("td");

            cell.addEventListener("mouseup", handlerFactory(x, y));
            cell.addEventListener("contextmenu", (event) => event.preventDefault());
            cell.classList.add("cell");

            buttons[x].push(cell);
            row.appendChild(cell);
        }
        table.appendChild(row);
    }

    contentDiv.appendChild(table);
}

function handlerFactory(x ,y)
{
    return (event) => onClick(x, y, event);
}

makeGrid();
startGame();