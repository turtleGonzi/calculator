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
        display.textContent = '2';
        display.style.textAlign = 'end';
        calculator.appendChild(display);
    };

    const operator = document.createElement('div');
    function operatorSection (){
        operator.className = 'operator';
        operator.style.display = 'flex';
        operator.style.boxSizing = 'border-box';
        operator.style.backgroundColor = 'white';
        operator.style.flex = '0 0 70px';
        operator.style.width = '375px';
        operator.style.margin = '10px auto'
        operator.style.alignSelf = 'flex-start';
        operator.style.gap = '10px';
        operator.style.padding = '10px';
        operator.style.fontSize = '4em'
        calculator.appendChild(operator);
    };

    function button(operand, className) {
        const btn = document.createElement('button');
        btn.style.boxSizing = 'border-box';
        btn.className = 'btn' + ` ${className}`;
        btn.style.alignItems = "flex-start";
        btn.style.flex = 1;
        btn.style.padding = '0px';
        btn.textContent = operand;
        btn.style.fontSize = '30px';
        operator.appendChild(btn);
    }

    caclBody();
    calcDisplay();
    operatorSection();
    button('+', 'plus');
    button('-', 'minus');
    button('*', 'multiply');
    button('/', 'divide');
}

calc();
