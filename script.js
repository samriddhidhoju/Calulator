// Function to append values to the display
function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to delete the last character from the display
function deleteLast() {
    let display = document.getElementById('display').value;
    document.getElementById('display').value = display.slice(0, -1);
}

// Function to evaluate the expression and display the result
function calculate() {
    let display = document.getElementById('display').value;
    try {
        let result = eval(display);  // Using eval to calculate the string expression
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Error';
    }
}
