// Title Underwriter

let TitleUnderwriterAgentName = localStorage.getItem("tu-agent");
let TitleUnderwriterNumber = localStorage.getItem("tu-number");

document.getElementById("tu-agent").textContent = TitleUnderwriterAgentName;
document.getElementById("tu-number").textContent = TitleUnderwriterNumber;

// email

TUEmail.onclick = function sendMail() {
    const emailAddress = document.getElementById('TUnderwriterEmail').value;

    const subject = encodeURIComponent("Loan Policy Request - Property at 448 Ocean Avenue");
    const body = encodeURIComponent(`Dear Sue,

During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?

Customer: Robert Ruscil
Property Address: 448 Ocean Avenue Long Beach, NJ 07740
Closing Date: 01/27/1999
Loan Amount: $50,000
File Number: TA-072326

What we are requesting from you:

· Reply with a copy of the recorded Lender's Title Policy

Thank you for your assistance with resolving this matter. If you have any questions, feel free to reply to this email or call me at 866-743-1112 ext: 53060, Monday through Friday 8:00 A.M. to 5:00 P.M. Central time.

Sincerely,
`);

      // Construct the mailto link
      const mailtoLink = `mailto:${emailAddress}?subject=${subject}&body=${body}`;

      // Open the default email client with the pre-filled subject and body
      window.location.href = mailtoLink;
    }
//   const dynamicInput = document.createElement("input");
//   dynamicInput.type = "text";
//   dynamicInput.name = "dynamicInput";
//   dynamicInput.value =
//     "During an internal review for the property listed below, Wells Fargo found that the Loan Policy should have been issued but we have not received a copy. Would you please assist us?";

//   // Append the input field to the dynamic form
//   document.body.appendChild(dynamicInput);


//   var partyEmail = document.getElementById("TUnderwriterEmail").value;
//   var emailBody = dynamicInput.value;
//   var SAname = document.getElementById("NameTU").value;

//   window.location.href =
//     "mailto:" +
//     partyEmail +
//     "?subject=Title Policy Not Received&body=Hi " +
//     SAname +
//     ",%20%0D%0A%0D%0A" +
//     emailBody;
// };
