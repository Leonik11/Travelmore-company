const visitorName = document.querySelector("#visitorName");
const dayNumber = document.querySelector("#dayNumber");
const peopleNumber = document.querySelector("#peopleNumber")
const childrenNumber = document.querySelector("#childrenNumber");
const bookAppartment = document.querySelector("#bookAppartment");


function createBooking() {
  if (isValidText()) {
    const bookingInformation = {
        visitorName: visitorName.value,
        dayNumber: dayNumber.value,
        peopleNumber: peopleNumber.value,
        childrenNumber: childrenNumber.value,
      uploadTime: new Date().toString().split("GMT")[0]
    }
    addElementInFirebase("bookingInformation", bookingInformation);
    displayAlert("Success", "Uploaded information", "success");
    bookAppartment.disabled = true;
    setTimeout(() => {
      location.href = "payment.html";
    }, 2000);
  } else {
    displayAlert("Incorrect", "Fill fields", "error");
  }
}

function isValidText() {
  if (visitorName.value === "" || dayNumber.value === "" || peopleNumber.value === "" || childrenNumber.value === "") return false;
  return true;
}