const keys = document.querySelectorAll(".keySq");
var key = document.querySelectorAll(".keySq");

window.addEventListener("keydown", checkKeyPressed, false);
keys.forEach(key => key.addEventListener("transitionend", removeTransition, false));


function checkKeyPressed(e){
    switch (e.keyCode){
        case 65:
            document.getElementById('clap').play();
            key[0].classList.add("b");
            break;
        case 83:
            document.getElementById('hihat').play();
            key[1].classList.add("b");
            break;
        case 68:
            document.getElementById('boom').play();
            key[2].classList.add("b");
            break;
        case 70:
            document.getElementById('kick').play();
            key[3].classList.add("b");
            break;
        case 71:
            document.getElementById('openhat').play();
            key[4].classList.add("b");
            break;
        case 72:
            document.getElementById('ride').play();
            key[5].classList.add("b");
            break;
        case 74:
            document.getElementById('snare').play();
            key[6].classList.add("b");
            break;
        case 75:
            document.getElementById('tink').play();
            key[7].classList.add("b");
            break;
        case 76:
            document.getElementById('tom').play();
            key[8].classList.add("b");
            break;
    }
}

function removeTransition(e){
    this.classList.remove('b');
    }

//maybe try and refactor the switch into a for loop
//where you get all the elements in one class array and loop through
// for(var i=0; i<array.lenght, i++){
//
//}
