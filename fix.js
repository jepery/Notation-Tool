MspPassSecond.onclick = function () {
    let inputElementMspPassSecond= document.createElement("input");
    inputElementMspPassSecond.type = "text";
    inputElementMspPassSecond.value =
      "Searched servicing system. Loan is active, Man Code: " + MspManCode2.value;
    document.body.appendChild(inputElementMspPassSecond);
    inputElementMspPassSecond.select();
    document.execCommand("copy");
    document.body.removeChild(inputElementMspPassSecond);
  };