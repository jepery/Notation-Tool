const floatingInputLoanNumber = document.getElementById(
  "floatingInputLoanNumber"
);
const btnLoanNumber = document.getElementById("btnLoanNumber");
const firstQ = document.getElementById("firstQ");

btnLoanNumber.onclick = function () {
  floatingInputLoanNumber.select();

  document.execCommand("Copy");
};

firstQ.onclick = function () {
  let inputElementQN = document.createElement("input");
  inputElementQN.type = "text";
  inputElementQN.value = "780_" + floatingInputLoanNumber.value + "_03000_1";
  document.body.appendChild(inputElementQN);
  inputElementQN.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementQN);
};

secondE.onclick = function () {
  let inputElementEU = document.createElement("input");
  inputElementEU.type = "text";
  inputElementEU.value = "936_" + floatingInputLoanNumber.value + "_03000_1";
  document.body.appendChild(inputElementEU);
  inputElementEU.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementEU);
};

MspPass.onclick = function () {
  let inputElementMspPass = document.createElement("input");
  inputElementMspPass.type = "text";
  inputElementMspPass.value =
    "Searched servicing system. Loan is active, Man Code: " + MspManCode.value;
  document.body.appendChild(inputElementMspPass);
  inputElementMspPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspPass);
};

IcmpPass.onclick = function () {
  let inputElementIcmpPass = document.createElement("input");
  inputElementIcmpPass.type = "text";
  inputElementIcmpPass.value =
    "Recorded Mortgage is located in the imaging system.";
  document.body.appendChild(inputElementIcmpPass);
  inputElementIcmpPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementIcmpPass);
};

IcmpFail.onclick = function () {
  let inputElementIcmpPass = document.createElement("input");
  inputElementIcmpPass.type = "text";
  inputElementIcmpPass.value =
    "Researched imaging system; no Recorded Mortgage found.";
  document.body.appendChild(inputElementIcmpPass);
  inputElementIcmpPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementIcmpPass);
};

DocumentRetrieved.onclick = function () {
  let inputElementDocRetrieve = document.createElement("input");
  inputElementDocRetrieve.type = "text";
  inputElementDocRetrieve.value =
    "Searched the " +
    CountyName.value +
    " website for Recorded Mortgage. Retrieved image of document.";
  document.body.appendChild(inputElementDocRetrieve);
  inputElementDocRetrieve.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementDocRetrieve);
};

RecInfo.onclick = function () {
  let inputElementRecInfo = document.createElement("input");
  inputElementRecInfo.type = "text";
  inputElementRecInfo.value =
    "Searched the " +
    CountyName.value +
    " website for Recorded Mortgage. Retrieved detailed recording information. Date: " +
    RecordingDate.value +
    " Insmt#: " +
    InstrumentNumber.value +
    " BK/PG: " +
    BookAndPage.value +
    ".";
  document.body.appendChild(inputElementRecInfo);
  inputElementRecInfo.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementRecInfo);
};

NoDocument.onclick = function () {
    let inputElementNoDocument = document.createElement("input");
    inputElementNoDocument.type = "text";
    inputElementNoDocument.value =
      "Searched the " +
      CountyName.value +
      " website for Recorded Mortgage. Unable to locate document.";
    document.body.appendChild(inputElementNoDocument);
    inputElementNoDocument.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNoDocument);
  };

  NotSearchable.onclick = function () {
    let inputElementNotSearchable = document.createElement("input");
    inputElementNotSearchable.type = "text";
    inputElementNotSearchable.value =
      "Searched the " +
      CountyName.value +
      " website for Recorded Mortgage. The county website is not searchable.";
    document.body.appendChild(inputElementNotSearchable);
    inputElementNotSearchable.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNotSearchable);
  };

  DataTreePass.onclick = function () {
    let inputElementDataTreePass = document.createElement("input");
    inputElementDataTreePass.type = "text";
    inputElementDataTreePass.value =
      "Searched DataTree website for Recorded Mortgage. Located a copy of the document.";
    document.body.appendChild(inputElementDataTreePass);
    inputElementDataTreePass.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDataTreePass);
  };

  DataTreeFail.onclick = function () {
    let inputElementDataTreeFail = document.createElement("input");
    inputElementDataTreeFail.type = "text";
    inputElementDataTreeFail.value =
      "Searched DataTree for the Recorded Mortgage. No record found.";
    document.body.appendChild(inputElementDataTreeFail);
    inputElementDataTreeFail.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDataTreeFail);
  };

  AuthoCenterPass.onclick = function () {
    let inputElementAuthoCenterPass = document.createElement("input");
    inputElementAuthoCenterPass.type = "text";
    inputElementAuthoCenterPass.value =
      "Searched AuthoCenter for the Recorded Mortgage. Located copy";
    document.body.appendChild(inputElementAuthoCenterPass);
    inputElementAuthoCenterPass.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementAuthoCenterPass);
  };

  AuthoCenterFail.onclick = function () {
    let inputElementAuthoCenterFail = document.createElement("input");
    inputElementAuthoCenterFail.type = "text";
    inputElementAuthoCenterFail.value =
      "Searched the AuthoCenter website for the Recorded Mortgage. No record found.";
    document.body.appendChild(inputElementAuthoCenterFail);
    inputElementAuthoCenterFail.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementAuthoCenterFail);
  };







// const CountySelect = document.getElementById("CountySelect");
// const CountyName = document.getElementById("CountyName");

// CountySelect.addEventListener("change", function () {
//   const selectedOption = CountySelect.value;
//   let selectedOptionText = "";

//   if (selectedOption === "1" || selectedOption === "2" || selectedOption === "3" || selectedOption === "4") {
//     selectedOptionText = CountySelect.selectedOptions[0].text;
//   }

//   if (selectedOption === "1" || selectedOption === "2" || selectedOption === "3" || selectedOption === "4") {
//     let inputElementCountySearch = document.createElement("input");
//     inputElementCountySearch.type = "text";
//     inputElementCountySearch.value =
//       "Searched the " +
//       CountyName.value +
//       " website for Recorded Mortgage. " +
//       selectedOptionText;
//     document.body.appendChild(inputElementCountySearch);
//     inputElementCountySearch.select();
//     document.execCommand("copy");
//     document.body.removeChild(inputElementCountySearch);
//   }
// });
