// Ensure that the DOM is fully loaded before attaching event handlers
document.addEventListener('DOMContentLoaded', function () {
    let currentOperation = null;
    let storedInput = '';

    const display = document.getElementById('display');

    window.append = function(number) {
        display.value += number;
    };

    window.setOperation = function(operator) {
        if (currentOperation !== null) {
            calculate(); // Calculate any pending operations first
        }
        storedInput = display.value; // Store current value for the operation
        currentOperation = operator;
        display.value = ''; // Clear display for new input
    };

    window.calculate = function() {
        let result;
        const current = parseFloat(display.value);
        const stored = parseFloat(storedInput);
        
        if (isNaN(stored) || isNaN(current)) {
            alert("Invalid input!");
            return;
        }
        
        switch(currentOperation) {
            case '+':
                result = stored + current;
                break;
            case '-':
                result = stored - current;
                break;
            case '*':
                result = stored * current;
                break;
            case '/':
                if (current === 0) {
                    alert("Division by zero is not allowed.");
                    return;
                }
                result = stored / current;
                break;
            default:
                return; // Exit if the operation is undefined
        }

        display.value = result;
        currentOperation = null; // Reset operation
        storedInput = ''; // Reset stored input
    };

    window.clearDisplay = function() {
        display.value = '';
        currentOperation = null;
        storedInput = '';
    };
});
