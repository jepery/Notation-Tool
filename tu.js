// Title Underwriter

let TitleUnderwriterAgentName = localStorage.getItem('tu-agent');
let TitleUnderwriterNumber = localStorage.getItem('tu-number');

document.getElementById('tu-agent').textContent = TitleUnderwriterAgentName;
document.getElementById('tu-number').textContent = TitleUnderwriterNumber;

// email

TUEmail.onclick = function sendMail() {

    var link = "mailto=" + document.getElementById('TUnderwriterEmail').value + "&subject=Hi" ;

    window.location.href = link;

};