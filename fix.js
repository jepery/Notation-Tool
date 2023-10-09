let MspPassFix = document.getElementById("MspPassFix");

MspPassFix.onclick = function () {
    let inputElementMspPassSecond= document.createElement("input");
    inputElementMspPassSecond.type = "text";
    inputElementMspPassSecond.value =
      "Searched servicing system. Loan is active, Man Code: " + MspManCodeSecond.value;
    document.body.appendChild(inputElementMspPassSecond);
    inputElementMspPassSecond.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementMspPassSecond);
  };

  IcmpPassFix.onclick = function () {

  
    let inputElementIcmpPassFix = document.createElement("input");
    inputElementIcmpPassFix.type = "text";
    inputElementIcmpPassFix.value =
      "Re-recorded Mortgage is located in the imaging system.";
    document.body.appendChild(inputElementIcmpPassFix);
    inputElementIcmpPassFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementIcmpPassFix);
  
    
  };

  IcmpFailFix.onclick = function () {
    let inputElementIcmpFailFix = document.createElement("input");
    inputElementIcmpFailFix.type = "text";
    inputElementIcmpFailFix.value =
      "Researched imaging system; no Re-recorded Mortgage found.";
    document.body.appendChild(inputElementIcmpFailFix);
    inputElementIcmpFailFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementIcmpFailFix);
  };

  DocumentRetrievedFix.onclick = function () {
    let inputElementDocRetrieveFix = document.createElement("input");
    inputElementDocRetrieveFix.type = "text";
    inputElementDocRetrieveFix.value =
      "Searched the " +
      CountyNameFix.value +
      " website for Re-recorded Mortgage. Retrieved image of document.";
    document.body.appendChild(inputElementDocRetrieveFix);
    inputElementDocRetrieveFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDocRetrieveFix);
  };

  RecInfoFix.onclick = function () {
    let inputElementRecInfoFix = document.createElement("input");
    inputElementRecInfoFix.type = "text";
    inputElementRecInfoFix.value =
      "Searched the " +
      CountyNameFix.value +
      " website for Re-recorded Mortgage. Retrieved detailed recording information. Date: " +
      RecordingDateFix.value +
      " Insmt#: " +
      InstrumentNumberFix.value +
      " BK/PG: " +
      BookAndPageFix.value +
      ".";
    document.body.appendChild(inputElementRecInfoFix);
    inputElementRecInfoFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementRecInfoFix);
  };
  
  NoDocumentFix.onclick = function () {
    let inputElementNoDocumentFix = document.createElement("input");
    inputElementNoDocumentFix.type = "text";
    inputElementNoDocumentFix.value =
      "Searched the " +
      CountyNameFix.value +
      " website for Re-recorded Mortgage. Unable to locate document.";
    document.body.appendChild(inputElementNoDocumentFix);
    inputElementNoDocumentFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNoDocumentFix);
  };
  
  NotSearchableFix.onclick = function () {
    let inputElementNotSearchableFix = document.createElement("input");
    inputElementNotSearchableFix.type = "text";
    inputElementNotSearchableFix.value =
      "Searched the " +
      CountyNameFix.value +
      " website for Re-recorded Mortgage. The county website is not searchable.";
    document.body.appendChild(inputElementNotSearchableFix);
    inputElementNotSearchableFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNotSearchableFix);
  };
  
  DataTreePassFix.onclick = function () {
    let inputElementDataTreePassFix = document.createElement("input");
    inputElementDataTreePassFix.type = "text";
    inputElementDataTreePassFix.value =
      "Searched DataTree website for Re-recorded Mortgage. Located a copy of the document.";
    document.body.appendChild(inputElementDataTreePassFix);
    inputElementDataTreePassFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDataTreePassFix);
  };
  
  DataTreeFailFix.onclick = function () {
    let inputElementDataTreeFailFix = document.createElement("input");
    inputElementDataTreeFailFix.type = "text";
    inputElementDataTreeFailFix.value =
      "Searched DataTree for the Re-recorded Mortgage. No record found.";
    document.body.appendChild(inputElementDataTreeFailFix);
    inputElementDataTreeFailFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementDataTreeFailFix);
  };
  
  AuthoCenterPassFix.onclick = function () {
    let inputElementAuthoCenterPassFix = document.createElement("input");
    inputElementAuthoCenterPassFix.type = "text";
    inputElementAuthoCenterPassFix.value =
      "Searched AuthoCenter for the Re-recorded Mortgage. Located copy";
    document.body.appendChild(inputElementAuthoCenterPassFix);
    inputElementAuthoCenterPassFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementAuthoCenterPassFix);
  };
  
  AuthoCenterFailFix.onclick = function () {
    let inputElementAuthoCenterFailFix = document.createElement("input");
    inputElementAuthoCenterFailFix.type = "text";
    inputElementAuthoCenterFailFix.value =
      "Searched the AuthoCenter website for the Re-recorded Mortgage. No record found.";
    document.body.appendChild(inputElementAuthoCenterFailFix);
    inputElementAuthoCenterFailFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementAuthoCenterFailFix);
  };

  CallCountyTriggerFix.onclick = function () {
    let CallCountyDivFix = document.getElementById("CallCountyDivFix");
  
    MspDivFix.style.display = "none";
    IcmpDivFix.style.display = "none";
    CountySearchDivFix.style.display = "none";
    AuthoCenterDivFix.style.display = "none";
    DataTreeDivFix.style.display = "none";
    CallCountyButtonTriggerFix.style.display = "none";
    CountySearchDivButtonFix.style.display = 'none';
    CountyCallTextFix.style.display = 'block';
    CallCountyDivFix.style.display = 'block';
  };
  
  CountyEsablishPassFix.onclick = function () {
    let ProvideInfoFix = document.getElementById("ProvideInfoFix");
  
    EstablishContactFix.style.display = "none";
    ProvideInfoFix.style.display = "block";
  };

  ProvideInfoPassFix.onclick = function () {
    let IsMortgageRecordedFix = document.getElementById("IsMortgageRecordedFix");
  
    ProvideInfoFix.style.display = "none";
    IsMortgageRecordedFix.style.display = "block";
  };
  
  RecordedYesFix.onclick = function () {
    let RecordedMortgageYesFix = document.getElementById("RecordedMortgageYesFix");
  
    IsMortgageRecordedFix.style.display = "none";
    RecordedMortgageYesFix.style.display = "block";
  };
  
  RecordedNoFix.onclick = function () {
    let RecordedMortgageNoFix = document.getElementById("RecordedMortgageNoFix");
  
    IsMortgageRecordedFix.style.display = "none";
    RecordedMortgageNoFix.style.display = "block";
  };
  
  ProvideInfoFailFix.onclick = function () {
    let PhoneSearchFix = document.getElementById("PhoneSearchFix");
  
    ProvideInfoFix.style.display = "none";
    PhoneSearchFix.style.display = "block";
  };

  CountyEsablishFailFix.onclick = function () {
    let SecondAttemptFix = document.getElementById("SecondAttemptFix");
  
    EstablishContactFix.style.display = "none";
    SecondAttemptFix.style.display = "block";
  };
  
  SecondPassFix.onclick = function () {
    let NoAnswerFix = document.getElementById("NoAnswerFix");
  
    SecondAttemptFix.style.display = "none";
    NoAnswerFix.style.display = "block";
  };
  
  SecondFailFix.onclick = function () {
    let VoiceMailFix = document.getElementById("VoiceMailFix");
  
    SecondAttemptFix.style.display = "none";
    VoiceMailFix.style.display = "block";
  };
  
  VoicePassFix.onclick = function () {
    let LeaveVoiceFix = document.getElementById("LeaveVoiceFix");
  
    VoiceMailFix.style.display = "none";
    LeaveVoiceFix.style.display = "block";
  };
  
  VoiceFailFix.onclick = function () {
    let LeaveVoiceFailFix = document.getElementById("LeaveVoiceFailFix");
  
    VoiceMailFix.style.display = "none";
    LeaveVoiceFailFix.style.display = "block";
  };

  ///// **************************************************************** Function Notation ********************************************************************* /////

  NoPhoneSearchFix.onclick = function () {
    let inputElementNoPhoneSearchFix = document.createElement("input");
    inputElementNoPhoneSearchFix.type = "text";
    inputElementNoPhoneSearchFix.value =
      "Called " +
      CountyNameFix.value +
      " at " +
      PhoneNumberCallFix.value +
      " to request recording information and copy fee for Re-recorded Mortgage. Spoke to " +
      NameCallFix.value +
      ". County does not do phone search.";
    document.body.appendChild(inputElementNoPhoneSearchFix);
    inputElementNoPhoneSearchFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementNoPhoneSearchFix);
  };
  
  ResearchNeededFix.onclick = function () {
    let inputElementResearchNeededFix = document.createElement("input");
    inputElementResearchNeededFix.type = "text";
    inputElementResearchNeededFix.value =
      "Unable to verify recording status of Re-recorded Mortgage at the county.";
    document.body.appendChild(inputElementResearchNeededFix);
    inputElementResearchNeededFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementResearchNeededFix);
  };
  
  CallNoAnswerFix.onclick = function () {
    let inputElementCallNoAnswerFix = document.createElement("input");
    inputElementCallNoAnswerFix.type = "text";
    inputElementCallNoAnswerFix.value =
      "Called " +
      CountyNameFix.value +
      " at " +
      PhoneNumberCallFix.value +
      " to request recording information and copy fee for Re-recorded Mortgage. No one answers the call."
    document.body.appendChild(inputElementCallNoAnswerFix);
    inputElementCallNoAnswerFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementCallNoAnswerFix);
  };
  
  ResearchNeededNoAnswerFix.onclick = function () {
    let inputElementResearchNeededNoAnswerFix = document.createElement("input");
    inputElementResearchNeededNoAnswerFix.type = "text";
    inputElementResearchNeededNoAnswerFix.value =
      "Unable to verify recording status of Re-recorded Mortgage at the county.";
    document.body.appendChild(inputElementResearchNeededNoAnswerFix);
    inputElementResearchNeededNoAnswerFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementResearchNeededNoAnswerFix);
  };
  
  LeaveVoiceMailFix.onclick = function () {
    let inputElementLeaveVoiceMailFix = document.createElement("input");
    inputElementLeaveVoiceMailFix.type = "text";
    inputElementLeaveVoiceMailFix.value =
      "Called " +
      CountyNameFix.value +
      " at " +
      PhoneNumberCallFix.value +
      " to request recording information and copy fee for Re-recorded Mortgage. Left Message. Provided name and address of the borrower."
    document.body.appendChild(inputElementLeaveVoiceMailFix);
    inputElementLeaveVoiceMailFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementLeaveVoiceMailFix);
  };
  
  LeaveVoiceMailFailFix.onclick = function () {
    let inputElementLeaveVoiceMailFailFix = document.createElement("input");
    inputElementLeaveVoiceMailFailFix.type = "text";
    inputElementLeaveVoiceMailFailFix.value =
      "Called " +
      CountyNameFix.value +
      " at " +
      PhoneNumberCallFix.value +
      " to request recording information and copy fee for Re-recorded Mortgage, but no one answers the call and mailbox is full."
    document.body.appendChild(inputElementLeaveVoiceMailFailFix);
    inputElementLeaveVoiceMailFailFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementLeaveVoiceMailFailFix);
  };
  
  MortgageYesFix.onclick = function () {
    let inputElementMortgageYesFix = document.createElement("input");
    inputElementMortgageYesFix.type = "text";
    inputElementMortgageYesFix.value =
      "Called " +
      CountyNameFix.value +
      " at " +
      PhoneNumberCallFix.value + ". "+ 
      NameCallFix.value + " said that the Mortgage is Re-recorded."
    document.body.appendChild(inputElementMortgageYesFix);
    inputElementMortgageYesFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementMortgageYesFix);
  };
  
  MortgageYesVerifiedFix.onclick = function () {
    let inputElementMortgageYesVerifiedFix = document.createElement("input");
    inputElementMortgageYesVerifiedFix.type = "text";
    inputElementMortgageYesVerifiedFix.value =
      "Verified Mortgage has been Re-recorded at the county. Date: " +
      RecordingDateFix.value + 
      " Insmt#: " + 
      InstrumentNumberFix.value +
      " BK/PG: " + 
      BookAndPageFix.value
    document.body.appendChild(inputElementMortgageYesVerifiedFix);
    inputElementMortgageYesVerifiedFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementMortgageYesVerifiedFix);
  };
  
  MortgageNoFix.onclick = function () {
    let NotofRecord = document.getElementById("NotofRecord");

    NotofRecord.style.display = 'block';

    let inputElementMortgageNoFix = document.createElement("input");
    inputElementMortgageNoFix.type = "text";
    inputElementMortgageNoFix.value =
      "Called " +
      CountyNameFix.value +
      " at " +
      PhoneNumberCallFix.value + ". "+ 
      NameCallFix.value + " said that the Mortgage is not Re-recorded."
    document.body.appendChild(inputElementMortgageNoFix);
    inputElementMortgageNoFix.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementMortgageNoFix);
  };

  MortgageNotOfRecorded.onclick = function () {
    let Exhausted = document.getElementById("Exhausted");

    Exhausted.style.display = 'block';

    let inputElementMortgageNotOfRecorded = document.createElement("input");
    inputElementMortgageNotOfRecorded.type = "text";
    inputElementMortgageNotOfRecorded.value =
      "Re-recorded Mortgage is not of record at the county."
    document.body.appendChild(inputElementMortgageNotOfRecorded);
    inputElementMortgageNotOfRecorded.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementMortgageNotOfRecorded);
  };

  ExhaustedResources.onclick = function () {
    let Override = document.getElementById("Override");

    Override.style.display = 'block';

    let inputElementExhaustedResources = document.createElement("input");
    inputElementExhaustedResources.type = "text";
    inputElementExhaustedResources.value =
      "Not Curable. County Clerk verified that there is no Re-recorded Mortgage."
    document.body.appendChild(inputElementExhaustedResources);
    inputElementExhaustedResources.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementExhaustedResources);
  };