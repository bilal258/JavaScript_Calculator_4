let equation = "";
function handleGetValue(value) {
    const display = document.getElementById("displaytext");
    if (value === 'C') { 
        equation = "";
        display.value = "";
    } else if (value === '=') {
            const result = eval(equation);
            display.value = result;
            equation = result.toString();
    } else {
        equation += value;
        display.value = equation; 
    }
}







