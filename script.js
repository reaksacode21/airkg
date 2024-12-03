function calculatePercentage(event) {
    event.preventDefault(); // Prevent the form from submitting 

    // Get values from input fields
    const firstGoods = parseFloat(document.getElementById('firstgoods').value);
    const lastGoods = parseFloat(document.getElementById('lastgoods').value);

    // Calculate percentage
    if (firstGoods !== 0) { // Prevent divide by zero
        const percent = ((firstGoods - lastGoods) / firstGoods) * (-100);
        if(percent>-5 && percent <5){ 
            document.getElementById('resultDisplay').innerHTML =  `គីឡូត្រឹមត្រូវ=${firstGoods-lastGoods}kg`+`=${percent.toFixed(2)}%`;
        }else if(percent>5){
            document.getElementById('resultDisplay').innerHTML =  `គីឡូលើសBill=${-(firstGoods-lastGoods)}kg`+`=${percent.toFixed(2)}%`;
        }else{
            document.getElementById('resultDisplay').innerHTML =  `គីឡូតិចជាងBill=${(firstGoods-lastGoods)}kg`+`=${percent.toFixed(2)}%`;
        }
    } else {
        document.getElementById('resultDisplay').innerHTML = 'Error: First value must not be zero.';
    }
}