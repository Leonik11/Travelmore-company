const hotelName = document.querySelector("#hotelName");
const hotelEmail = document.querySelector("#hotelEmail");
const hotelPhone = document.querySelector("#hotelPhone")
const hotelStar = document.querySelector("#hotelStar");
const hotelAddress = document.querySelector("#hotelAddress");
const hotelImg = document.querySelector("#hotelImg");
const hotelShortInfo = document.querySelector("#hotelShortInfo");
const hotelDescribtion = document.querySelector("#hotelDescribtion");
const hotelServices = document.querySelector("#hotelServices");
const buttonn = document.querySelector("#hotelSubmit");

const hotelCardArea = document.querySelector("#hotelCard");


const roomPrice = document.querySelector("#roomPrice");
const roomLength = document.querySelector("#roomLength");
const roomRoom = document.querySelector("#roomRoom")
const roomBathroom = document.querySelector("#roomBathroom");
const roomBedroom = document.querySelector("#roomBedroom");
const roomKitchen = document.querySelector("#roomKitchen");
const roomFloor = document.querySelector("#roomFloor");
const roomImg = document.querySelector("#roomImg");
const roomShortInfo = document.querySelector("#roomShortInfo");
const roomDescribtion = document.querySelector("#roomImg");
const roomServices = document.querySelector("#roomShortInfo");

const defaultImage = "https://www.ncenet.com/wp-content/uploads/2020/04/No-image-found.jpg"



let count = 0;
buttonn.addEventListener("click", () => {
    hotelCard(hotelName.value, hotelShortInfo.value, count);
    count++;
});

function validateHotelInput(hotelName, hotelEmail, hotelPhone, hotelStar, hotelAddress, hotelShortInfo, hotelDescribtion, hotelServices) {
    return hotelName === "" || hotelEmail === "" || hotelPhone === "" || hotelStar === "" || hotelAddress === "" || hotelShortInfo === "" || hotelDescribtion === "" || hotelServices === "" ;
}

function hotelCard(hotelName, hotelShortInfo, id){
    if(!validateHotelInput(hotelName, hotelEmail, hotelPhone, hotelStar, hotelAddress, hotelShortInfo, hotelDescribtion, hotelServices)){
        hotelCardArea.innerHTML += `
        <aside id="${id}">
            <div class="card mb-3" style="max-width: 840px; height: 250px">
              <div class="row g-0" style="max-width: 840px; height: 250px">
                <div class="col-md-4">
                  <img
                    style="height: 100%"
                    src=""
                    class="img-fluid rounded-start"
                    alt="..."
                    id="img${id}"
                  />
                </div>
                <div class="col-md-8">
                  <div class="card-body" style="height: 100%">
                    <h5 class="card-title">${hotelName}</h5>
                    <p class="card-text">${hotelShortInfo}</p>
                    <div class="carddiv">
                      <button class="cardbutton">
                        <a href="./hotelinfo.html">CHECK HOTEL</a>
                      </button>
                      <button class="cardbutton" style="margin: 10px;" onclick="remove('${id}')>
                      REMOVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </aside>
      `;
      imageToString(id);
    clearValues();
  } else {
    displayError('Error', 'Input must be filled!', 'error');
  }
}

function remove(id) {
  document.getElementById(id).remove();
}

function imageToString(id) {
  const image = document.querySelector(`#img${id}`);
  try {
    const reader = new FileReader();
    reader.readAsDataURL(hotelImg.files[0]);
    reader.onload = () => {
      image.src = reader.result;
    }
  } catch (error) {
    image.src = defaultImage;
  }
}

function clearValues() {
  hotelName.value = "";
  hotelEmail.value = ""; 
  hotelPhone.value = ""; 
  hotelStar.value = "";
  hotelAddress.value = ""; 
  hotelShortInfo.value = "";
  hotelDescribtion.value = "";
  hotelServices.value = ""; 
  hotelImg.value ="";
}

function displayError(title, text, icon) {
  Swal.fire({ title, text, icon });
}













const url = location.href;
const currentFile = url.split("/").pop().split(".")[0];

if (isCorrectAuth()) {
  document.querySelectorAll(".auth").forEach((element) => {
    element.remove();
  });
  document.querySelectorAll(".afterAuth").forEach((element) => {
    element.style.display = "block";
  });
  if (currentFile === "auth" || currentFile === "register") {
    location.href = "index.html";
  }
}

function logOut() {
  localStorage.removeItem("current_user_data");
  localStorage.removeItem("current_user_id");
  location.reload();
}

function isCorrectAuth() {
  const currentUserData = localStorage.getItem("current_user_data");
  const currentUserID = localStorage.getItem("current_user_id");
  if (currentUserData && currentUserID) {
    let currentUserDataObj = JSON.parse(currentUserData);
    if (currentUserDataObj.fullName && currentUserDataObj.email) {
      if (currentUserID.length === 36 && currentUserID[14] === "4") {
        return true;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } else {
    localStorage.removeItem("current_user_data");
    localStorage.removeItem("current_user_id");
    return false;
  }
}

function displayAlert(title, text, icon) {
  return Swal.fire({ title, text, icon });
}











function register() {
  console.log(fullName);
  if (isValidInput()) {
    const userData = {
      fullName: nameInput.value,
      phone: phoneNumberInput.value,
      email: emailInput.value,
      passworde: passwordInput.value,
      companyPassworde: companyPasswordInput.value
    }
    addElementInFirebase("User", userData);
    displayAlert("Success", "Registered", "success");
    setTimeout(() => {
      location.href = "auth.html";
    }, 2500);
  } else {
    displayAlert("Incorrect", "Fill fields", "error");
  }

  usersArray.forEach((element) => {
    if (element.data.email === email) {
      displayAlert('Wrong', "Email already in database", 'error');
      return;
    }
  });
}

function isValidInput() {
  if (fullName === "" || phone === "" || email === "" || password === "" || companyPassword === "") return false;
  return true;
}





document.querySelector(".hotelTitle").innerHTML +=`
          <aside>
              <h2>${post.data.hotelName}</h2>
              <span class="span1">About Hotel</span>
              <span class="span2"
                >${post.data.hotelDescribtion}</span
              >
            </aside>
            `;

          document.querySelector(".hotelInformation").innerHTML +=`
          <aside class="middletop11">
              <h1>INFORAMTION</h1>
              <div class="infop1">
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-location-dot styleicon"></i>Hotel
                    Location:</span
                  >
                  <span class="infospan">${post.data.hotelAddress}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-phone styleicon"></i>Hotel Phone
                    Number:</span
                  >
                  <span class="infospan">${post.data.hotelPhone}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-envelope styleicon"></i>Hotel
                    Email:</span
                  >
                  <span class="infospan"> ${post.data.hotelEmail}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-star styleicon"></i>Hotel Star:</span
                  >
                  <span class="infospan"> ${post.data.hotelStar}</span>
                </p>
                <div class="infop23">
                  <p class="services">About Services: </p><span class="servicespan">${post.data.hotelServices
                    }</span>
                </div>
              </div>
            </aside>
            <aside  class="hotelimage">
              <img
                    src="${post.data.imageSrc}"
                    class="hotelimage"
                    alt="images"/>
            </aside>`;










            if (currentFile === "hotelinfo") {
              const posts = getArrayFromFirebase("Posts")
              setTimeout(() => {
                posts.forEach((post)=>{
                  document.querySelector(".addInfoHotelRoom").innerHTML +=`
                    
          <main>
          <section class="mainsection1">
          <aside>
                <h2>${post.data.hotelName}</h2>
                <span class="span1">About Hotel</span>
                <span class="span2"
                  >${post.data.hotelDescribtion}</span
                >
              </aside>
          </section>
          <section class="middlee">
          <aside class="middletop11">
              <h1>INFORAMTION</h1>
              <div class="infop1">
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-location-dot styleicon"></i>Hotel
                    Location:</span
                  >
                  <span class="infospan">${post.data.hotelAddress}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-phone styleicon"></i>Hotel Phone
                    Number:</span
                  >
                  <span class="infospan">${post.data.hotelPhone}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-envelope styleicon"></i>Hotel
                    Email:</span
                  >
                  <span class="infospan"> ${post.data.hotelEmail}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-star styleicon"></i>Hotel Star:</span
                  >
                  <span class="infospan"> ${post.data.hotelStar}</span>
                </p>
                <div class="infop23">
                  <p class="services">About Services: </p><span class="servicespan">${post.data.hotelServices
                    }</span>
                </div>
              </div>
            </aside>
            <aside  class="hotelimage">
              <img
                    src="${post.data.imageSrc}"
                    class="hotelimage"
                    alt="images"/>
            </aside>
          </section>
          <section class="listofappartment">
            <aside>
              <h2>APPARTMENTS</h2></aside>
          </section>
          <section class="bottom margintop">
            <aside class="bottomdiv">
              <div class="imgdiv1"><div class="imgdiv"></div></div>
              <div class="letterdiv">
                <h3>${post.data.uploadTime}</h3>
                <span
                  >${post.data.roomShortInfo}</span>
                <button><a href="./appartment.html">CHECK APPARTMENT</a></button>
                <button class="cardbutton" style="margin: 10px;">
                  <a href="./hotelinfo.html">REMOVE</a>
                </button>
              </div>
            </aside>
          </section>
          
          </main>`;
                  
                })
              }, 5000);
            }









            
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
//რომ დავაწვები კლიკს მენეჯერზე ჰტმლ ში დაემატოს ახალი სავალდებულო იმპპუტი და მაგით მივხვდები ვინაა რეგისტრირებული 









const userslocal = localStorage.getItem("current_user_data");
let currentUserDataObject = JSON.parse(userslocal);
const postsArray = getArrayFromFirebase("Posts");
const adminArray = getArrayFromFirebase("User");
setTimeout(() => {
  let userCheck = postsArray.findIndex((posts) => posts.data.ownerId === currentUserDataObject.userId);
  let adminCheck = adminArray.findIndex((user) => user.data.companyPassword === currentUserDataObject.companyPassword);
  const addRemoveBtn= document.querySelector(".carddiv");
  if(userCheck === 0 && adminCheck === 0){

    addRemoveBtn.innerHTML +=`
      <button class="cardbutton buttona" style="margin: 10px;">REMOVE</button>`;
    }else if(userCheck === 0){
      addRemoveBtn.innerHTML +=`
    <button class="cardbutton buttona" style="margin: 10px;">REMOVE</button>`;
    }
}, 10000)







  
function addMoreHotelInfo(){
  setTimeout(() => {
    location.href = "hotelinfo.html";
    const postsId = getArrayFromFirebase("Posts");
    let currentHotelIndex = postsId.findIndex((hotelIdIndex) => hotelIdIndex.data.hotelId === document.querySelector("#forHotelId").value);
    let currentHotelIdData = postsId[currentHotelIndex];
    localStorage.setItem('current_hotel_data', JSON.stringify({
      hotelId: currentHotelIdData.data.hotelId
    }));    
  }, 8000);
}





if (currentFile === "hotelinfo") {
  const localhotelId = localStorage.getItem("current_hotel_data");
  let currentHotelDataObject = JSON.parse(localhotelId);
  const hotelIdArray = getArrayFromFirebase("Posts");
  setTimeout(() => {
    let hotelIdCheck = hotelIdArray.findIndex((findHotelId) => findHotelId.data.hotelId === currentHotelDataObject.hotelId);
    const addCorrectHotel= document.querySelector(".addInfoHotelTitle");
    const addCorrectHotelInfo= document.querySelector(".addInfoHotel");
    if(hotelIdCheck === 0){
     const posts = getArrayFromFirebase("Posts")
    setTimeout(() => {
      posts.forEach((post)=>{
       addCorrectHotel.innerHTML +=`
        <aside>
        <h2>${post.data.hotelName}</h2>
        <span class="span1">About Hotel</span>
        <span class="span2"
          >${post.data.hotelDescribtion}</span
        >
      </aside>
        `;
        addCorrectHotelInfo.innerHTML +=`
          <aside class="middletop11">
              <h1>INFORAMTION</h1>
              <div class="infop1">
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-location-dot styleicon"></i>Hotel
                    Location:</span
                  >
                  <span class="infospan">${post.data.hotelAddress}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-phone styleicon"></i>Hotel Phone
                    Number:</span
                  >
                  <span class="infospan">${post.data.hotelPhone}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-envelope styleicon"></i>Hotel
                    Email:</span
                  >
                  <span class="infospan"> ${post.data.hotelEmail}</span>
                </p>
                <p>
                  <span class="infospan1"
                    ><i class="fa-solid fa-star styleicon"></i>Hotel Star:</span
                  >
                  <span class="infospan"> ${post.data.hotelStar}</span>
                </p>
                <div class="infop23">
                  <p class="services">About Services: </p><span class="servicespan">${post.data.hotelServices
                    }</span>
                </div>
              </div>
            </aside>
            <aside  class="hotelimage">
              <img
                    src="${post.data.imageSrc}"
                    class="hotelimage"
                    alt="images"/>
            </aside>
        `;
      })
    }, 8000);
      }else{
       console.log("hotelIdCheck")
      }
  }, 8000)
  }
  


