function add(num1,num2) {
    return num1 + num2;
}

function substract(num1, num2){
    return num1 - num2;
}

function multiply(num1,num2){
    return num1 * num2;
}

function divide(num1, num2){
    if(num2 === 0) return "NELZE!";
    return num1 / num2;
}

let number1 = null;
let number2 = null;
let operator = null;
let sum = null;

function calc() {
    const calculator = document.createElement('div');
    function caclBody() {
        calculator.style.display = 'flex';
        calculator.style.boxSizing = 'border-box';
        calculator.className = 'calcBody';
        calculator.style.backgroundColor = 'grey';
        calculator.style.height = '500px';
        calculator.style.width = '400px';
        calculator.style.margin = '0 auto'
        calculator.style.flexDirection = 'column';
        document.body.appendChild(calculator);
    };

    const display = document.createElement('div');
    function calcDisplay (){
        display.style.boxSizing = 'border-box';
        display.className = 'display';
        display.style.backgroundColor = 'white';
        display.style.flex = '0 0 95px';
        display.style.width = '375px';
        display.style.margin = '10px auto'
        display.style.alignSelf = 'flex-start';
        display.style.padding = '10px';
        display.style.fontSize = '4em'
        display.style.textAlign = 'end';
        calculator.appendChild(display);
    };

    const operators = document.createElement('div');
    function operatorsSection (){
        operators.className = 'operators';
        operators.style.display = 'flex';
        operators.style.boxSizing = 'border-box';
        operators.style.backgroundColor = 'white';
        operators.style.flex = '0 0 70px';
        operators.style.width = '375px';
        operators.style.margin = '10px auto'
        operators.style.alignSelf = 'flex-start';
        operators.style.gap = '10px';
        operators.style.padding = '10px';
        operators.style.fontSize = '4em'
        calculator.appendChild(operators);
    };

    const numbers = document.createElement('div');
    function numbersSection (){
        numbers.className = 'numbers';
        numbers.style.display = 'flex';
        numbers.style.boxSizing = 'border-box';
        numbers.style.backgroundColor = 'white';
        numbers.style.flex = '1';
        numbers.style.width = '375px';
        numbers.style.margin = '10px auto'
        // numbers.style.alignSelf = 'flex-start';
        numbers.style.gap = '10px';
        numbers.style.padding = '10px';
        // numbers.style.fontSize = '4em'
        numbers.style.flexWrap = 'wrap';
        calculator.appendChild(numbers);
    };

    function button(place ,operand, className) {
        const btn = document.createElement('button');
        btn.style.boxSizing = 'border-box';
        btn.className = 'btn' + ` ${className}`;
        btn.style.alignItems = "flex-start";
        btn.style.flex = '1';
        btn.style.padding = '0px';
        btn.textContent = operand;
        btn.style.fontSize = '30px';
        place.appendChild(btn);
    }

    caclBody();
    calcDisplay();
    operatorsSection();
    numbersSection();
    button(operators,'.', 'point');
    button(operators,'+', 'plus');
    button(operators,'-', 'minus');
    button(operators,'*', 'multiply');
    button(operators,'/', 'divide');
    button(operators,'<-', 'back');
    for(let i = 9; i > 0; i--) {
        button(numbers ,`${i}`,`number ${1}`);
    }
    button(numbers,'C', 'number');
    button(numbers,'0', 'number');
    button(numbers,'=', 'number');

    document.querySelectorAll('.number').forEach(element => {
        return element.style.flex = '1 0 100px'; 
     });

    function numFunction(trigger){
        document.querySelectorAll('button').forEach(element => {
            return element.addEventListener('click',() => {
                switch(element.textContent){
                    case 'C':
                        display.textContent = '';
                        number1 = null;
                        number2 = null;
                        operator = null;
                        sum = null;
                    break;
                    case '=':
                        if(number2 != null){
                            number2 = Number(display.textContent);
                            display.textContent = operate(number1,number2, operator).toFixed(2);
                        } else {
                            display.textContent = operate(number1,Number(display.textContent), operator).toFixed(2);
                        }
                        number1 = null;
                        number2 = null;
                        operator = null;
                    break;
                    case '+':
                        calculation(element);
                    break;
                    case '-':
                        calculation(element);
                    break;
                    case '*':
                        calculation(element);
                    break;
                    case '/':
                        calculation(element);
                    break;
                    case '<-':
                        display.textContent = display.textContent.slice(0, (display.textContent.length -1))
                    break;
                    case '.':
                        if(!display.textContent.includes('.'))display.textContent += '.';
                    break;
                    default:
                        return display.textContent += element.textContent;
                }
            })
        });

        function calculation(element){
            if(number1 === null){number1 = Number(display.textContent)}
            else if (number2 === null) {
                number2 = Number(display.textContent);
                number1 = operate(number1,number2,operator);
                number2 = null}
            operator = element.textContent;
            display.textContent = null;
        }
    }

    numFunction()

    function operate(num1, num2, operator){
        switch(operator){
            case '+':
                return add(num1,num2);
            break;
            case '-':
                return substract(num1,num2);
            break;
            case '*':
                return multiply(num1,num2);
            break;
            case '/':
                return divide(num1,num2);
            break;
        }
    }

    function keypress () {
        document.addEventListener('keypress', (event)=>{
            const porovnani = ['1','2','3','4','5','6','7','8','9','0']
            if(porovnani.includes(event.key))display.textContent += event.key;
        })
    }
    
    keypress();

}

calc();


