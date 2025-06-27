
class Player {
    constructor(){
        this.width = 20;
        this.heigth = 10;
        this.positionX = 40;
        this.positionY = 0;

        this.updateUI();
    }
    updateUI(){
        const playerElm = document.getElementById("player")
        playerElm.style.left = this.positionX + "vw"
        playerElm.style.bottom = this.positionY + "vh"
        playerElm.style.width = this.width + "vw"
        playerElm.style.height = this.heigth + "vh"
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


const player = new Player(); // create an instance of the class Player

// Event listeners
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        player.moveLeft()
    } else if (e.code === 'ArrowRight') {
        player.moveRight()
    }
});