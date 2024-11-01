/* Nim Trainer by [your name]
 * based on this flowchart:
 * https://lucid.app/lucidchart/2018baaf-4c26-4a76-a0d5-93c97f444425/view
 */

/* Global Variables */
var count = 0;
var trainer = false;

/** 
 * main  
 * Handles new Nim games with gametype choice simple or trainer and a play again option. 
 * @param none 
 * @return none
 */
/* Main */
function main(){
    let again = false;
    trainer = confirm("Do you wish to play Trainer Mode?");
    playNim();
    again = confirm("Do you want to play again?");
    if (again == true) main();
    else alert ("Thanks for playing!")
}

/** 
 * playNim 
 * plays a game with user first and computer second. Winner declared in an alert box. 
 * @param none 
 * @return none
 */
function playNim(){
    count = 0;
    while (count < 21) {
        userTurn();
        if (count > 20) alert("CPU wins");
        else {
            cpuTurn();
            if (count > 20) alert("Player wins");
        }
    }
}

/** 
 * userTurn  
 * User enters a turn. Validation against cheating handled by recursion.
 * @param none 
 * @return none
 */
function userTurn(){
    let turn = prompt("How much do you wish to count? (1-3)")
    if (turn == 1) count++;
    else if (turn == 2) count+=2;
    else if (turn == 3) count+=3;
    else{
        alert("Your input is invalid, count is still "+count);
        userTurn();
    }
    alert("The count is now "+count);
}

/** 
 * cpuTurn 
 * Generate computer's turn without losing on purpose.  Different turns if trainer or simple.  
 * @param none 
 * @return none
 */
function cpuTurn(){
    let turn = 0;
    if (count == 17) turn = 3;
    else if (count == 18) turn = 2;
    else if (count == 19 || count == 20) turn = 1;
    else if (trainer == true) turn = 4 - count%4;
    else turn = Math.floor(Math.random()*3)+1;
    count += turn;
    alert ("I counted "+turn+", the count is now "+count)
}