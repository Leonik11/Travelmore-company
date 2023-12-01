
const firebaseConfig = { //Firebase კონფიგი
  apiKey: "AIzaSyC91G-lJFpTk-p5pUI6t7EvxQtiqgyJLig",
  authDomain: "niko-9ca51.firebaseapp.com",
  projectId: "niko-9ca51",
  databaseURL: "https://niko-9ca51-default-rtdb.firebaseio.com/",
  storageBucket: "niko-9ca51.appspot.com",
  messagingSenderId: "261448552894",
  appId: "1:261448552894:web:19d1297d85912d1b8ae9ef",
  measurementId: "G-CS594GRV6Q"
};

firebase.initializeApp(firebaseConfig); //დაკავშირება firebase სთან , არსებული კონფიგით

function randomID() { //UUID-4
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    let r = (Math.random() * 16) | 0;
    let v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}


/**
 * ფაირბეისიდან დაბრუნებული ინფორმაციის ობიექტში გადაკეთება
 * @param ID - უნიკალური იდ
 * @param value - მნიშვნელობა რაც არის მონაცემთა ბაზაში
 * @returns ვაბრუნებთ მთლიან ობიექტს სადაცა რის ID და Value
 */
function generateFirebaseBaseItem(ID, value) {
  return {
    id: ID,
    data: value
  }
}


/**
 * დავამატოთ მონაცემთა ბაზაი ელემენტი
 * @param REF - დასახელება მონაცემთა ბაზის განშტოების
 * @param data - ინფორმაცია რასაც ვამატებთ
 */
function addElementInFirebase(REF, data) {
  firebase.database().ref(`${REF}/${randomID()}`).set(data);
}
/**
 * მთლიანი განშტოების წამოღება ფაირბეისიდან
 * @param REF - დასახელება მონაცემთა ბაზის განშტოების
 * @returns აბრუნებს განშტოებაზე არსებულ ინფორმაციას
 */
function getArrayFromFirebase(REF) {
  const array = [];
  firebase.database().ref(REF).on("value", (response) => {
    response.forEach((element) => {
      array.push(generateFirebaseBaseItem(element.key, element.val()));
    })
  });
  return array;
}

/**
 * კონკრეტული ელემენტის დაბრუნება განშტოებიდან
 * @param REF - დასახალება მონაცემთა ბაზის განშტოების
 * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
 * @returns აბრუნებს Promise კარგ შემთხვევაში მონაცემს ცუდ შემთხვევაში "404"
 */
function getElementFromArray(REF, id) {
  const array = getArrayFromFirebas(REF);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      array.forEach((element) => {
        if (element.id === id) {
          resolve(element);
        }
      });
      reject('404');
    }, 1000);
  });
}
/**
 * გავანახლოთ ინფორმაცია ფაირბეისში
 * @param REF - დასახალება მონაცემთა ბაზის განშტოების
 * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
 * @param data - განახლებული ინფორმაცია
 */
function updateDataInFirebaseByID(REF, id, data) {
  firebase.database().ref(`${REF}/${id}`).set(data);
}
/**
 * განშტოებიდან ელემენტის ამოშლა
 * @param REF - დასახალება მონაცემთა ბაზის განშტოების
 * @param id - განშტოებაზე არესბული ელემენტის უნიკალური იდ
 */
function removeElementFromFierbase(REF, id) {
  firebase.database().ref(`${REF}/${id}`).remove();
}
/**
 * მთლიანი განშტოების წაშლა
 * @param REF - დასახალება მონაცემთა ბაზის განშტოების
 */
function removeRefFromFierbase(REF) {
  firebase.database().ref(REF).remove();
}