const roomPrice = document.querySelector("#roomPrice");
const roomLength = document.querySelector("#roomLength");
const roomRoom = document.querySelector("#roomRoom")
const roomBathroom = document.querySelector("#roomBathroom");
const roomBedroom = document.querySelector("#roomBedroom");
const roomKitchen = document.querySelector("#roomKitchen");
const roomFloor = document.querySelector("#roomFloor");
const roomImg = document.querySelector("#roomImg");
const roomShortInfo = document.querySelector("#roomShortInfo");
const roomDescribtion = document.querySelector("#roomDescribtion");
const actionPostt= document.querySelector("#roomSubmitt");
const roomCardArea = document.querySelector("#roomCard");
const roomHotelName = document.querySelector("#roomHotelName");
const defaultImageSrcc = "https://codemyui.com/wp-content/uploads/2015/09/cloud-file-upload-using-css.gif";
let imageValuee = defaultImageSrcc;





function imageToStringg() {
  const currentImagee = roomImg;
  const fileReaderr = new FileReader();
  fileReaderr.readAsDataURL(currentImagee.files[0]);
  fileReaderr.onload = () => {
    roomImg.src = fileReaderr.result;
    imageValuee = fileReaderr.result;
  }
}

function createRoom() {
  if (isValidText()) {
    const RoomData = {
      roomHotelName: roomHotelName.value,
      roomPrice: roomPrice.value,
      roomLength: roomLength.value,
      roomImageSrc: imageValuee,
      roomRoom: roomRoom.value,
      roomBathroom: roomBathroom.value,
      roomBedroom: roomBedroom.value,
      roomKitchen: roomKitchen.value,
      roomFloor: roomFloor.value,
      roomDescribtion: roomDescribtion.value,
      roomServices: roomServices.value,
      uploadTime: new Date().toString().split("GMT")[0]
    }
    addElementInFirebase("Rooms", RoomData);
    displayAlert("Success", "Uploaded appartment", "success");
    actionPostt.disabled = true;
    setTimeout(() => {
      location.href = "appartment.html";
    }, 5000);
  } else {
    displayAlert("Incorrect", "Fill fields", "error");
  }
}

function isValidText() {
  if (roomHotelName === "" || roomPrice.value === "" || roomLength.value === "" || roomRoom.value === "" || roomBathroom.value === "" || roomBedroom.value === "" || roomKitchen.value === "" || roomFloor.value === ""  || roomDescribtion.value === "" || roomServices.value === "") return false;
  return true;
}