
    let histroyValue = document.getElementById("history-value");
    let outputValue = document.getElementById("output-value");

  
// -----------------taking the input values--------------------
    function display(inputNumber) {
        histroyValue.value += inputNumber;
    }
// -----------------calculate the values--------------------
function calculate(){
try{
    outputValue.innerText= eval(histroyValue.value);
   histroyValue.value = outputValue.innerText;
}
catch(err)
{
    alert("invalid");
    histroyValue.value= "";
}
}

// -----------------clear the values--------------------
document.getElementById("clear").onclick = function(){
        histroyValue.value= "";
        outputValue.innerText= "Ans"; 
}
// -----------------delete the one by one values--------------------
document.getElementById("delete").onclick = function(){
    histroyValue.value = histroyValue.value.slice(0,-1);
}
