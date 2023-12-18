///////////////////// Document pass Review with no Errors ////////////////////////////////

DocumentPassTPOL.onclick = function () {

    MinorValidationPass.style.display = "none";
    OpenFixPolicy.style.display = "none";
    ValidationTPOLpass.style.display = "block";
};

inlineRadio2Received.onclick = function (){
    
    TPOLreceivedPass.style.display = "block";
    TPOLlocatedPass.style.display = "none";
};

inlineRadio1Located.onclick = function (){
    
    TPOLreceivedPass.style.display = "none";
    TPOLlocatedPass.style.display = "block";
};

DocumentPassTPOLLocated.onclick = function () {
    let inputElementDocumentPassTPOLLocated = document.createElement("input");
    inputElementDocumentPassTPOLLocated.type = "text";
    inputElementDocumentPassTPOLLocated.value =
      "Located acceptable document per the Loan Sales Document Validation - Guidelines - TO139680."
    document.body.appendChild(inputElementDocumentPassTPOLLocated);
    inputElementDocumentPassTPOLLocated.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDocumentPassTPOLLocated);

    RecIntSent1.style.display = "block"
};

DocumentPassTPOLReceived.onclick = function () {
    let inputElementDocumentPassTPOLReceived = document.createElement("input");
    inputElementDocumentPassTPOLReceived.type = "text";
    inputElementDocumentPassTPOLReceived.value =
      "Received acceptable document per the Loan Sales Document Validation - Guidelines - TO139680."
    document.body.appendChild(inputElementDocumentPassTPOLReceived);
    inputElementDocumentPassTPOLReceived.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDocumentPassTPOLReceived);

    RecIntSent2.style.display = "block"
};

//////////////////////////////// Validate to Recorded Mortgage////////////////////////////////////

MinorIssue.onclick = function () {

    ValidationTPOLpass.style.display = "none";
    OpenFixPolicy.style.display = "none";
    MinorValidationPass.style.display = "block";
};

DocumentMinor.onclick = function () {
    let TPOLminorValidateDoc = document.getElementById("TPOLminorValidateDoc");
    let TPOLminorValidateIssue = document.getElementById("TPOLminorValidateIssue");
    let TPOLminorValidateDocID = document.getElementById("TPOLminorValidateDocID");

    let inputElementDocumentMinor = document.createElement("input");
    inputElementDocumentMinor.type = "text";
    inputElementDocumentMinor.value =
      "Located a " + TPOLminorValidateDoc.value + " that accounts for the " + TPOLminorValidateIssue.value + " on the Title Policy. Doc ID: " + TPOLminorValidateDocID.value
    document.body.appendChild(inputElementDocumentMinor);
    inputElementDocumentMinor.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDocumentMinor);

    MinorSatisfy.style.display = "block";
};

//////////////////////////////// Open Fix ////////////////////////////////////

OpenFixTPOL.onclick = function () {

    ValidationTPOLpass.style.display = "none";
    MinorValidationPass.style.display = "none";
    OpenFixPolicy.style.display = "block";
};

inlineRadio1FixOne.onclick = function (){
    
    OpenFixOption1.style.display = "block";
    OpenFixOption2.style.display = "none";
    OpenFixOption3.style.display = "none";
};

inlineRadio2FixTwo.onclick = function (){
    
    OpenFixOption1.style.display = "none";
    OpenFixOption2.style.display = "block";
    OpenFixOption3.style.display = "none";
};

inlineRadio2FixThree.onclick = function (){
    
    OpenFixOption1.style.display = "none";
    OpenFixOption2.style.display = "none";
    OpenFixOption3.style.display = "block";
};

FixOption1Button.onclick = function () {
    let InstructionFixTPOL1 = document.getElementById("InstructionFixTPOL1");

    InstructionFixTPOL1.style.display = 'block';

    let inputElementOpenDocumentFix = document.createElement("input");
    inputElementOpenDocumentFix.type = "text";
    inputElementOpenDocumentFix.value =
      "Located missing Title Policy; verified " + TPOLOpenFixOneIssue.value + "; will open a Title Policy: " + TPOLOpenFixOneDescription.value + " and continue to work the new FIX deficiency."
    document.body.appendChild(inputElementOpenDocumentFix);
    inputElementOpenDocumentFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenDocumentFix);
};

OpenFixTPOL1.onclick = function () {
    let inputElementOpenFix = document.createElement("input");
    inputElementOpenFix.type = "text";
    inputElementOpenFix.value =
      "Opened FIX deficiency to correct " + TPOLOpenFixOneIssue.value + ". Reference Title Policy (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix);
    inputElementOpenFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix);
  };

  FixOption2Button.onclick = function () {
    let InstructionFixTPOL2 = document.getElementById("InstructionFixTPOL2");
    let TPOLOpenFixTwoIssue1 = document.getElementById("TPOLOpenFixTwoIssue1");
    let TPOLOpenFixTwoIssue2 = document.getElementById("TPOLOpenFixTwoIssue2");
    let TPOLOpenFixTwoDescription1 = document.getElementById("TPOLOpenFixTwoDescription1");
    let TPOLOpenFixTwoDescription2 = document.getElementById("TPOLOpenFixTwoDescription2");

    InstructionFixTPOL2.style.display = 'block';

    let inputElementOpenDocumentFix2 = document.createElement("input");
    inputElementOpenDocumentFix2.type = "text";
    inputElementOpenDocumentFix2.value =
      "Located missing TPOL; verified " + TPOLOpenFixTwoIssue1.value + ", " + TPOLOpenFixTwoIssue2.value + "; will open a Title Policy: " + TPOLOpenFixTwoDescription1.value + ", " + TPOLOpenFixTwoDescription2.value + " and continue to work the new FIX deficiencies."
    document.body.appendChild(inputElementOpenDocumentFix2);
    inputElementOpenDocumentFix2.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenDocumentFix2);
};

OpenFixTPOL2.onclick = function () {
    let inputElementOpenFix2 = document.createElement("input");
    inputElementOpenFix2.type = "text";
    inputElementOpenFix2.value =
      "Opened FIX deficiency to correct " + TPOLOpenFixTwoIssue1.value + ". Reference Title Policy (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix2);
    inputElementOpenFix2.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix2);
};

OpenFixTPOL2a.onclick = function () {
    let inputElementOpenFix2a = document.createElement("input");
    inputElementOpenFix2a.type = "text";
    inputElementOpenFix2a.value =
      "Opened FIX deficiency to correct " + TPOLOpenFixTwoIssue2.value + ". Reference Title Policy (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix2a);
    inputElementOpenFix2a.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix2a);
};

FixOption3Button.onclick = function () {
    let InstructionFixTPOL3 = document.getElementById("InstructionFixTPOL3");
    let TPOLOpenFixThreeIssue1 = document.getElementById("TPOLOpenFixThreeIssue1");
    let TPOLOpenFixThreeIssue2 = document.getElementById("TPOLOpenFixThreeIssue2");
    let TPOLOpenFixThreeIssue3 = document.getElementById("TPOLOpenFixThreeIssue3");
    let TPOLOpenFixThreeDescription1 = document.getElementById("TPOLOpenFixThreeDescription1");
    let TPOLOpenFixThreeDescription2 = document.getElementById("TPOLOpenFixThreeDescription2");
    let TPOLOpenFixThreeDescription3 = document.getElementById("TPOLOpenFixThreeDescription3");

    InstructionFixTPOL3.style.display = 'block';

    let inputElementOpenDocumentFix3 = document.createElement("input");
    inputElementOpenDocumentFix3.type = "text";
    inputElementOpenDocumentFix3.value =
      "Lctd mssng TPOL; vryfd " + TPOLOpenFixThreeIssue1.value + ", " + TPOLOpenFixThreeIssue2.value + ", " + TPOLOpenFixThreeIssue3.value + "; will open Title Policy: " + TPOLOpenFixThreeDescription1.value + ", " + TPOLOpenFixThreeDescription2.value + ", " + TPOLOpenFixThreeDescription3.value + ", continue to work new FIX deficiencies"
    document.body.appendChild(inputElementOpenDocumentFix3);
    inputElementOpenDocumentFix3.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenDocumentFix3);
};

OpenFixTPOL3.onclick = function () {
    let inputElementOpenFix3 = document.createElement("input");
    inputElementOpenFix3.type = "text";
    inputElementOpenFix3.value =
      "Opened FIX deficiency to correct " + TPOLOpenFixThreeIssue1.value + ". Reference Title Policy (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix3);
    inputElementOpenFix3.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix3);
};

OpenFixTPOL3a.onclick = function () {
    let inputElementOpenFix3a = document.createElement("input");
    inputElementOpenFix3a.type = "text";
    inputElementOpenFix3a.value =
      "Opened FIX deficiency to correct " + TPOLOpenFixThreeIssue2.value + ". Reference Title Policy (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix3a);
    inputElementOpenFix3a.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix3a);
};

OpenFixTPOL3b.onclick = function () {
    let inputElementOpenFix3b = document.createElement("input");
    inputElementOpenFix3b.type = "text";
    inputElementOpenFix3b.value =
      "Opened FIX deficiency to correct " + TPOLOpenFixThreeIssue2.value + ". Reference Title Policy (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix3b);
    inputElementOpenFix3b.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix3b);
};