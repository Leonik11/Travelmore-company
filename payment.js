const payFullName = document.querySelector("#payFullName");
const payPhoneNumber = document.querySelector("#payPhoneNumber");
const nameOnCard = document.querySelector("#nameOnCard")
const cardInformation = document.querySelector("#cardInformation");
const MMYY = document.querySelector("#MMYY");
const CVC = document.querySelector("#CVC");
const pay = document.querySelector("#pay");


function payment() {
  if (isValidText()) {
    const payment = {
        FullName: payFullName.value,
        phoneNumber: payPhoneNumber.value,
        nameOnCard: nameOnCard.value,
        cardInformation: cardInformation.value,
        MMYY: MMYY.value,
        CVC: CVC.value,
      uploadTime: new Date().toString().split("GMT")[0]
    }
    addElementInFirebase("Payment", payment);
    displayAlert("Success", "Payment", "success");
    pay.disabled = true;
    setTimeout(() => {
      location.href = "index.html";
    }, 2000);
  } else {
    displayAlert("Incorrect", "Fill fields", "error");
  }
}

function isValidText() {
  if (payFullName.value === "" || payPhoneNumber.value === "" || nameOnCard.value === "" || cardInformation.value === "" || MMYY.value === "" || CVC.value === "") return false;
  return true;
}