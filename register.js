const nameInput = document.querySelector("#fullName");
const userIdInput = document.querySelector("#userId");
const phoneNumberInput = document.querySelector("#phoneNumber");
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const usersArray = getArrayFromFirebase("User");
const registerButton = document.querySelector("#registerButton");


function companyManeger () {
    let checkBox = document.getElementById("hotelManager");
    let istrue = checkBox.checked == true;
    if (istrue){

      document.querySelector(".maneger").innerHTML +=`
    <label for="inputEmail4" class="form-label manegerremove">Company Password</label>
    <input type="password" class="form-control manegerremovee" id="companyPassword" required >`;
    const companyPasswordInput = document.querySelector("#companyPassword");


            
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  register();
});

function register() {
  let fullName = nameInput.value;
  let userId = userIdInput.value;
  let phone = phoneNumberInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;
  let companyPassword = companyPasswordInput.value;

  if (fullName === "" || userId === "" || phone === "" || email === "" || password === ""  || companyPassword === "") {
    displayAlert('Wrong', "fill every value", 'error');
    return;
  }

  if (!email.includes("@")) {
    displayAlert('Wrong', "Input correct email", 'error');
    return;
  }

  usersArray.forEach((element) => {
    if (element.data.email === email) {
      displayAlert('Wrong', "Email already in database", 'error');
      return;
    }
  });

  addElementInFirebase("User", { fullName, userId, phone, email, password, companyPassword });
  displayAlert("Success", "Registered", "success");
  registerButton.disabled = true;

  setTimeout(() => {
    location.href = "auth.html";
  }, 1500);
}


    } else if(!istrue){
      document.querySelector(".manegerremove").remove();
      document.querySelector(".manegerremovee").remove();
      
            
registerButton.addEventListener("click", (e) => {
  e.preventDefault();
  register();
});

function register() {
  let fullName = nameInput.value;
  let userId = userIdInput.value;
  let phone = phoneNumberInput.value;
  let email = emailInput.value;
  let password = passwordInput.value;

  if (fullName === "" || userId === "" || phone === "" || email === "" || password === "") {
    displayAlert('Wrong', "fill every value", 'error');
    return;
  }

  if (!email.includes("@")) {
    displayAlert('Wrong', "Input correct email", 'error');
    return;
  }

  usersArray.forEach((element) => {
    if (element.data.email === email) {
      displayAlert('Wrong', "Email already in database", 'error');
      return;
    }
  });

  addElementInFirebase("User", { fullName, userId, phone, email, password});
  displayAlert("Success", "Registered", "success");
  registerButton.disabled = true;

  setTimeout(() => {
    location.href = "auth.html";
  }, 1500);
}


  }

}

  
