function schoolYearsLeft() {
    let yearsLeft = prompt("How many years do you have left in school?");

    //Convert the answer to a number
    let number = parseFloat(yearsLeft);

    //Check if the answer is a number
    if(isNaN(number)) {
        alert("Please input a number.");
        //Ask again
        schoolYearsLeft();
    } else if (number === 0){
        alert("Congratulations! You have finished school!");
    } else if (number > 0 && number <= 1){
        alert("Nearly there!");
    } else if (number > 1 && number <= 2){
        alert("Still learning!");
    } else if (number > 2 && number <= 3){
        alert("Sucks to be you :)");
    } else {
        alert("I hope you are kidding..");
    }
}

document.getElementById("askButton").addEventListener("click", schoolYearsLeft);