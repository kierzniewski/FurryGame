const $ = require("jquery");
const div = $("#board").find("div");
const result = $("#score").find("strong");
import {Furry} from "./furry.js";
import {Coin} from "./coin.js";
let idSetInterval = setInterval(function () {
    // console.log(counter);
    game.moveFurry();
}, 250);
class Game {
    constructor(){
        this.board = div;
        this.furry = new Furry();
        this.coin = new Coin();
        this.score = 0;
        // this.index = function(x,y) {
        //     return x + (y * 10);
    }
    position(){
        this.index = function(x,y) {
            return x + (y * 10);
        }
    }
    showFurry(){
        let boardPosition = this.board[ this.index(this.furry.x,this.furry.y)];
        this.hideVisibleFurry();
        $(boardPosition).addClass('furry');
        // console.log(this.board)

    }
    showCoin(){
        this.hideVisibleCoin();
        let boardCoinPosition = this.board[ this.index(this.coin.x,this.coin.y) ];
        $(boardCoinPosition).addClass('coin');
    }
    checkCoinCollision(){
        if ((this.furry.x === this.coin.x) && (this.furry.y === this.coin.y)){
            this.hideVisibleCoin();
            let result = $("#score").find("strong").text()
            let counter = parseInt(result);
            counter += 1;
            $("#score").find("strong").text(counter);
            this.coin = new Coin();
            this.showCoin()

        }
    }
    moveFurry(){
        // console.log(this.furry.direction)
        if(this.furry.direction === "right") {
            // console.log(this.furry.x);
            this.furry.x = this.furry.x + 1;
        } else if (this.furry.direction === "down"){
            this.furry.y = this.furry.y + 1;
        } else if (this.furry.direction === "up"){
            this.furry.y = this.furry.y - 1;
        } else if (this.furry.direction === "left"){
            this.furry.x = this.furry.x - 1;
        }
        this.showFurry();
        this.gameOver();
        this.checkCoinCollision();

    }
    hideVisibleCoin(){
        $(".coin").removeClass("coin");
    }
    hideVisibleFurry(){
        $(".furry").removeClass("furry");
    }
    starGame(){
        idSetInterval;
    }
    turnFurry(e){
        switch (e.which) {
            case 37:
                this.furry.direction = "left";
                break;
            case 38:
                this.furry.direction = "up";
                break;
            case 39:
                this.furry.direction = "right";
                break;
            case 40:
                this.furry.direction = "down";
                break;
        }
    }
    gameOver(){
        if((this.furry.x < 0) || (this.furry.x > 9)){
            clearInterval(idSetInterval);
            this.hideVisibleFurry();
            this.hideVisibleCoin();
            $("#score").addClass("invisible");
            div.eq(33).text("G").addClass("gameover");
            div.eq(34).text("A").addClass("gameover");
            div.eq(35).text("M").addClass("gameover");
            div.eq(36).text("E").addClass("gameover");
            div.eq(43).text("O").addClass("gameover");
            div.eq(44).text("V").addClass("gameover");
            div.eq(45).text("E").addClass("gameover");
            div.eq(46).text("R").addClass("gameover");
            div.eq(62).text("S").addClass("gameover");
            div.eq(63).text("C").addClass("gameover");
            div.eq(64).text("0").addClass("gameover");
            div.eq(65).text("R").addClass("gameover");
            div.eq(66).text("E:").addClass("gameover");
            let result = $("#score").find("strong").text();
            div.eq(67).text(result).addClass("gameover");

            // div.eq(86).text("").addClass("gameover");


        } else if((this.furry.y < 0) || (this.furry.y > 9)){
            clearInterval(idSetInterval);
            this.hideVisibleFurry();
            this.hideVisibleCoin();
            $("#score").addClass("invisible");
            div.eq(33).text("G").addClass("gameover");
            div.eq(34).text("A").addClass("gameover");
            div.eq(35).text("M").addClass("gameover");
            div.eq(36).text("E").addClass("gameover");
            div.eq(43).text("O").addClass("gameover");
            div.eq(44).text("V").addClass("gameover");
            div.eq(45).text("E").addClass("gameover");
            div.eq(46).text("R").addClass("gameover");
            div.eq(62).text("S").addClass("gameover");
            div.eq(63).text("C").addClass("gameover");
            div.eq(64).text("O").addClass("gameover");
            div.eq(65).text("R").addClass("gameover");
            div.eq(66).text("E:").addClass("gameover");
            let result = $("#score").find("strong").text();
            div.eq(67).text(result).addClass("gameover");
        }
    }


};

const game = new Game();
game.position();
game.showCoin();
// game.showFurry();
game.starGame();

$(document).on("keydown", function (e) {
    // console.log("test")
    game.turnFurry(e);
});


