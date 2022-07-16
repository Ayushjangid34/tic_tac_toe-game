let even = true;
var count=0;
var output = [];
for (let i = 0; i < 10; i++)
        {
            if( output[i] === undefined )
            {
                output[i] = i;
            }
        }


function win(winner)
{
    document.getElementById("player").innerHTML = " Player "+output[winner]+" wins ";
        document.getElementById("restart").style.display = "block";
        for (let i = 0; i < 10; i++)
        {
            if( output[i] !== "X" && output[i] !== "O" )
            {
                output[i] = "win";
            }
        }
}

function turn(cellnum)
{
if( output[cellnum] === cellnum ){
    if (even === true)
    {
        document.querySelector("#container #cell"+cellnum+" .xs").style.display = "block";
        output[cellnum] = "X";
        document.getElementById("player").innerHTML = "Turn for Player O";
    }
    else
    {document.querySelector("#container #cell"+cellnum+" .os").style.display = "block";
    output[cellnum] = "O";
    document.getElementById("player").innerHTML = "Turn for Player X";}

    if(output[1] === output[2] && output[2] === output[3])
    {
        win(2);
        return;
    }
    if(output[4] === output[5] && output[5] === output[6])
    {
        win(5);
        return;
    }
    if(output[7] === output[8] && output[8] === output[9])
    {
        win(8);
        return;
    }
    if(output[1] === output[4] && output[4] === output[7])
    {
        win(4);
        return;
    }
    if(output[2] === output[5] && output[5] === output[8])
    {
        win(5);
        return;

    }   
    if(output[3] === output[6] && output[6] === output[9])
    {
        win(6);
        return;
    }
    if(output[1] === output[5] && output[5] === output[9])
    {
        win(5);
        return;
    }
    if(output[3] === output[5] && output[5] === output[7])
    {
        win(5);
        return;
    }

    if (even === true)
    {
        even = false;
    }
    else
    even = true;
}
count++;
if(count === 9)
 {document.getElementById("player").innerHTML = " DRAW !";
 document.getElementById("container").style.display = "none";
 document.getElementById("draw").style.display = "block";
 document.getElementById("restart").style.display = "block";
}
}