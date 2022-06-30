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


let DisplayValues = [];

let Calculator = {
    inputText: document.getElementById('inputTypeText'),
    firstValue: null,
    operator: 0,
    currentValues: [],
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
        let result = 0; 
        switch(this.operator) {
            case "+":
                result = this.inputText.value = this.firstValue + NewValue;
                break;
            case "-":
                result = this.inputText.value = this.firstValue - NewValue;
                break; 
            case "x":
                result = this.inputText.value = this.firstValue * NewValue;
                break;
            case "/":
                result = this.inputText.value = this.firstValue / NewValue;
                break;    
        }
        this.firstValue = null;
        this.operator = 0;
        this.newOperation = false;
        this.currentValues.push(result);
        let DisplayValues = document.getElementById('CalacValues');
        DisplayValues.innerHTML = "";
        // DisplayValues.innerText = this.currentValues.join("\t");
        
        // for (let i = 0; i < this.currentValues.lenght; i++) {
        //     DisplayValues.innerHTML += "<li>" + this.currentValues[0] + "</li>";   
        // }

        this.currentValues.forEach(element => {
            DisplayValues.innerHTML += "<li>" + element + "</li>"; 
        });
  
    },
    clearButton: function() {
        this.inputText.value = "";
        this.firstValue = null;
        this.operator = 0;
        this.newOperation = false;
    }
}