MspPassTPOL.onclick = function () {
    mspPassNoteTPOL.style.display = "block";
    TPOLFailTrigger.style.display = "block";
    MspPullUp.style.display = "none";
    MspPullUpYes.style.display = "none";
    MspTransferNo.style.display = "none";
    MspPullUpNo.style.display = "none";
    mspFailNoteTPOL.style.display = "none";
  
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
    mspPassNoteTPOL.style.display = "none";
    mspFailNoteTPOL.style.display = "block";
  
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
    inputElementIcmpPass.value = "Corrected Title Policy is located in the imaging system.";
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
      "Researched imaging system; no corrected Title Policy found.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameSA.value +
      " was told that they will give the copy of the corrected TPOL today, left email address.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameSA.value +
      " was told that they are unable to provide the copy of the corrected TPOL. Will proceed to the next contact.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
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
      " to request for the copy of the corrected TPOL.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
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
      " to request for the copy of the corrected TPOL. Left voicemail, Borrowers name and Property address.";
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
      " to request for the copy of the corrected TPOL. No one answers the call, will call again tomorrow.";
    document.body.appendChild(inputElementSAVoicemailNo);
    inputElementSAVoicemailNo.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementSAVoicemailNo);
  };
  
  SACallPassInstructedtoEmail1.onclick = function sendMail() {
    const customer = document.getElementById("BorrowersNameSA").value;
    const propertyAddress = document.getElementById("BorrowersAddressSA").value;
    const fixDescription = document.getElementById("FixDescriptSA").value;
    const emailAddress = document.getElementById("SettlementAgentEmail").value;
    const external = document.getElementById("SettlementAgent").value;
  
    // Construct the email message
    const subject = encodeURIComponent("Loan Document Request");
    const body = encodeURIComponent(`Dear ${external},
  
During a recent review of the loan for the property listed below, which is currently being serviced by Wells Fargo, we identified errors on the signed Final Lenders Title Policy. The errors that we are looking to have corrected are:
      •   ${fixDescription}

Customer: ${customer}
Property Address: ${propertyAddress}

Attached is the copy of the Title Policy to assist with this request.

What we are requesting from you:
  
      •   Send a corrected copy of the signed Final Lenders Title Policy.
      •   Please rush this request due to investor requirements.
  
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
  
  // Title Company
  
  TCEstablishPass.onclick = function () {
    TCCallPass.style.display = "block";
    EstablishContactTCno.style.display = "none";
    TCCallPass1.style.display = "block";
    TCVoicemailPass1.style.display = "none";
    TCVoicemailFail1.style.display = "none";
  };
  
  exampleRadiosTC1.onclick = function () {
    EstablishContactTCno.style.display = "none";
    TCCallPass1.style.display = "block";
    TCCallPass2.style.display = "none";
    TCCallPass3.style.display = "none";
    TCCallPass4.style.display = "none";
  };
  
  TCCallPassProvided.onclick = function () {
    let inputElementTCCallPassProvided = document.createElement("input");
    inputElementTCCallPassProvided.type = "text";
    inputElementTCCallPassProvided.value =
      "Called " +
      TitleCompany.value +
      " at " +
      TitleCompanyNumber.value +
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameTC.value +
      " was told that they will give the copy of the corrected TPOL today, left email address.";
    document.body.appendChild(inputElementTCCallPassProvided);
    inputElementTCCallPassProvided.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTCCallPassProvided);
  };
  
  exampleRadiosTC2.onclick = function () {
    EstablishContactTCno.style.display = "none";
    TCCallPass1.style.display = "none";
    TCCallPass2.style.display = "block";
    TCCallPass3.style.display = "none";
    TCCallPass4.style.display = "none";
  };
  
  TCCallPassUnable.onclick = function () {
    let inputElementTUCallPassUnable = document.createElement("input");
    inputElementTUCallPassUnable.type = "text";
    inputElementTUCallPassUnable.value =
      "Called " +
      TitleCompany.value +
      " at " +
      TitleCompanyNumber.value +
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameTC.value +
      " was told that they are unable to provide the copy of the corrected TPOL. Will proceed to the next contact.";
    document.body.appendChild(inputElementTUCallPassUnable);
    inputElementTUCallPassUnable.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUCallPassUnable);
  };
  
  exampleRadiosTC3.onclick = function () {
    EstablishContactTCno.style.display = "none";
    TCCallPass1.style.display = "none";
    TCCallPass2.style.display = "none";
    TCCallPass3.style.display = "block";
    TCCallPass4.style.display = "none";
  };
  
  TCCallPassInstructedtoEmail.onclick = function () {
    let inputElementTUCallEmail = document.createElement("input");
    inputElementTUCallEmail.type = "text";
    inputElementTUCallEmail.value =
      "Called " +
      TitleCompany.value +
      " at " +
      TitleCompanyNumber.value +
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameTC.value +
      " was instructed to send an email request to " +
      TCEmail.value;
    document.body.appendChild(inputElementTUCallEmail);
    inputElementTUCallEmail.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUCallEmail);
  };
  
  TCCallPassEmailSent.onclick = function () {
    let inputElementTUCallEmailSent = document.createElement("input");
    inputElementTUCallEmailSent.type = "text";
    inputElementTUCallEmailSent.value =
      "Emailed " +
      TitleCompany.value +
      " at " +
      TCEmail.value +
      " to request for the copy of the corrected TPOL.";
    document.body.appendChild(inputElementTUCallEmailSent);
    inputElementTUCallEmailSent.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUCallEmailSent);
  };
  
  exampleRadiosTC4.onclick = function () {
    EstablishContactTCno.style.display = "none";
    TCCallPass1.style.display = "none";
    TCCallPass2.style.display = "none";
    TCCallPass3.style.display = "none";
    TCCallPass4.style.display = "block";
  };
  
  TCCallPassOther.onclick = function () {
    let inputElementTUCallPassOther = document.createElement("input");
    inputElementTUCallPassOther.type = "text";
    inputElementTUCallPassOther.value =
      "Called " +
      TitleCompany.value +
      " at " +
      TitleCompanyNumber.value +
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameTC.value +
      " was told that " +
      TCCallOtherTextArea.value;
    document.body.appendChild(inputElementTUCallPassOther);
    inputElementTUCallPassOther.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUCallPassOther);
  };
  
  TCEstablishFail.onclick = function () {
    EstablishContactTCno.style.display = "block";
    TCCallPass.style.display = "none";
    TCCallPass1.style.display = "none";
  };
  
  TCVoicemailPass.onclick = function () {
    TCVoicemailPass1.style.display = "block";
    EstablishContactTCno.style.display = "none";
    TCVoicemailFail1.style.display = "none";
  };
  
  TCVoicemailYes1.onclick = function (){
  
    let inputElementTUVoicemailYes = document.createElement("input");
    inputElementTUVoicemailYes.type = "text";
    inputElementTUVoicemailYes.value =
      "Called " +
      TitleCompany.value +
      " at " +
      TitleCompanyNumber.value +
      " to request for the copy of the corrected TPOL. Left voicemail, Borrowers name and Property address.";
    document.body.appendChild(inputElementTUVoicemailYes);
    inputElementTUVoicemailYes.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUVoicemailYes);
  };
  
  TCVoicemailFail.onclick = function () {
    TCVoicemailFail1.style.display = "block";
    TCVoicemailPass1.style.display = "none";
    EstablishContactTCno.style.display = "none";
  };
  
  TCVoicemailNo.onclick = function (){
  
    let inputElementTUVoicemailNo = document.createElement("input");
    inputElementTUVoicemailNo.type = "text";
    inputElementTUVoicemailNo.value =
      "Called " +
      TitleCompany.value +
      " at " +
      TitleCompanyNumber.value +
      " to request for the copy of the corrected TPOL. No one answers the call, will call again tomorrow.";
    document.body.appendChild(inputElementTUVoicemailNo);
    inputElementTUVoicemailNo.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUVoicemailNo);
  };
  
  TCCallPassInstructedtoEmail1.onclick = function sendMail() {
    const customer = document.getElementById("BorrowersNameTU").value;
    const propertyAddress = document.getElementById("BorrowersAddressTU").value;
    const fixDescription = document.getElementById("FixDescriptTC").value;
    const emailAddress = document.getElementById("TUEmail").value;
    const external = document.getElementById("TitleUnderwriter").value;
  
    // Construct the email message
    const subject = encodeURIComponent("Loan Document Request");
    const body = encodeURIComponent(`Dear ${external},
  
During a recent review of the loan for the property listed below, which is currently being serviced by Wells Fargo, we identified errors on the signed Final Lenders Title Policy. The errors that we are looking to have corrected are:
        •   ${fixDescription}

Customer: ${customer}
Property Address: ${propertyAddress}

Attached is the copy of the Title Policy to assist with this request.

What we are requesting from you:

        •   Send a corrected copy of the signed Final Lenders Title Policy.
        •   Please rush this request due to investor requirements.
  
Thank you for your assistance with resolving this matter. 
  
Sincerely,
  `);
  
    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  
    // Open the default email client with the pre-filled subject and body
    window.location.href = mailtoLink;
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
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameTU.value +
      " was told that they will give the copy of the corrected TPOL today, left email address.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
      NameTU.value +
      " was told that they are unable to provide the copy of the corrected TPOL. Will proceed to the next contact.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
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
      " to request for the copy of the corrected TPOL.";
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
      " to request for the copy of the corrected TPOL. Spoke to " +
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
      " to request for the copy of the corrected TPOL. Left voicemail, Borrowers name and Property address.";
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
      " to request for the copy of the corrected TPOL. No one answers the call, will call again tomorrow.";
    document.body.appendChild(inputElementTUVoicemailNo);
    inputElementTUVoicemailNo.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUVoicemailNo);
  };
  
  TUCallPassInstructedtoEmail1.onclick = function sendMail() {
    const customer = document.getElementById("BorrowersNameTU").value;
    const propertyAddress = document.getElementById("BorrowersAddressTU").value;
    const fixDescription = document.getElementById("FixDescriptTU").value;
    const emailAddress = document.getElementById("TUEmail").value;
    const external = document.getElementById("TitleUnderwriter").value;
  
    // Construct the email message
    const subject = encodeURIComponent("Loan Document Request");
    const body = encodeURIComponent(`Dear ${external},
  
During a recent review of the loan for the property listed below, which is currently being serviced by Wells Fargo, we identified errors on the signed Final Lenders Title Policy. The errors that we are looking to have corrected are:
      •   ${fixDescription}

Customer: ${customer}
Property Address: ${propertyAddress}

Attached is the copy of the Title Policy to assist with this request.

What we are requesting from you:
  
      •   Send a corrected copy of the signed Final Lenders Title Policy.
      •   Please rush this request due to investor requirements.
  
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
    const fixDescription = document.getElementById("FixDescriptFirstAmerican").value;
    const emailAddress = "FAPostClosing@firstam.com";
  
    // Construct the email message
    const subject = encodeURIComponent("Loan Document Request");
    const body = encodeURIComponent(`Hi First American,
  
During a recent review of the loan for the property listed below, which is currently being serviced by Wells Fargo, we identified errors on the signed Final Lenders Title Policy. The errors that we are looking to have corrected are:
      •   ${fixDescription}

Customer: ${customer}
Property Address: ${propertyAddress}

Attached is the copy of the Title Policy to assist with this request.

What we are requesting from you:

      •   Send a corrected copy of the signed Final Lenders Title Policy.
      •   Please rush this request due to investor requirements.
  
Thank you for your assistance with resolving this matter.
  
Sincerely,
  `);
  
    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  
    // Open the default email client with the pre-filled subject and body
    window.location.href = mailtoLink;
  };
  
  EmailOld.onclick = function () {
  
    const customer = document.getElementById("BorrowersNameOld").value;
    const propertyAddress = document.getElementById("BorrowersAddressOld").value;
    const fixDescription = document.getElementById("FixDescriptOld").value;
    const emailAddress = "Tpitts@OldRepublicTitle.com";
  
    // Construct the email message
    const subject = encodeURIComponent("Loan Document Request");
    const body = encodeURIComponent(`Hi Old Republic,
  
During a recent review of the loan for the property listed below, which is currently being serviced by Wells Fargo, we identified errors on the signed Final Lenders Title Policy. The errors that we are looking to have corrected are: 
      •   ${fixDescription}

Customer: ${customer}
Property Address: ${propertyAddress}

Attached is the copy of the Title Policy to assist with this request.

What we are requesting from you:

      •   Send a corrected copy of the signed Final Lenders Title Policy.
      •   Please rush this request due to investor requirements.
  
Thank you for your assistance with resolving this matter.
  
Sincerely,
  `);
  
    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  
    // Open the default email client with the pre-filled subject and body
    window.location.href = mailtoLink;
  };
  
  EmailStewart.onclick = function () {
  
    const customer = document.getElementById("BorrowersNameStewart").value;
    const propertyAddress = document.getElementById("BorrowersAddressStewart").value;
    const fixDescription = document.getElementById("FixDescriptStewart").value;
    const emailAddress = "agencypolicysupport@stewart.com";
  
    // Construct the email message
    const subject = encodeURIComponent("Loan Document Request");
    const body = encodeURIComponent(`Hi Stewart Title,
  
During a recent review of the loan for the property listed below, which is currently being serviced by Wells Fargo, we identified errors on the signed Final Lenders Title Policy. The errors that we are looking to have corrected are:
      •   ${fixDescription}

Customer: ${customer}
Property Address: ${propertyAddress}

Attached is the copy of the Title Policy to assist with this request.

What we are requesting from you:

      •   Send a corrected copy of the signed Final Lenders Title Policy.
      •   Please rush this request due to investor requirements.
  
Thank you for your assistance with resolving this matter.
  
Sincerely,
  `);
  
    // Construct the mailto link
    const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;
  
    // Open the default email client with the pre-filled subject and body
    window.location.href = mailtoLink;
  };

  // Fidelity

  TUFidelity2.onclick = function () {

    let inputElementTUFidelity2 = document.createElement("input");
    inputElementTUFidelity2.type = "text";
    inputElementTUFidelity2.value =
      "Engagement with Fidelity is not required due to the loan origination date being older than 2 years.";
    document.body.appendChild(inputElementTUFidelity2);
    inputElementTUFidelity2.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity2);
  };
  
  TUFidelity3.onclick = function () {
  
    let inputElementTUFidelity3 = document.createElement("input");
    inputElementTUFidelity3.type = "text";
    inputElementTUFidelity3.value =
      "Research for local office was completed. No offices were found with current search.";
    document.body.appendChild(inputElementTUFidelity3);
    inputElementTUFidelity3.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity3);
  };
  
  TUFidelity4.onclick = function () {
  
    let inputElementTUFidelity4 = document.createElement("input");
    inputElementTUFidelity4.type = "text";
    inputElementTUFidelity4.value =
      "Title Policy is not curable, requesting new title policy to be issued from vendor.";
    document.body.appendChild(inputElementTUFidelity4);
    inputElementTUFidelity4.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity4);
  };
  
  OtherFidelityYes.onclick = function () {
  
    FidelityAcquired.style.display = "block";
    accordionFlushExample3.style.display = "none";
  };
  
  OtherFidelityNo.onclick = function () {
  
    FidelityAcquired.style.display = "none";
    accordionFlushExample3.style.display = "block";
  };
  
  TUFidelity1.onclick = function () {
  
    let inputElementTUFidelity1 = document.createElement("input");
    inputElementTUFidelity1.type = "text";
    inputElementTUFidelity1.value =
      TitleUnderwriter.value + " is acquired by Fidelity National Financial (FNF) Family of Companies.";
    document.body.appendChild(inputElementTUFidelity1);
    inputElementTUFidelity1.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity1);
  };
  
  TUFidelity5.onclick = function () {
  
    let inputElementTUFidelity5 = document.createElement("input");
    inputElementTUFidelity5.type = "text";
    inputElementTUFidelity5.value =
      "Engagement with Fidelity is not required due to the loan origination date being older than 2 years.";
    document.body.appendChild(inputElementTUFidelity5);
    inputElementTUFidelity5.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity5);
  };
  
  TUFidelity6.onclick = function () {
  
    let inputElementTUFidelity6 = document.createElement("input");
    inputElementTUFidelity6.type = "text";
    inputElementTUFidelity6.value =
      "Research for local office was completed. No offices were found with current search.";
    document.body.appendChild(inputElementTUFidelity6);
    inputElementTUFidelity6.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity6);
  };
  
  TUFidelity7.onclick = function () {
  
    let inputElementTUFidelity7 = document.createElement("input");
    inputElementTUFidelity7.type = "text";
    inputElementTUFidelity7.value =
      "Title Policy is not curable, requesting new title policy to be issued from vendor.";
    document.body.appendChild(inputElementTUFidelity7);
    inputElementTUFidelity7.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementTUFidelity7);
  };