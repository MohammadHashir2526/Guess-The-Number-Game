var rNum = Math.floor(Math.random() * 10);
var uNum = +prompt("Write a Number ?");

if (rNum === uNum) {
    alert("Your Guess is Correct " + "Number is = " + rNum);
} else if (rNum + 1 === uNum || rNum - 1 === uNum) {
    alert("Close ! Correct Number is = " + rNum);
} else {
    alert("Wrong! Correct Number is = " + rNum);
}