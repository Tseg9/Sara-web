const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}
function cleareDisplay(input) {
    display.value = "";
}

function calculate(input){
    try{
         display.value = eval(display.value);
    }
    
    catch (error){
        display.value = "syntax error";
    }
}

