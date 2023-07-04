const bodyEl = document.querySelector('body');
const toggleSwitch = document.querySelector('.switch');
const display = document.querySelector('.screen');
const buttons = document.querySelectorAll("button");
const specialChars = ['%', '*', '/', '-', '+', '='];
let output = "";
//Define function to calculate based on button clicked.
const calculate = (btnValue) => {
    // display.focus();
    if (btnValue === "=" && output !== "") {
        output = eval(output);
    } 
    else if (btnValue === "RESET") {
        output = "";
    } 
    else if (btnValue === "DEL") {
        //If DEL button is clicked, remove the last character from the output.
        output = output.toString().slice(0, -1);
    } 
    else {
        //If output is empty and button is specialChars then return
        if (output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    display.value = output;
};
//Add event listener to buttons, call calculate() on click.
buttons.forEach((button) => {
  //Button click listener calls calculate() with dataset value as argument.
  button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});















let index = 0;

toggleSwitch.addEventListener('click', ()=>{

    if(index === 0){
        bodyEl.classList.add('theme-2')
        toggleSwitch.classList.add('trans-2')
        index++;
    }
    else if(index === 1){
        bodyEl.classList.remove('theme-2')
        toggleSwitch.classList.remove('trans-2')
        bodyEl.classList.add('theme-3');
        toggleSwitch.classList.add('trans-3')
        index++
    }
    else if(index === 2){
        index = 0;
        toggleSwitch.classList.remove('trans-3')
        bodyEl.classList.remove('theme-3')

    }
})