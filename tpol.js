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
  TPOLFailTrigger.style.display = "block";
  MspPullUp.style.display = "none";
  MspPullUpYes.style.display = "none";
  MspTransferNo.style.display = "none";
  MspPullUpNo.style.display = "none";
  mspPassNoteMTG.style.display = "none";
  mspFailNoteMTG.style.display = "none";

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

MspFailTPOL.onclick = function () {

  TPOLFailTrigger.style.display = "none";
  MspPullUp.style.display = "block";
  MspPullUpYes.style.display = "none";
  MspTransferNo.style.display = "none";
  MspPullUpNo.style.display = "none";
  mspPassNoteMTG.style.display = "none";
  mspFailNoteMTG.style.display = "block";

};

MspPullYes.onclick = function() {

  MspPullUpYes.style.display = "block";
  MspPullUp.style.display = "none";

};

MspPullNo.onclick = function() {

  MspPullUpYes.style.display = "none";
  MspPullUp.style.display = "none";
  MspPullUpNo.style.display = "block";

};

MspServiceNo.onclick = function() {

  MspPullUpYes.style.display = "none";
  MspPullUp.style.display = "none";
  MspTransferNo.style.display = "block";

};

MspPullUpNo1.onclick = function(){

  let inputElementMspPullUpNo1 = document.createElement("input");
  inputElementMspPullUpNo1.type = "text";
  inputElementMspPullUpNo1.value =
    "Searched the servicing system. Loan doesn't pull up in MSP.";
  document.body.appendChild(inputElementMspPullUpNo1);
  inputElementMspPullUpNo1.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspPullUpNo1);
};

MspPullUpNo3.onclick = function(){

  let inputElementMspPullUpNo3 = document.createElement("input");
  inputElementMspPullUpNo3.type = "text";
  inputElementMspPullUpNo3.value =
    "Not Curable. Loan is not valid in MSP.";
  document.body.appendChild(inputElementMspPullUpNo3);
  inputElementMspPullUpNo3.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspPullUpNo3);
};

MspTransferNo1.onclick = function(){

  let inputElementMspTransferNo1 = document.createElement("input");
  inputElementMspTransferNo1.type = "text";
  inputElementMspTransferNo1.value =
    "Searched the servicing system. Loan was paid in full and was not service transferred.";
  document.body.appendChild(inputElementMspTransferNo1);
  inputElementMspTransferNo1.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspTransferNo1);
};

MspPullUpNo2.onclick = function(){

  let inputElementMspPullUpNo2 = document.createElement("input");
  inputElementMspPullUpNo2.type = "text";
  inputElementMspPullUpNo2.value =
    "Not Curable. Loan was paid in full and was not service transferred.";
  document.body.appendChild(inputElementMspPullUpNo2);
  inputElementMspPullUpNo2.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspPullUpNo2);
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

SAVoicemailYes1.onclick = function (){

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
  const external = document.getElementById("SettlementAgent").value;

  // Construct the email message
  const subject = encodeURIComponent("Loan Document Request");
  const body = encodeURIComponent(`Dear ${external},

During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?

Customer: ${customer}
Property Address: ${propertyAddress}
Closing Date: ${closingDate}
Loan Amount: ${loanAmount}
File Number: ${fileNumber}

What we are requesting from you:

* Reply with a copy of the Lender's Title Policy

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

TUEstablishPass.onclick = function () {
  TUCallPass.style.display = "block";
  EstablishContactTUno.style.display = "none";
  TUCallPass1.style.display = "block";
  TUVoicemailPass1.style.display = "none";
  TUVoicemailFail1.style.display = "none";
};

exampleRadiosTU1.onclick = function () {
  EstablishContactTUno.style.display = "none";
  TUCallPass1.style.display = "block";
  TUCallPass2.style.display = "none";
  TUCallPass3.style.display = "none";
  TUCallPass4.style.display = "none";
};

TUCallPassProvided.onclick = function () {
  let inputElementTUCallPassProvided = document.createElement("input");
  inputElementTUCallPassProvided.type = "text";
  inputElementTUCallPassProvided.value =
    "Called " +
    TitleUnderwriter.value +
    " at " +
    TitleUnderwriterNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameTU.value +
    " was told that they will give the copy of the TPOL today, left email address.";
  document.body.appendChild(inputElementTUCallPassProvided);
  inputElementTUCallPassProvided.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUCallPassProvided);
};

exampleRadiosTU2.onclick = function () {
  EstablishContactTUno.style.display = "none";
  TUCallPass1.style.display = "none";
  TUCallPass2.style.display = "block";
  TUCallPass3.style.display = "none";
  TUCallPass4.style.display = "none";
};

TUCallPassUnable.onclick = function () {
  let inputElementTUCallPassUnable = document.createElement("input");
  inputElementTUCallPassUnable.type = "text";
  inputElementTUCallPassUnable.value =
    "Called " +
    TitleUnderwriter.value +
    " at " +
    TitleUnderwriterNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameTU.value +
    " was told that they are unable to provide the copy of the TPOL. Will proceed to the next contact.";
  document.body.appendChild(inputElementTUCallPassUnable);
  inputElementTUCallPassUnable.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUCallPassUnable);
};

exampleRadiosTU3.onclick = function () {
  EstablishContactTUno.style.display = "none";
  TUCallPass1.style.display = "none";
  TUCallPass2.style.display = "none";
  TUCallPass3.style.display = "block";
  TUCallPass4.style.display = "none";
};

TUCallPassInstructedtoEmail.onclick = function () {
  let inputElementTUCallEmail = document.createElement("input");
  inputElementTUCallEmail.type = "text";
  inputElementTUCallEmail.value =
    "Called " +
    TitleUnderwriter.value +
    " at " +
    TitleUnderwriterNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameTU.value +
    " was instructed to send an email request to " +
    TUEmail.value;
  document.body.appendChild(inputElementTUCallEmail);
  inputElementTUCallEmail.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUCallEmail);
};

TUCallPassEmailSent.onclick = function () {
  let inputElementTUCallEmailSent = document.createElement("input");
  inputElementTUCallEmailSent.type = "text";
  inputElementTUCallEmailSent.value =
    "Emailed " +
    TitleUnderwriter.value +
    " at " +
    TUEmail.value +
    " to request for the copy of the TPOL.";
  document.body.appendChild(inputElementTUCallEmailSent);
  inputElementTUCallEmailSent.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUCallEmailSent);
};

exampleRadiosTU4.onclick = function () {
  EstablishContactTUno.style.display = "none";
  TUCallPass1.style.display = "none";
  TUCallPass2.style.display = "none";
  TUCallPass3.style.display = "none";
  TUCallPass4.style.display = "block";
};

TUCallPassOther.onclick = function () {
  let inputElementTUCallPassOther = document.createElement("input");
  inputElementTUCallPassOther.type = "text";
  inputElementTUCallPassOther.value =
    "Called " +
    TitleUnderwriter.value +
    " at " +
    TitleUnderwriterNumber.value +
    " to request for the copy of the TPOL. Spoke to " +
    NameTU.value +
    " was told that " +
    TUCallOtherTextArea.value;
  document.body.appendChild(inputElementTUCallPassOther);
  inputElementTUCallPassOther.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUCallPassOther);
};

TUEstablishFail.onclick = function () {
  EstablishContactTUno.style.display = "block";
  TUCallPass.style.display = "none";
  TUCallPass1.style.display = "none";
};

TUVoicemailPass.onclick = function () {
  TUVoicemailPass1.style.display = "block";
  EstablishContactTUno.style.display = "none";
  TUVoicemailFail1.style.display = "none";
};

TUVoicemailYes1.onclick = function (){

  let inputElementTUVoicemailYes = document.createElement("input");
  inputElementTUVoicemailYes.type = "text";
  inputElementTUVoicemailYes.value =
    "Called " +
    TitleUnderwriter.value +
    " at " +
    TitleUnderwriterNumber.value +
    " to request for the copy of the TPOL. Left voicemail, Borrowers name and Property address.";
  document.body.appendChild(inputElementTUVoicemailYes);
  inputElementTUVoicemailYes.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUVoicemailYes);
};

TUVoicemailFail.onclick = function () {
  TUVoicemailFail1.style.display = "block";
  TUVoicemailPass1.style.display = "none";
  EstablishContactTUno.style.display = "none";
};

TUVoicemailNo.onclick = function (){

  let inputElementTUVoicemailNo = document.createElement("input");
  inputElementTUVoicemailNo.type = "text";
  inputElementTUVoicemailNo.value =
    "Called " +
    TitleUnderwriter.value +
    " at " +
    TitleUnderwriterNumber.value +
    " to request for the copy of the TPOL. No one answers the call, will call again tomorrow.";
  document.body.appendChild(inputElementTUVoicemailNo);
  inputElementTUVoicemailNo.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementTUVoicemailNo);
};

TUCallPassInstructedtoEmail1.onclick = function sendMail() {
  const customer = document.getElementById("BorrowersNameTU").value;
  const propertyAddress = document.getElementById("BorrowersAddressTU").value;
  const closingDate = document.getElementById("ClosingDateTU").value;
  const loanAmount = document.getElementById("LoanAmountTU").value;
  const fileNumber = document.getElementById("FileNumberTU").value;
  const emailAddress = document.getElementById("TUEmail").value;
  const external = document.getElementById("TitleUnderwriter").value;

  // Construct the email message
  const subject = encodeURIComponent("Loan Document Request");
  const body = encodeURIComponent(`Dear ${external},

During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?

Customer: ${customer}
Property Address: ${propertyAddress}
Closing Date: ${closingDate}
Loan Amount: ${loanAmount}
File Number: ${fileNumber}

What we are requesting from you:

    • Reply with a copy of the Lender's Title Policy

Thank you for your assistance with resolving this matter. 

Sincerely,
`);

  // Construct the mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  // Open the default email client with the pre-filled subject and body
  window.location.href = mailtoLink;
};

inlineRadio1FirstAmerican.onclick = function () {

  FirstAmericanDiv.style.display = "block";
  OldDiv.style.display = "none";
  StewartDiv.style.display = "none";
  FidelityDiv.style.display = "none";
  TUOtherDiv.style.display = "none";

};

inlineRadio2OldRepublic.onclick = function () {

  FirstAmericanDiv.style.display = "none";
  OldDiv.style.display = "block";
  StewartDiv.style.display = "none";
  FidelityDiv.style.display = "none";
  TUOtherDiv.style.display = "none";

};

inlineRadio3StewartTitle.onclick = function () {

  FirstAmericanDiv.style.display = "none";
  OldDiv.style.display = "none";
  StewartDiv.style.display = "block";
  FidelityDiv.style.display = "none";
  TUOtherDiv.style.display = "none";

};

inlineRadio4Fidelity.onclick = function () {

  FirstAmericanDiv.style.display = "none";
  OldDiv.style.display = "none";
  StewartDiv.style.display = "none";
  FidelityDiv.style.display = "block";
  TUOtherDiv.style.display = "none";

};

inlineRadio4OthersTU.onclick = function () {

  FirstAmericanDiv.style.display = "none";
  OldDiv.style.display = "none";
  StewartDiv.style.display = "none";
  FidelityDiv.style.display = "none";
  TUOtherDiv.style.display = "block";

};

EmailFirstAmerican.onclick = function () {

  const customer = document.getElementById("BorrowersNameFirstAmerican").value;
  const propertyAddress = document.getElementById("BorrowersAddressFirstAmerican").value;
  const closingDate = document.getElementById("ClosingDateFirstAmerican").value;
  const loanAmount = document.getElementById("LoanAmountFirstAmerican").value;
  const emailAddress = "FAPostClosing@firstam.com";

  // Construct the email message
  const subject = encodeURIComponent("Loan Document Request");
  const body = encodeURIComponent(`Dear First American,

During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?<br><br>

Customer:${customer}
Property Address:${propertyAddress}
Closing Date:${closingDate}
Loan Amount:${loanAmount}

What we are requesting from you:

* Reply with a copy of the Lender's Title Policy

Thank you for your assistance with resolving this matter.


`);

  // Construct the mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  // Open the default email client with the pre-filled subject and body
  window.location.href = mailtoLink;
};

EmailOld.onclick = function () {

  const customer = document.getElementById("BorrowersNameOld").value;
  const propertyAddress = document.getElementById("BorrowersAddressOld").value;
  const closingDate = document.getElementById("ClosingDateOld").value;
  const loanAmount = document.getElementById("LoanAmountOld").value;
  const emailAddress = "Tpitts@OldRepublicTitle.com";

  // Construct the email message
  const subject = encodeURIComponent("Loan Document Request");
  const body = encodeURIComponent(`Hi Old Republic,

During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?<br><br>

Borrower: ${customer}
Property Address: ${propertyAddress}
Closing Date: ${closingDate}
Loan Amount: ${loanAmount}

What we are requesting from you:

    • Reply with a copy of the Lender's Title Policy

Thank you for your assistance with resolving this matter.


`);

  // Construct the mailto link
  const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

  // Open the default email client with the pre-filled subject and body
  window.location.href = mailtoLink;
};