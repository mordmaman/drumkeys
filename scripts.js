var d = document.getElementsByClassName("d");

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e){
    switch (e.keyCode){
        case 68:
            console.log("The 'd' key is pressed.");
            document.getElementById('boom').play();
            d[0].classList.add("b");
            break;
        case 65:
            console.log("The 'a' key is pressed.");
            document.getElementById('clap').play();
            break;
        case 83:
            console.log("The 's' key is pressed.");
            document.getElementById('hihat').play();
            break;
        case 70:
            console.log("The 'f' key is pressed.");
            document.getElementById('kick').play();
            break;
        case 71:
            console.log("The 'g' key is pressed.");
            document.getElementById('openhat').play();
            break;
        case 72:
            console.log("The 'h' key is pressed.");
            document.getElementById('ride').play();
            break;
        case 74:
            console.log("The 'j' key is pressed.");
            document.getElementById('snare').play();
            break;
        case 75:
            console.log("The 'k' key is pressed.");
            document.getElementById('tink').play();
            break;
        case 76:
            console.log("The 'l' key is pressed.");
            document.getElementById('tom').play();
            break;
    }
    // if (e.keyCode == "68") {
    //     console.log("The 'd' key is pressed.");
    //     document.getElementById('audio').play();
    // }
}


//maybe try and refactor the switch into a for loop
//where you get all the elements in one class array and loop through
// for(var i=0; i<array.lenght, i++){
//
//}