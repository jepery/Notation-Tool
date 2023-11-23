btnLoanNumberTPOL.onclick = function () {
floatingInputLoanNumberTPOL.select();

  document.execCommand("Copy");
};

tpolQN.onclick = function () {
  let inputElementQN = document.createElement("input");
  inputElementQN.type = "text";
  inputElementQN.value = "708_" + floatingInputLoanNumberTPOL.value + "_23310_1";
  document.body.appendChild(inputElementQN);
  inputElementQN.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementQN);
};

tpolEU.onclick = function () {
  let inputElementEU = document.createElement("input");
  inputElementEU.type = "text";
  inputElementEU.value = "936_" + floatingInputLoanNumberTPOL.value + "_23310_1";
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
    "Searched servicing system. Loan is active, Man Code: " + MspManCodeTPOL.value;
  document.body.appendChild(inputElementMspPass);
  inputElementMspPass.select();
  document.execCommand("copy");
  document.body.removeChild(inputElementMspPass);
};

IcmpPassTPOL.onclick = function () {

    icmpTPOLpass.style.display = "block";
    icmpTPOLfail.style.display = "none";

    let inputElementIcmpPass = document.createElement("input");
    inputElementIcmpPass.type = "text";
    inputElementIcmpPass.value =
      "Title Policy is located in the imaging system.";
    document.body.appendChild(inputElementIcmpPass);
    inputElementIcmpPass.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementIcmpPass);
  
    
  };
  
  IcmpFailTPOL.onclick = function () {

    icmpTPOLfail.style.display = "block";
    icmpTPOLpass.style.display = "none";

    let inputElementIcmpPass = document.createElement("input");
    inputElementIcmpPass.type = "text";
    inputElementIcmpPass.value =
      "Researched imaging system; no Title Policy found.";
    document.body.appendChild(inputElementIcmpPass);
    inputElementIcmpPass.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementIcmpPass);
  };

  let SettlementAgent = document.getElementById('SettlementAgent');
  let SettlementAgentNumber = document.getElementById('SettlementAgentNumber');

  ProceedSA.onclick = function () {

    let SettlementAgentValue = SettlementAgent.value;
    let SettlementAgentNumbervalue = SettlementAgentNumber.value;

    localStorage.setItem('settlement-agent', SettlementAgentValue);
    localStorage.setItem('settlementagent-number', SettlementAgentNumbervalue);

    window.location.href = "settlementagent.html";

  };

  SameSA.onclick = function () {

    let inputElementSameSA = document.createElement("input");
    inputElementSameSA.type = "text";
    inputElementSameSA.value =
      "Skipped Calling SA, " + SettlementAgent.value + " was also the Title Company for this loan.";
    document.body.appendChild(inputElementSameSA);
    inputElementSameSA.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementSameSA);
  };

  NotInBusinessSA.onclick = function () {

    let inputElementNotInBusinessSA = document.createElement("input");
    inputElementNotInBusinessSA.type = "text";
    inputElementNotInBusinessSA.value =
      SettlementAgent.value + " is already closed according to OpenCorporates, SOS and web search. Will proceed to next contact.";
    document.body.appendChild(inputElementNotInBusinessSA);
    inputElementNotInBusinessSA.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNotInBusinessSA);
  };

  SameTC.onclick = function () {

    let inputElementSameTC = document.createElement("input");
    inputElementSameTC.type = "text";
    inputElementSameTC.value =
      "Skipped Calling TC, " + TitleCompany.value + " was also the Title Underwriter for this loan.";
    document.body.appendChild(inputElementSameTC);
    inputElementSameTC.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementSameTC);
  };

  NotInBusinessTC.onclick = function () {

    let inputElementNotInBusinessTC = document.createElement("input");
    inputElementNotInBusinessTC.type = "text";
    inputElementNotInBusinessTC.value =
      TitleCompany.value + " is already closed according to OpenCorporates, SOS and web search. Will proceed to next contact.";
    document.body.appendChild(inputElementNotInBusinessTC);
    inputElementNotInBusinessTC.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNotInBusinessTC);
  };

  // Title Underwriter

  ProceedTU.onclick = function () {

    let TitleUnderWriterValue = TitleUnderwriter.value;
    let TitleUnderWriterNumbervalue = TitleUnderwriterNumber.value;

    localStorage.setItem('tu-agent', TitleUnderWriterValue);
    localStorage.setItem('tu-number', TitleUnderWriterNumbervalue);

    window.location.href = "titleunderwriter.html";

  };