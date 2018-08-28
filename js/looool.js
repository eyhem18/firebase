// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD8j9J-VoH_2cjOh4R0AD1MD7X-1llAlMA",
    authDomain: "eyhem-60fdf.firebaseapp.com",
    databaseURL: "https://eyhem-60fdf.firebaseio.com",
    projectId: "eyhem-60fdf",
    storageBucket: "eyhem-60fdf.appspot.com",
    messagingSenderId: "109198710438"
  };
  firebase.initializeApp(config);

  document.getElementById('contactForm').addEventListener('submit', submitForm);

function getInputVal(id){
  return document.getElementById(id).value;
}
function submitForm(e){
    e.preventDefault();
    // Get values
    var name = getInputVal('name');
    var lastname = getInputVal('lastname');
    var email = getInputVal('email');
    var message = getInputVal('message');
    var categories=getInputVal('categories');
    var messagesRef = firebase.database().ref('messages');

    saveMessage(name, lastname, email, message, categories,messagesRef);
    // Clear form
    document.getElementById('contactForm').reset();
    // Show alert
    document.querySelector('.alert').style.display = 'block';
    // Hide alert after 3 seconds
    setTimeout(function(){
      document.querySelector('.alert').style.display = 'none';
    },3000);

}
// References the messages collection

// Save message to firebase
function saveMessage(name, lastname, email, message, categories, messagesRef){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    lastname:lastname,
    email:email,
    message:message,
    categories:categories
  });
}