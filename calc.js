// Define a function to handle button presses for numbers and operators
function press(value) {
    const display = document.getElementById('display');
    if (display.value.includes('.') && value === '.' && display.value.split(/[\+\-\*\/]/).pop().includes('.')) {
        // Prevent multiple dots in a single number
        return;
    }
    if (display.value === '0' && value !== '.') {
        display.value = value; // Replace initial '0' except for decimal cases
    } else {
        display.value += value; // Append the button value to the display
    }
}

// Function to clear the display
function clearDisplay() {
    document.getElementById('display').value = '';
}

// Function to evaluate the expression and handle errors
function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value); // Evaluate the expression in the display
        if (display.value === "Infinity" || display.value === "-Infinity" || isNaN(display.value)) {
            throw new Error('Invalid Operation'); // Handle division by zero or invalid results
        }
    } catch (error) {
        display.value = 'Error'; // Display error on any illegal operation
        setTimeout(clearDisplay, 2000); // Clear the display after 2 seconds
    }
}

// Overwrite the `press` function if '=' is pressed to calculate the result
document.querySelectorAll('.keys button').forEach(button => {
    button.addEventListener('click', function() {
        if (this.textContent === '=') {
            calculate();
        }
    });
});
