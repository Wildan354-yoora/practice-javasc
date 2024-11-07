function printHeart() {
    console.log("<3");
        document.getElementById("heart").innerHTML = "&hearts;"; 

}

function multiply(a, b) {
    return a * b; 
}

console.log(multiply(2, 3)); // 6
console.log(multiply(9, 9)); // 81
console.log(multiply(5, 4)); // 20

let animal = "Giant Pacific Octopus";
function observe () {
let animal = "Pajama Squid";
console.log (animal) ;}
observe () ;

const sayHello = (name) => {
    return `Hello ${name}!`;
};

document.getElementById("greetHagrid").addEventListener("click", function() {
    const greeting = sayHello("Hagrid"); 
    document.getElementById("greetingResult").innerText = greeting; 
});

document.getElementById("greetLuna").addEventListener("click", function() {
    const greeting = sayHello("Luna"); 
    document.getElementById("greetingResult").innerText = greeting; 
});

document.getElementById("showHeartButton").addEventListener("click", printHeart);

