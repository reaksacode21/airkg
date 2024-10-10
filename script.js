function calculatePercentage(event) {
    event.preventDefault(); // Prevent the form from submitting 

    // Get values from input fields
    const firstGoods = parseFloat(document.getElementById('firstgoods').value);
    const lastGoods = parseFloat(document.getElementById('lastgoods').value);

    // Calculate percentage
    if (firstGoods !== 0) { // Prevent divide by zero
        const percent = ((firstGoods - lastGoods) / firstGoods) * (-100);
        document.getElementById('resultDisplay').innerHTML = `Result: ${percent.toFixed(2)}%`;
    } else {
        document.getElementById('resultDisplay').innerHTML = 'Error: First value must not be zero.';
    }
}