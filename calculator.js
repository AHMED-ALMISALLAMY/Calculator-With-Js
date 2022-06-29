// --> Object Constructor

// let Calculator = function()
// {
//     this.FirstName = "Ahmed";
//     this.lastname = "elmsesasf";
//     this.writeText = function() {
//         console.log("here we are from object function");
//     }
// }

// let calc = new Calculator();
// calc.FirstName = "cdscds";
// console.log(calc.FirstName);
// calc.writeText();



// --> Object Litrals

// let calculator = {
//     firstName: "Ahmed",
//     age: 16,
//     writeText: function() {
//         console.log("This is Object Function");
//     }
// }

// console.log(calculator.firstName);
// calculator.writeText();

// console.log(typeof calculator);     // object
// calculator = "";
// console.log(calculator);    // string



let Calculator = {
    inputText: document.getElementById('inputTypeText'),
    firstValue: null,
    operator: 0,
    newOperation: true,
    writeText: function(buttonValue) {
        if (this.inputText.value !== "" && this.newOperation === false) {
            this.inputText.value = buttonValue;
            this.newOperation = true;
            return;
        }
        else
            this.inputText.value += buttonValue;
    },
    OperatorClick: function(CurrentOperator) {
        if (this.inputText.value === "") {
            alert("Please, Enter First Value");
            return;
        }
        this.firstValue = parseFloat(this.inputText.value);
        this.inputText.value = "";
        this.operator = CurrentOperator;
    },
    Calculation: function() {
        if (this.inputText.value === "") {
            alert("Please, Enter Second Value");
            return;
        }

        if (this.firstValue === null) {
            alert("Please, Enter First Value");
            return;
        }
        let NewValue = parseFloat(this.inputText.value);
        switch(this.operator) {
            case "+":
                this.inputText.value = this.firstValue + NewValue;
                break;
            case "-":
                this.inputText.value = this.firstValue - NewValue;
                break; 
            case "x":
                this.inputText.value = this.firstValue * NewValue;
                break;
            case "/":
                this.inputText.value = this.firstValue / NewValue;
                break;    
        }
        this.firstValue = null;
        this.operator = 0;
        this.newOperation = false;
    },
    clearButton: function() {
        this.inputText.value = "";
        this.firstValue = null;
        this.operator = 0;
        this.newOperation = false;
    }
}