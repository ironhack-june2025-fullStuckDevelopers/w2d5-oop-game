
class Player {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = 40;
        this.positionY = 0;

        this.updateUI();
    }
    updateUI(){
        const playerElm = document.getElementById("player")
        playerElm.style.left = this.positionX + "vw"
        playerElm.style.bottom = this.positionY + "vh"
        playerElm.style.width = this.width + "vw"
        playerElm.style.height = this.height + "vh"
    }
    moveLeft(){
        this.positionX--;
        this.updateUI();
    }
    moveRight(){
        this.positionX++;
        this.updateUI();
    }
}



class Obstacle {
    constructor(){
        this.width = 20;
        this.height = 10;
        this.positionX = 30;
        this.positionY = 100;
        this.obstacleElm = null;

        this.createDomElement();
    }
    createDomElement(){
        // step1: create the element
        this.obstacleElm = document.createElement("div")

        // step2: add content or modify (ex. innerHTML...)
        this.obstacleElm.className = "obstacle"

        //step3: append to the dom: `parentElm.appendChild()`
        const parentElm = document.getElementById("board")
        parentElm.appendChild(this.obstacleElm)
    }
    updateUI(){
        this.obstacleElm.style.left = this.positionX + "vw"
        this.obstacleElm.style.bottom = this.positionY + "vh"
        this.obstacleElm.style.width = this.width + "vw"
        this.obstacleElm.style.height = this.height + "vh"
    }
    moveDown(){
        this.positionY--;
        this.updateUI();
    }
}


const player = new Player();
const obstaclesArr = []; // will store instances of the class Obstacle


// create obstacles
setInterval(() => {
    const newObstacle = new Obstacle();
    obstaclesArr.push(newObstacle)
}, 3000);


// update obstacles
setInterval(() => {
    obstaclesArr.forEach((obstacleInstance, i, arr) => {

        // move
        obstacleInstance.moveDown();

        // detect collision
        if (
            player.positionX < obstacleInstance.positionX + obstacleInstance.width &&
            player.positionX + player.width > obstacleInstance.positionX &&
            player.positionY < obstacleInstance.positionY + obstacleInstance.height &&
            player.positionY + player.height > obstacleInstance.positionY
        ) {
            console.log("gameover...")
            location.href = "gameover.html"
        }
    })
}, 40)




// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft()
    } else if (e.code === 'ArrowRight') {
        player.moveRight()
    }
});