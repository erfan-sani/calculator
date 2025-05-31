let display = document.getElementById('display');
let current = '';
let needsClosing = false;

function update() {
    display.textContent = current || '0';
}

function addNum(num) {
    if (num === '.' && current.includes('.')) return;
    current += num;
    update();
}

function addOp(op) {
    current += op;
    update();
}

function appendOperator(op) {
    if (op === 'Math.sqrt(') {
        current = op + current + ')';
    } else if (op === 'Math.pow(') {
        current = op + current + ',';
        needsClosing = true;
    }
    update();
}

function calculate() {
    try {
        if (needsClosing) {
            current += ')';
            needsClosing = false;
        }
        let result = eval(current);
        current = result.toString();
        update();
    } catch {
        display.textContent = 'Error';
        current = '';
        needsClosing = false;
    }
}

function clearAll() {
    current = '';
    needsClosing = false;
    update();
}

function back() {
    current = current.slice(0, -1);
    update();
}