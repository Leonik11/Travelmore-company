const hotelName = document.querySelector("#hotelName");
const hotelEmail = document.querySelector("#hotelEmail");
const hotelPhone = document.querySelector("#hotelPhone")
const hotelStar = document.querySelector("#hotelStar");
const hotelAddress = document.querySelector("#hotelAddress");
const hotelImg = document.querySelector("#hotelImg");
const hotelDescribtion = document.querySelector("#hotelDescribtion");
const hotelServices = document.querySelector("#hotelServices");
const actionPost = document.querySelector("#hotelSubmit");
const hotelCardArea = document.querySelector("#hotelCard");

const defaultImageSrc = "https://codemyui.com/wp-content/uploads/2015/09/cloud-file-upload-using-css.gif";
let imageValue = defaultImageSrc;




function imageToString() {
  const currentImage = hotelImg;
  const fileReader = new FileReader();
  fileReader.readAsDataURL(currentImage.files[0]);
  fileReader.onload = () => {
    hotelImg.src = fileReader.result;
    imageValue = fileReader.result;
  }
}
function randomHotelID() { //UUID-4
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
function createPost() {
  const userslocal = localStorage.getItem("current_user_data");
    let currentUserDataObject = JSON.parse(userslocal);
   
  if (isValidTextt()) {
    const cardData = {
      hotelId: randomHotelID(),
      ownerId: currentUserDataObject.userId,
      hotelName: hotelName.value,
      imageSrc: imageValue,
      hotelEmail: hotelEmail.value,
      hotelPhone: hotelPhone.value,
      hotelStar: hotelStar.value,
      hotelAddress: hotelAddress.value,
      hotelDescribtion: hotelDescribtion.value,
      hotelServices: hotelServices.value,
      uploadTime: new Date().toString().split("GMT")[0]
      
    }
    addElementInFirebase("Posts", cardData);
    displayAlert("Success", "Uploaded post", "success");
    actionPost.disabled = true;
    setTimeout(() => {
      location.href = "hotel.html";
    }, 5000);
  } else {
    displayAlert("Incorrect", "Fill fields", "error");
  }
}

function isValidTextt() {
 if (hotelName.value === "" || hotelEmail.value === "" || hotelPhone.value === "" || hotelStar.value === "" || hotelAddress.value === "" || hotelDescribtion.value === ""  || hotelServices.value === "") return false;
  
 return true;
}