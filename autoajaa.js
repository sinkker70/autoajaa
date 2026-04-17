const canvas = document.getElementById("canvaasi");

canvas.width = 600; 
canvas.height = 400; 

const ctx = canvas.getContext("2d");
x = -150;

function luuppi() {

    ctx.clearRect(0,0,600,400);

    //auton kori
    ctx.fillStyle = "red"; 
    ctx.fillRect(x, 150, 150, 70); 

    //ympyrä katto
    ctx.beginPath(); 
    ctx.arc(x+70, 150, 50, 0, 2 * Math.PI);
    ctx.fill();

    //ympyrä takarengas
    ctx.beginPath(); 
    ctx.arc(x+35, 250, 30, 0, 2 * Math.PI); 
    ctx.fillStyle = "white";
    ctx.fill(); //täyttö

    ctx.beginPath();   
    ctx.lineWidth = 8; 
    ctx.strokeStyle = "blue"; 
    ctx.arc(x+35, 250, 30, 0, 2 * Math.PI); 
    ctx.stroke(); //rajapinta

    //ympyrä eturengas
    ctx.beginPath(); 
    ctx.arc(x+125,250,30,0,2*Math.PI);
    ctx.fillStyle = "white"; 
    ctx.fill(); 
    ctx.beginPath();   
    ctx.lineWidth = 8; 
    ctx.strokeStyle = "blue"; 
    ctx.arc(x+125, 250, 30, 0, 2 * Math.PI); 
    ctx.stroke(); //rajapinta

    x +=1; 
    if(x > 650) x = -150;
}

let interValId = null; 

function startStopCar() {
    if (interValId !== null) {
            clearInterval(interValId);
            interValId = null;
        } else {
            interValId = setInterval(luuppi, 10);
    }
}

document.getElementById("startStop").addEventListener("click", () => {
    startStopCar();
});

// Key down listener
document.addEventListener("keyup", function (event) {
    if (event.code === "Space") {
      startStopCar();
    }
});
