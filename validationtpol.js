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