const url = location.href;
const currentFile = url.split("/").pop().split(".")[0];
const buttonnn = document.querySelector('#registerButton')
const hotelCardAreaa = document.querySelector("#hotelCard");
const hotelSubmit = document.querySelector("#hotelSubmit");

if (currentFile === "hotel") {
    const posts = getArrayFromFirebase("Posts")
    var r=0;
    setTimeout(() => {
      posts.forEach((post)=>{ r++;
        document.querySelector(".displayPosts").innerHTML +=`
        <article>
          <aside class="image">
            <img src="${post.data.imageSrc}" alt="image">
        </aside>
        <aside class="hotelinfo">
                <div class="titlediv">
                    <h2>${post.data.hotelName}</h2>
                </div>
                <div class="maindiv">
                    <div>
                        <span class="first">Email:</span>
                        <span class="second"> ${post.data.hotelEmail}</span>
                    </div>
                    <div>
                        <span class="first">Phone Number:</span>
                        <span class="second">${post.data.hotelPhone}</span>
                    </div>
                    <div>
                        <span class="first">Star:</span>
                        <span class="second">${post.data.hotelStar}</span>
                    </div>
                    <div>
                        <span class="first">Location:</span>
                        <span class="second">${post.data.hotelAddress}</span>
                    </div>
                </div>
                <div class="textdiv">
                    <div>
                        <p>Services</p>
                        <span>${post.data.hotelServices}</span>
                    </div>
                    <div>
                        <p>Describtion</p>
                        <span>${post.data.hotelDescribtion}</span>
                    </div>
                </div>
                <div class="btnn addBtnRemove">
                    <button id="addHotel" onclick="addMoreHotelInfo()">View Apartments</button>
                    <p>${post.data.uploadTime}</p>
                    <input type="hidden" value="${post.data.hotelId}" class="`+r+`addd">

                    <a>Add Apartment</a>
                </div>
            </aside>
            </article>
        `;
      })
    }, 7000);
  }
  
function addMoreHotelInfo(){
  setTimeout(() => {
    location.href = "appartment.html";
    const postsId = getArrayFromFirebase("Posts");
    var w=document.querySelector("."+r+ "addd").value
alert(w);
//w="forHo";
console.log(w);
    localStorage.setItem('current_hotel_data2', JSON.stringify({
      hotelId: document.querySelector("."+w).value
    })); 


    let currentHotelIndex = postsId.findIndex((hotelIdIndex) => hotelIdIndex.data.hotelId === document.querySelector("."+w).value);




    let currentHotelIdData = postsId[currentHotelIndex];
    localStorage.setItem('current_hotel_data', JSON.stringify({
      hotelId: currentHotelIdData.data.hotelId
    }));    
  }, 3000);
}

if(currentFile !== "appartment"){
  localStorage.removeItem('current_hotel_data');
}


function displayError(title, text, icon) {
  Swal.fire({ title, text, icon });
}




if (currentFile === "appartment") {
  const rooms = getArrayFromFirebase("Rooms")
  setTimeout(() => {
    rooms.forEach((rooms)=>{
      document.querySelector(".appartment").innerHTML +=`
      <div class="accordionn accordion accordion-flush" id="accordionFlushExample">
          <div class="accordion-item display-cards">
              <article>
                  <aside class="image " >
                      <img  alt="image" src="${rooms.data.roomImageSrc}">
                  </aside>
                  <aside class="hotelinfo">
                          <div class="maindiv">
                              <div>
                                  <span class="first">Price Per Day:</span>
                                  <span class="second">${rooms.data.roomPrice}</span>
                              </div>
                              <div>
                                  <span class="first">Appartment Length (m<sup>2</sup>):</span>
                                  <span class="second">${rooms.data.roomLength}</span>
                              </div>
                              <div>
                                  <span class="first">Rooms:</span>
                                  <span class="second"> ${rooms.data.roomRoom}</span>
                              </div>
                              <div>
                                  <span class="first">Bathroom:</span>
                                  <span class="second">${rooms.data.roomBathroom}</span>
                              </div>
                              <div>
                                <span class="first">Bedroom:</span>
                                <span class="second">${rooms.data.roomBedroom}</span>
                            </div>
                            <div>
                                <span class="first">Floor:</span>
                                <span class="second">${rooms.data.roomKitchen}</span>
                            </div>
                            <div>
                                <span class="first">Bed:</span>
                                <span class="second">${rooms.data.roomFloor}</span>
                            </div>
                          </div>
                          <div class="textdiv">
                              <div>
                                  <p>Services</p>
                                  <span>${rooms.data.roomServices}</span>
                              </div>
                              <div>
                                  <p>Describtion</p>
                                  <span> ${rooms.data.roomDescribtion}</span>
                              </div>
                          </div>
                          <div class="btnn addBtnRemove">
                              <button type="button" class="accordion-button collapsed" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                  Check Apartment
                                </button>
                                <p>${rooms.data.uploadTime}</p>
                          </div>
                  </aside>
              </article>
              
            <div class="checkroom accordion-collapse collapse"  id="flush-collapseOne" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
              <div class="accordion-body">
                    <div class="form">
                      <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">Name of visitor</label>
                          <input type="text" class="form-control" id="visitorName" placeholder="ENTER NAME OF VISITOR" required>
                        </div>
                      <div class="col-md-6">
                          <label for="inputEmail4" class="form-label">How many day will you stay?</label>
                          <input type="text" class="form-control" id="dayNumber" placeholder="ENTER NUMBER OF DAYS" required>
                        </div>
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">How many people will you be?</label>
                        <input type="text" class="form-control" id="peopleNumber" placeholder="ENTER NUMBER OF PEOPLE" required>
                      </div>
                      <div class="col-md-6">
                        <label for="inputEmail4" class="form-label">How many child do you have?</label>
                        <input type="text" class="form-control" id="childrenNumber" placeholder="ENTER NUMBER OF CHILDREN" required>
                      </div>
                      <div class="col-12">
                        <button type="submit"id="bookAppartment" onclick="createBooking()">Book Apartment</button>
                      </div>
                    </div>
              </div>
            </div>
          </div>
          
        
        </div>
`;
    })
  }, 5000);
}

if (isCorrectAuth()) {
  document.querySelectorAll(".auth").forEach((element) => {
    element.remove();
  });
  document.querySelectorAll(".afterAuth").forEach((element) => {
    element.style.display = "flex";
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



function booking(){
  setTimeout(() => {
    location.href = "booking.html";
  }, 1500);
}

if (currentFile === "booking") {
  const rooms = getArrayFromFirebase("Rooms")
  setTimeout(() => {
    rooms.forEach((rooms)=>{
      document.querySelector(".bookingPrice").innerHTML +=`
      <span>PRICE FOR PER DAY: ${rooms.data.roomPrice}</span>`;
    })
  }, 2000);
}


if (currentFile === "payment") {
  const bookingInformation = getArrayFromFirebase("bookingInformation")
  const rooms = getArrayFromFirebase("Rooms")
  setTimeout(() => {
    bookingInformation.forEach((bookingInformation)=>{
      rooms.forEach((rooms)=>{
        document.querySelector(".registeraside1").innerHTML +=`
        <span>PRICE: ${rooms.data.roomPrice} * ${bookingInformation.data.dayNumber} </span>`;
      })
    })
  }, 3000);
}

if(currentFile === "hotel" || currentFile === "appartment"){
  setTimeout(() => {
    const userslocal = localStorage.getItem("current_user_data");
    let currentUserDataObject = JSON.parse(userslocal);
    const postsArray = getArrayFromFirebase("Posts");
    const adminArray = getArrayFromFirebase("User");
    setTimeout(() => {
      let userCheck = postsArray.findIndex((posts) => posts.data.ownerId === currentUserDataObject.userId);
      let adminCheck = adminArray.findIndex((user) => user.data.companyPassword === currentUserDataObject.companyPassword);
    //  console.log(adminCheck);  ფაირბეისიდან ვერ კითხულობს კონკრეტულ ელემენტებს
      const addRemoveBtn= document.querySelector(".addBtnRemove");
      if(adminCheck === 0){
        addRemoveBtn.innerHTML +=`
          <button class="cardbutton buttona" style="margin: 10px;" onclick="removeHotel()">Remove</button>`;
          
        }else if(userCheck === 0){
          addRemoveBtn.innerHTML +=`
        <button class="cardbutton buttona" style="margin: 10px;" onclick="removeHotel()">Remove</button>`;
        }
    },)
  }, 8000)
 
}

function removeHotel(){
  document.querySelector(".displayPosts").remove();
}