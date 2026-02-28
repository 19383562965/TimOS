document.addEventListener("DOMContentLoaded", function () {

  const input = document.getElementById("calculator-input");

  let equation = "";
  let justCalculated = false;

  function updateDisplay() {
    input.value = equation || "0";
  }

  function appendNumber(num) {
    if (justCalculated) {
      equation = "";
      justCalculated = false;
    }
    equation += num;
    updateDisplay();
  }

  function appendOperator(op) {
    if (!equation) return;

    const lastChar = equation.slice(-1);

    if (["+", "-", "*", "/"].includes(lastChar)) {
      equation = equation.slice(0, -1);
    }

    equation += op;
    justCalculated = false;
    updateDisplay();
  }

  function appendDecimal() {
    const parts = equation.split(/[\+\-\*\/]/);
    const lastNumber = parts[parts.length - 1];

    if (!lastNumber.includes(".")) {
      equation += ".";
      updateDisplay();
    }
  }

  function calculate() {
    if (!equation) return;

    try {
      const result = Function("return " + equation)();
      equation = result.toString();
      justCalculated = true;
    } catch {
      equation = "";
      input.value = "Error";
      return;
    }

    updateDisplay();
  }

  function backspace() {
    if (justCalculated) {
      equation = "";
      justCalculated = false;
    } else {
      equation = equation.slice(0, -1);
    }
    updateDisplay();
  }

  function clearAll() {
    equation = "";
    justCalculated = false;
    updateDisplay();
  }

  // Connect buttons
  document.getElementById("cal-btn-zero").onclick = () => appendNumber("0");
  document.getElementById("cal-btn-one").onclick = () => appendNumber("1");
  document.getElementById("cal-btn-two").onclick = () => appendNumber("2");
  document.getElementById("cal-btn-three").onclick = () => appendNumber("3");
  document.getElementById("cal-btn-four").onclick = () => appendNumber("4");
  document.getElementById("cal-btn-five").onclick = () => appendNumber("5");
  document.getElementById("cal-btn-six").onclick = () => appendNumber("6");
  document.getElementById("cal-btn-seven").onclick = () => appendNumber("7");
  document.getElementById("cal-btn-eight").onclick = () => appendNumber("8");
  document.getElementById("cal-btn-nine").onclick = () => appendNumber("9");

  document.getElementById("cal-btn-plus").onclick = () => appendOperator("+");
  document.getElementById("cal-btn-minus").onclick = () => appendOperator("-");
  document.getElementById("cal-btn-multiply").onclick = () => appendOperator("*");
  document.getElementById("cal-btn-divide").onclick = () => appendOperator("/");

  document.getElementById("cal-btn-point").onclick = appendDecimal;
  document.getElementById("cal-btn-equal").onclick = calculate;
  document.getElementById("cal-btn-delete").onclick = clearAll;
  document.getElementById("cal-btn-backspace").onclick = backspace;

  updateDisplay();

});