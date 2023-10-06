const floatingInputLoanNumber = document.getElementById("floatingInputLoanNumber");
const btnLoanNumber = document.getElementById("btnLoanNumber");
const firstQ = document.getElementById("firstQ");

btnLoanNumber.onclick = function () {
    floatingInputLoanNumber.select();

    document.execCommand("Copy");
}

firstQ.onclick = function () {
    
    let inputElementQN = document.createElement("input");
    inputElementQN.type = "text";
    inputElementQN.value = "780_" + floatingInputLoanNumber.value + "_03000_1";
    document.body.appendChild(inputElementQN);
    inputElementQN.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementQN);

}

secondE.onclick = function () {
    
    let inputElementEU = document.createElement("input");
    inputElementEU.type = "text";
    inputElementEU.value = "936_" + floatingInputLoanNumber.value + "_03000_1";
    document.body.appendChild(inputElementEU);
    inputElementEU.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementEU);

}