for (let i = 0; i < 6; i++) {
    console.log("Da ba dee da ba daa");
}

function countdown() {
    let result = ""; 
    for (let i = 25; i >= 0; i -= 5) {
        result += i + "<br>"; 
        console.log(i);
    }
    document.getElementById("countdownResult").innerHTML = result; 
}

document.getElementById("countdownButton").addEventListener("click", countdown);


const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];

function printNamesInUppercase() {
    let result = ""; 
    for (let i = 0; i < people.length; i++) {
        result += people[i].toUpperCase() + "<br>"; 
        console.log(people[i].toUpperCase());
    }
    document.getElementById("namesResult").innerHTML = result;
}

document.getElementById("printNamesButton").addEventListener("click", printNamesInUppercase);
