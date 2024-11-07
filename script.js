// script.js

// Function to demonstrate various data types
function showDataTypes() {
    // String
    let greeting = "HAI, NAMAKU WILDAN!";
    console.log("String:", greeting);
    alert("String: " + greeting);

    // Number
    let year = 2045;
    console.log("Number:", year);
    alert("Number: " + year);

    // Boolean
    let isJavaScriptFun = true;
    console.log("Boolean:", isJavaScriptFun);
    alert("Boolean: " + isJavaScriptFun);

    // Array
    let fruits = ["Alpukat", "Mangga", "Jambu"];
    console.log("Array:", fruits);
    alert("Array: " + fruits.join(", "));

    // Object
    let car = {
        make: "Toyota",
        model: "Camry",
        year: 2020
    };
    console.log("Object:", car);
    alert("Object: " + JSON.stringify(car));

    // Null
    let emptyValue = null;
    console.log("Null:", emptyValue);
    alert("Null: " + emptyValue);

    // Undefined
    let notAssigned;
    console.log("Undefined:", notAssigned);
    alert("Undefined: " + notAssigned);
}

// Add event listener to the button
document.getElementById("showDataTypes").addEventListener("click", showDataTypes);