var d = document.getElementById("d");

window.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e){
    if (e.keyCode == "68") {
        console.log("The 'd' key is pressed.");
        document.getElementById('audio').play();
        d.classList.toggle("green");
    }
}