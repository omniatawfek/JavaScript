let input = document.querySelector("input");
let result = document.querySelector(".result");

input.oninput = function(){
    let dollarValue = input.value;
    let egypValue = (dollarValue *15.6).toFixed(2);
    if(dollarValue == "" || isNaN(dollarValue)){
        result.textContent = `{0} USD Dollar = {0} Egyptian Pound`;
    }
    else 
    result.textContent = `${dollarValue} USD Dollar = ${egypValue} Egyptian Pound`;
}