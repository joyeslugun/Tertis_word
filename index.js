document.addEventListener('DOMContentLoaded',() =>{
    const grid = document.querySelector(".grid");
    let squares = document.querySelectorAll(".grid div");
    const width = 30;
    let curr = Math.floor(Math.random()*10);

    const dashTatris = [1,2,3,4];
    const words = ["We","design","develop","applications","that","run","the","world","and","showcase" ,"future"];

    //get random word from the given array
    let random = Math.floor(Math.random()*words.length);
    let randomWordLength = words[random].length;

    //generate rectangle of size random word lenght
    function draw(){
        for(let i = 0;i<randomWordLength;i++){
            squares[curr+i].innerHTML = words[random].charAt(i);
            squares[curr+i].classList.add('tetromino');
        }
    }


    //function to undraw
    function unDraw(){
        for(let i = 0;i<randomWordLength;i++){
            squares[curr+i].innerHTML = "";
            squares[curr+i].classList.remove('tetromino');
        }
    }

    draw();
    //unDraw();


    //make tetromino move down 
    timerId = setInterval(moveDown,1000);
    function moveDown(){
        unDraw();
        curr += width;
        draw();
        freeze();
    }
    function freeze(){
        for(let i=0;i<randomWordLength;i++){

            //if reached above last row
            if(squares[curr+i+width].classList.contains('taken')){
                for(let j=0;j<randomWordLength;j++){
                    squares[curr+j].classList.add('taken');
                }
                random = Math.floor(Math.random()*words.length);
                randomWordLength = words[random].length;
                curr = Math.floor(Math.random()*10);
                draw(); 
                break;
            }
        }
    }
    // Function to format time in seconds to a human-readable format
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${hours}:${minutes}:${remainingSeconds}`;
}

// Function to update the time tracker
function updateTimeTracker() {
    const currentTime = new Date().getTime();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000);
    document.getElementById("time").textContent = formatTime(elapsedTime);
}

// Record the start time when the user enters the website
const startTime = new Date().getTime();

// Update the time tracker every second
setInterval(updateTimeTracker, 1000);


})