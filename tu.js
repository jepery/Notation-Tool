// Title Underwriter

let TitleUnderwriterAgentName = localStorage.getItem('tu-agent');
let TitleUnderwriterNumber = localStorage.getItem('tu-number');

document.getElementById('tu-agent').textContent = TitleUnderwriterAgentName;
document.getElementById('tu-number').textContent = TitleUnderwriterNumber;

// email

TUEmail.onclick = function sendMail() {

    var partyEmail = document.getElementById("TUnderwriterEmail").value;
    var BorrowersName = document.getElementById("BorrowersNameTU").value;

    window.location.href = "mailto:"+partyEmail+"?subject=Request for TPOL?body=Hi"+BorrowersName+",";

}