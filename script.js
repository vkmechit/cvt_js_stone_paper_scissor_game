//global variable
var paper = 0
var scissor = 1
var rock = 2
//image url
const rock_image = "icons8-fist-67 1.png"
const scissor_image = "scissor.png"
const paper_image = "paper.png"
//setting the result text avriable
const user_win_text = "YOU WIN<br><span >AGAINST PC</span>"
const pc_win_text = "YOU LOST<br><span >AGAINST PC</span>"
const tie_text = "TIE UP"
// decalre global elements variable
var user_image = ""
var pc_image = ""
var result_text = ""
var computer_picked = ""
var you_picked = ""
var score_panel = ""
var play_screen = ""
var win_screen = ""
var win_final_screen = ""
var computer_score = ""
var your_score = ""
var winner_screen = ""
var your_score = ""
var rules = ""

//Getting the elements once DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    user_image = document.querySelector('.you_picked img');
    console.log("user_image", user_image)
    pc_image = document.querySelector('.computer_picked img');
    result_text = document.getElementById("result_message")
    computer_picked = document.getElementById("computer_picked")
    you_picked = document.getElementById("you_picked")
    score_panel = document.getElementById("score_panel")
    play_screen = document.getElementById("play_screen")
    win_screen = document.getElementById("win_screen")
    win_final_screen = document.getElementById("win_final_screen")
    computer_score = document.getElementById("computer_score")
    your_score = document.getElementById("your_score")
    winner_screen = document.getElementById("winner_screen")
    rules = document.getElementById("rules")
})

//Toggling th rules div
function toggle_rule() {
    const div = document.getElementById("rules_box");
    if (div.style.display === 'none') {
        div.style.display = 'block';
    } else {
        div.style.display = 'none';
    }

}
//closing the rules div
function close_btn() {
    const elem = document.getElementById("rules_box");
    elem.style.display = 'none';
}

//Getting the score from local stroage on window load and setting to 0 if not already set
window.onload = function () {
    var user_score = localStorage.getItem("user_score");
    var pc_score = localStorage.getItem("pc_score");
    if (user_score == null) {
        localStorage.setItem("user_score", 0);
        localStorage.setItem("pc_score", 0);
    }
    else {
        const comp_score = document.getElementById("computer_score")
        const your_score = document.getElementById("your_score")
        comp_score.innerText = pc_score
        your_score.innerText = user_score
    }
};

//The complete game logic to decide winner 
function play(user_choosen) {

    //getting local storage data
    var user_score = localStorage.getItem("user_score");
    var pc_score = localStorage.getItem("pc_score");

    //compuetr score array
    var comp_random_choose = [0, 1, 2]
    // competer playing here
    const randomIndex = Math.floor(Math.random() * comp_random_choose.length);
    var computer_choose = comp_random_choose[randomIndex];

    if (user_choosen > computer_choose) {
        //user win
        if (user_choosen == 0) {
            user_image.src = paper_image
            you_picked.style.borderColor = "#FFA943"

        }
        else if (user_choosen == 1) {
            user_image.src = scissor_image
            you_picked.style.borderColor = "#BD00FF"
        }
        else {
            user_image.src = rock_image
            you_picked.style.borderColor = "#0074B6"
        }
        if (computer_choose == 0) {
            pc_image.src = paper_image
            computer_picked.style.borderColor = "#FFA943"
        }
        else if (computer_choose == 1) {
            pc_image.src = scissor_image
            computer_picked.style.borderColor = "#BD00FF"
        }
        else {
            pc_image.src = rock_image
            computer_picked.style.borderColor = "#0074B6"
        }

        play_screen.style.visibility = "hidden"
        win_screen.style.visibility = "visible"
        win_final_screen.style.visibility = "hidden"
        user_score = parseInt(user_score) + 1
        your_score.innerText = user_score
        localStorage.setItem("user_score", user_score);
        you_picked.classList.add('shadow');
        computer_picked.classList.remove('shadow');
        result_text.innerHTML = user_win_text
        rules.style.right = "170px"
        winner_screen.style.visibility = "visible"

    }
    else if (user_choosen < computer_choose) {
        //compuetr win
        if (user_choosen == 0) {
            user_image.src = paper_image
            you_picked.style.borderColor = "#FFA943"

        }
        else if (user_choosen == 1) {
            user_image.src = scissor_image
            you_picked.style.borderColor = "#BD00FF"
        }
        else {
            user_image.src = rock_image
            you_picked.style.borderColor = "#0074B6"
            // computer_picked.style.borderColor = "#0074B6"
            // pc_image.src = rock_image 
        }
        if (computer_choose == 0) {
            pc_image.src = paper_image
            computer_picked.style.borderColor = "#FFA943"

        }
        else if (computer_choose == 1) {
            pc_image.src = scissor_image
            computer_picked.style.borderColor = "#BD00FF"
        }
        else {
            pc_image.src = rock_image
            computer_picked.style.borderColor = "#0074B6"
        }
        play_screen.style.visibility = "hidden"
        win_screen.style.visibility = "visible"
        win_final_screen.style.visibility = "hidden"
        pc_score = parseInt(pc_score) + 1
        computer_score.innerText = pc_score
        localStorage.setItem("pc_score", pc_score);
        you_picked.classList.remove('shadow');
        computer_picked.classList.add('shadow');
        result_text.innerHTML = pc_win_text
        rules.style.right = "20px"
        winner_screen.style.visibility = "hidden"

    }
    else {
        //match tie
        if (user_choosen == 0) {
            user_image.src = paper_image
            pc_image.src = paper_image
            you_picked.style.borderColor = "#FFA943"
            computer_picked.style.borderColor = "#FFA943"

        }
        else if (user_choosen == 1) {
            user_image.src = scissor_image
            pc_image.src = scissor_image
            you_picked.style.borderColor = "#BD00FF"
            computer_picked.style.borderColor = "#BD00FF"
        }
        else {
            user_image.src = rock_image
            pc_image.src = rock_image
            you_picked.style.borderColor = "#0074B6"
            computer_picked.style.borderColor = "#0074B6"
        }
        play_screen.style.visibility = "hidden"
        win_screen.style.visibility = "visible"
        win_final_screen.style.visibility = "hidden"
        you_picked.classList.remove('shadow');
        computer_picked.classList.remove('shadow');
        result_text.innerHTML = tie_text

    }
    //below code is for if want to decide the winner based on the total score not a trun

    //  user_score = localStorage.getItem("user_score");
    //  pc_score = localStorage.getItem("pc_score");
    // if (user_score>pc_score){
    //     result_text.innerHTML = user_win_text
    // }
    // else if(user_score<pc_score){
    //     result_text.innerHTML = pc_win_text

    // }
    // else{
    //     result_text.innerHTML = tie_text 
    // }
}

function play_again() {
    play_screen.style.visibility = "visible"
    win_screen.style.visibility = "hidden"
    win_final_screen.style.visibility = "hidden"
    score_panel.style.visibility = "visible"
}
function next() {
    play_screen.style.visibility = "hidden"
    win_screen.style.visibility = "hidden"
    win_final_screen.style.visibility = "visible"
    score_panel.style.visibility = "hidden"
    winner_screen.style.visibility = "hidden"
    rules.style.right = "20px"
}