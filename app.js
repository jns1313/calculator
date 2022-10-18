const display = document.getElementById('display');
const btns = document.querySelectorAll('button');


// loop to add event handler for each button
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        // console.log('click');
        const data = btn.dataset.src;
        const operatorData = btn.dataset.operator;

        // if (data) {
        //     display.value += data;
        // };

        // if (operatorData === 'AC') {
        //     clear();
        // } else if (operatorData === 'DEL') {
        //     del();
        // } else if (operatorData === '=') {
        //     calculate();
        // }

        switch (data || operatorData) {
            case 'AC':
                clear();
                break;
            case 'DEL': 
                del();
                break;
            case '=':
                calculate();
                break;
            case '.':
                if (display.value.includes('.')) {
                    break;
                } else {
                    display.value += data;
                }
                break;
            default: 
                display.value += data;
                break;
        };
    });
});

// FUNCTIONS

// calculate
function calculate() {
    display.value = eval(display.value);
}

function clear() {
    display.value = '';
}

function del() {
    display.value = display.value.slice(0, -1);
}

