function addDisplay(text)
{
    var content = document.getElementById('content');
    
    var display = document.createElement('div');
    display.innerText = text;

    content.appendChild(display);
    content.appendChild(document.createElement('hr'));
}

function displayAnswer(problemNumber, answer)
{
    addDisplay("The answer to problem " + problemNumber + " is:\r\n" + answer);
}