function appendValue(val) {
    document.getElementById("screen").value += val;
}

function clearScreen() {
    document.getElementById("screen").value = "";
}

function calculate() {
    let result = eval(document.getElementById("screen").value);
    document.getElementById("screen").value = result;
}
