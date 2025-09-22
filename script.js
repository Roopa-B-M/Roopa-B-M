let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");
    const action = button.getAttribute("data-action");

    if (value) {
      appendValue(value);
    } else if (action === "clear") {
      clearDisplay();
    } else if (action === "delete") {
      deleteLast();
    } else if (action === "equals") {
      calculateResult();
    }
  });
});

function appendValue(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = "";
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  try {
    display.value = eval(display.value);
  } catch {
    display.value = "Error";
  }
}
