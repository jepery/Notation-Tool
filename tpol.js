btnLoanNumberTPOL.onclick = function () {
  floatingInputLoanNumberTPOL.select();

  document.execCommand("Copy");
};

tpolQN.onclick = function () {
  let inputElementQN = document.createElement("input");
  inputElementQN.type = "text";
  inputElementQN.value =
    "708_" + floatingInputLoanNumberTPOL.value + "_23310_1";
  document.body.appendChild(inputElementQN);
  inputElementQN.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementQN);
};

tpolEU.onclick = function () {
  let inputElementEU = document.createElement("input");
  inputElementEU.type = "text";
  inputElementEU.value =
    "936_" + floatingInputLoanNumberTPOL.value + "_23310_1";
  document.body.appendChild(inputElementEU);
  inputElementEU.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementEU);
};

MspPassTPOL.onclick = function () {
  mspPassNoteTPOL.style.display = "block";

  let inputElementMspPass = document.createElement("input");
  inputElementMspPass.type = "text";
  inputElementMspPass.value =
    "Searched servicing system. Loan is active, Man Code: " +
    MspManCodeTPOL.value;
  document.body.appendChild(inputElementMspPass);
  inputElementMspPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspPass);
};

IcmpPassTPOL.onclick = function () {
  icmpTPOLpass.style.display = "block";
  GNMAValidation.style.display = "block";
  icmpTPOLfail.style.display = "none";
  ValdationInstruction.style.display = "none";

  let inputElementIcmpPass = document.createElement("input");
  inputElementIcmpPass.type = "text";
  inputElementIcmpPass.value = "Title Policy is located in the imaging system.";
  document.body.appendChild(inputElementIcmpPass);
  inputElementIcmpPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementIcmpPass);
};

IcmpFailTPOL.onclick = function () {
  icmpTPOLfail.style.display = "block";
  icmpTPOLpass.style.display = "none";
  GNMAValidation.style.display = "none";
  GNMANotes.style.display = "none";
  ValdationInstruction.style.display = "none";

  let inputElementIcmpPass = document.createElement("input");
  inputElementIcmpPass.type = "text";
  inputElementIcmpPass.value =
    "Researched imaging system; no Title Policy found.";
  document.body.appendChild(inputElementIcmpPass);
  inputElementIcmpPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementIcmpPass);
};

GNMAYes.onclick = function () {
  icmpTPOLpass.style.display = "none";
  GNMAValidation.style.display = "none";
  GNMANotes.style.display = "block";
  ValdationInstruction.style.display = "none";
};

GNMANo.onclick = function () {
  icmpTPOLpass.style.display = "none";
  GNMAValidation.style.display = "none";
  GNMANotes.style.display = "none";
  ValdationInstruction.style.display = "block";
};

GNMAActivityNotes.onclick = function () {
  ValdationInstruction.style.display = "block";

  let inputElementGNMATPOL = document.createElement("input");
  inputElementGNMATPOL.type = "text";
  inputElementGNMATPOL.value =
    "Validating Title Policy with Recorded Mortgage per GNMA validation." +
    GNMAMortgage.value;
  document.body.appendChild(inputElementGNMATPOL);
  inputElementGNMATPOL.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementGNMATPOL);
};

SAEstablishPass.onclick = function () {
  SACallPass.style.display = "block";
  EstablishContactSAno.style.display = "none";
  SACallPass1.style.display = "block";
  SAVoicemailPass1.style.display = "none";
  SAVoicemailFail1.style.display = "none";
};

exampleRadiosSA1.onclick = function () {
  EstablishContactSAno.style.display = "none";
  SACallPass1.style.display = "block";
  SACallPass2.style.display = "none";
  SACallPass3.style.display = "none";
  SACallPass4.style.display = "none";
};

SACallPassProvided.onclick = function () {
  let inputElementSACallPassProvided = document.createElement("input");
  inputElementSACallPassProvided.type = "text";
  inputElementSACallPassProvided.value =
    "Called " +
    SettlementAgent.value +
    " at " +
    SettlementAgentNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameSA.value +
    " was told that they will give the copy of the TPOL today, left email address.";
  document.body.appendChild(inputElementSACallPassProvided);
  inputElementSACallPassProvided.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSACallPassProvided);
};

exampleRadiosSA2.onclick = function () {
  EstablishContactSAno.style.display = "none";
  SACallPass1.style.display = "none";
  SACallPass2.style.display = "block";
  SACallPass3.style.display = "none";
  SACallPass4.style.display = "none";
};

SACallPassUnable.onclick = function () {
  let inputElementSACallPassUnable = document.createElement("input");
  inputElementSACallPassUnable.type = "text";
  inputElementSACallPassUnable.value =
    "Called " +
    SettlementAgent.value +
    " at " +
    SettlementAgentNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameSA.value +
    " was told that they are unable to provide the copy of the TPOL. Will proceed to the next contact.";
  document.body.appendChild(inputElementSACallPassUnable);
  inputElementSACallPassUnable.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSACallPassUnable);
};

exampleRadiosSA3.onclick = function () {
  EstablishContactSAno.style.display = "none";
  SACallPass1.style.display = "none";
  SACallPass2.style.display = "none";
  SACallPass3.style.display = "block";
  SACallPass4.style.display = "none";
};

SACallPassInstructedtoEmail.onclick = function () {
  let inputElementSACallEmail = document.createElement("input");
  inputElementSACallEmail.type = "text";
  inputElementSACallEmail.value =
    "Called " +
    SettlementAgent.value +
    " at " +
    SettlementAgentNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameSA.value +
    " was instructed to send an email request to " +
    SettlementAgentEmail.value;
  document.body.appendChild(inputElementSACallEmail);
  inputElementSACallEmail.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSACallEmail);
};

SACallPassEmailSent.onclick = function () {
  let inputElementSACallEmailSent = document.createElement("input");
  inputElementSACallEmailSent.type = "text";
  inputElementSACallEmailSent.value =
    "Emailed " +
    SettlementAgent.value +
    " at " +
    SettlementAgentEmail.value +
    " to request for the copy of the TPOL.";
  document.body.appendChild(inputElementSACallEmailSent);
  inputElementSACallEmailSent.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSACallEmailSent);
};

exampleRadiosSA4.onclick = function () {
  EstablishContactSAno.style.display = "none";
  SACallPass1.style.display = "none";
  SACallPass2.style.display = "none";
  SACallPass3.style.display = "none";
  SACallPass4.style.display = "block";
};

SACallPassOther.onclick = function () {
  let inputElementSACallPassOther = document.createElement("input");
  inputElementSACallPassOther.type = "text";
  inputElementSACallPassOther.value =
    "Called " +
    SettlementAgent.value +
    " at " +
    SettlementAgentNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameSA.value +
    " was told that " +
    SACallOtherTextArea.value;
  document.body.appendChild(inputElementSACallPassOther);
  inputElementSACallPassOther.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSACallPassOther);
};

SAEstablishFail.onclick = function () {
  EstablishContactSAno.style.display = "block";
  SACallPass.style.display = "none";
  SACallPass1.style.display = "none";
};

SAVoicemailPass.onclick = function () {
  SAVoicemailPass1.style.display = "block";
  EstablishContactSAno.style.display = "none";
  SAVoicemailFail1.style.display = "none";
};

SAVoicemailYes.onclick = function (){

  let inputElementSAVoicemailYes = document.createElement("input");
  inputElementSAVoicemailYes.type = "text";
  inputElementSAVoicemailYes.value =
    "Called " +
    SettlementAgent.value +
    " at " +
    SettlementAgentNumber.value +
    " to request for the copy of the TPOL. Left voicemail, Borrowers name and Property address.";
  document.body.appendChild(inputElementSAVoicemailYes);
  inputElementSAVoicemailYes.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSAVoicemailYes);
};

SAVoicemailFail.onclick = function () {
  SAVoicemailFail1.style.display = "block";
  SAVoicemailPass1.style.display = "none";
  EstablishContactSAno.style.display = "none";
};

SAVoicemailNo.onclick = function (){

  let inputElementSAVoicemailNo = document.createElement("input");
  inputElementSAVoicemailNo.type = "text";
  inputElementSAVoicemailNo.value =
    "Called " +
    SettlementAgent.value +
    " at " +
    SettlementAgentNumber.value +
    " to request for the copy of the TPOL. No one answers the call, will call again tomorrow.";
  document.body.appendChild(inputElementSAVoicemailNo);
  inputElementSAVoicemailNo.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSAVoicemailNo);
};

SACallPassInstructedtoEmail1.onclick = function sendMail() {
  const customer = document.getElementById("BorrowersNameSA").value;
  const propertyAddress = document.getElementById("BorrowersAddressSA").value;
  const closingDate = document.getElementById("ClosingDateSA").value;
  const loanAmount = document.getElementById("LoanAmountSA").value;
  const fileNumber = document.getElementById("FileNumberSA").value;
  const emailAddress = document.getElementById("SettlementAgentEmail").value;

  // Construct the email message
  const subject = encodeURIComponent("Loan Document Request");
  const body = encodeURIComponent(`Dear Sue,

During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?

Customer: ${customer}
Property Address: ${propertyAddress}
Closing Date: ${closingDate}
Loan Amount: ${loanAmount}
File Number: ${fileNumber}

What we are requesting from you:

· Reply with a copy of the Lender's Title Policy

Thank you for your assistance with resolving this matter. 

Sincerely,
`);

  // Construct the mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  // Open the default email client with the pre-filled subject and body
  window.location.href = mailtoLink;
};

let SettlementAgent = document.getElementById("SettlementAgent");
let SettlementAgentNumber = document.getElementById("SettlementAgentNumber");

// ProceedSA.onclick = function () {

//   let SettlementAgentValue = SettlementAgent.value;
//   let SettlementAgentNumbervalue = SettlementAgentNumber.value;

//   localStorage.setItem('settlement-agent', SettlementAgentValue);
//   localStorage.setItem('settlementagent-number', SettlementAgentNumbervalue);

//   window.location.href = "settlementagent.html";

// };

SameSA.onclick = function () {
  let inputElementSameSA = document.createElement("input");
  inputElementSameSA.type = "text";
  inputElementSameSA.value =
    "Skipped Calling SA, " +
    SettlementAgent.value +
    " was also the Title Company for this loan.";
  document.body.appendChild(inputElementSameSA);
  inputElementSameSA.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSameSA);
};

NotInBusinessSA.onclick = function () {
  let inputElementNotInBusinessSA = document.createElement("input");
  inputElementNotInBusinessSA.type = "text";
  inputElementNotInBusinessSA.value =
    SettlementAgent.value +
    " is already closed according to OpenCorporates, SOS and web search. Will proceed to next contact.";
  document.body.appendChild(inputElementNotInBusinessSA);
  inputElementNotInBusinessSA.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementNotInBusinessSA);
};

SameTC.onclick = function () {
  let inputElementSameTC = document.createElement("input");
  inputElementSameTC.type = "text";
  inputElementSameTC.value =
    "Skipped Calling TC, " +
    TitleCompany.value +
    " was also the Title Underwriter for this loan.";
  document.body.appendChild(inputElementSameTC);
  inputElementSameTC.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementSameTC);
};

NotInBusinessTC.onclick = function () {
  let inputElementNotInBusinessTC = document.createElement("input");
  inputElementNotInBusinessTC.type = "text";
  inputElementNotInBusinessTC.value =
    TitleCompany.value +
    " is already closed according to OpenCorporates, SOS and web search. Will proceed to next contact.";
  document.body.appendChild(inputElementNotInBusinessTC);
  inputElementNotInBusinessTC.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementNotInBusinessTC);
};

// Title Underwriter

// ProceedTU.onclick = function () {

//   let TitleUnderWriterValue = TitleUnderwriter.value;
//   let TitleUnderWriterNumbervalue = TitleUnderwriterNumber.value;

//   localStorage.setItem('tu-agent', TitleUnderWriterValue);
//   localStorage.setItem('tu-number', TitleUnderWriterNumbervalue);

//   window.location.href = "titleunderwriter.html";

// };
