// solve this using immediately invoked function 

(function(){
    let screen = document.querySelector('.screen');
    let buttons = document.querySelectorAll('.btn');
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal');

    buttons.forEach(function(button){
        button.addEventListener('click',function(e){
            let value = e.target.dataset.num;
            screen.value += value; // this is used to append the value to screen.
        })
    });
    
    equal.addEventListener('click', function(e){
        if (screen.value === ''){
            screen.value = "";

        }
        else{
            let answer= eval(screen.value);
            screen.value=answer;
        }
    })

    clear.addEventListener('click', function(e){
        screen.value="";
    })


})();



/* 
 let's break down this code step by step:

First, it wraps everything in an immediately invoked function expression (IIFE), which is a function that is declared and immediately called. This helps encapsulate the code and prevent any variables or functions from polluting the global scope.

It selects elements from the DOM:

screen: This selects an element with the class .screen. Presumably, this is where the calculator's display output will be shown.
buttons: This selects all elements with the class .btn. These are the buttons on the calculator.
clear: This selects an element with the class .clear. This is the button used to clear the calculator's display.
equal: This selects an element with the class .equal. This is the button used to calculate the result.
It adds event listeners to each button:

For each button in the buttons NodeList, it adds a click event listener.
When a button is clicked, it retrieves the value associated with the data-num attribute of the clicked button (assuming it's there) and appends it to the screen value.
It adds an event listener to the equal button:

When the equal button is clicked, it checks if the screen value is empty. If it's empty, it leaves the screen blank.
If the screen value is not empty, it evaluates the expression in the screen value using JavaScript's eval() function. This can be risky if not used carefully but is fine in this context since it's just evaluating arithmetic expressions.
It then sets the screen value to the result of the evaluation.
It adds an event listener to the clear button:

When the clear button is clicked, it simply sets the screen value to an empty string, effectively clearing the display.
Overall, this code sets up a basic calculator interface where you can click buttons to input numbers and operators, click the equal button to evaluate the expression, and click the clear button to clear the display. It's a simple implementation of a calculator using HTML, CSS, and JavaScript.
*/