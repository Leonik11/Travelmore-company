const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const button = document.querySelector("#registerButton");
const usersArray = getArrayFromFirebase("User");



function login() {
  button.disabled = true;
  let email = emailInput.value;
  let password = passwordInput.value;
  let currentUserIndex = usersArray.findIndex((user) => user.data.email === email && user.data.password === password);

  if (currentUserIndex === -1) {
    displayAlert('Wrong', "data is incorrect", "error");
   
    return;
  }

  button.disabled = true;

  let currentUserData = usersArray[currentUserIndex];
  localStorage.setItem('current_user_id', currentUserData.id);
  localStorage.setItem('current_user_data', JSON.stringify({
    fullName: currentUserData.data.fullName,
    email: currentUserData.data.email,
    userId: currentUserData.data.userId,
    companyPassword : currentUserData.data.companyPassword
  }));

  displayAlert('Success', "Successfully authorized", "success");

  setTimeout(() => {
    location.href = 'index.html';
  }, 1500);

  
}