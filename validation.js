DocumentPass.onclick = function () {
  let DocumentPassReviewDiv = document.getElementById("DocumentPassReviewDiv");

  DocumentPassReviewDiv.style.display = "block";
};

DocumentPassReview.onclick = function () {
    let inputElementDocumentPassReview = document.createElement("input");
    inputElementDocumentPassReview.type = "text";
    inputElementDocumentPassReview.value =
      "Located acceptable document per the Loan Sales Document Validation - Guidelines - TO139680."
    document.body.appendChild(inputElementDocumentPassReview);
    inputElementDocumentPassReview.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDocumentPassReview);
  };

  OpenDocumentFix.onclick = function () {
    let FixDiv = document.getElementById("FixDiv");
    
    DocumentPassReviewDiv.style.display = "none";
    FixDiv.style.display = "block";
  };

  OpenDocumentFixNote.onclick = function () {
    let InstructionFix = document.getElementById("InstructionFix");

    InstructionFix.style.display = 'block';

    let inputElementOpenDocumentFix = document.createElement("input");
    inputElementOpenDocumentFix.type = "text";
    inputElementOpenDocumentFix.value =
      "Located missing Recorded Mortgage; verified " + FixDataListIssue.value + "; will open a Mortgage/DOT: " + FixDataListDescription.value + " and continue to work the new FIX deficiencys."
    document.body.appendChild(inputElementOpenDocumentFix);
    inputElementOpenDocumentFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenDocumentFix);
  };

  OpenFix.onclick = function () {
    let inputElementOpenFix = document.createElement("input");
    inputElementOpenFix.type = "text";
    inputElementOpenFix.value =
      "Opened FIX deficiency to correct " + FixDataListIssue.value + ". Reference Mortgage/DOT (Final Docs): Missing deficiency for previous procurement research."
    document.body.appendChild(inputElementOpenFix);
    inputElementOpenFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementOpenFix);
  };