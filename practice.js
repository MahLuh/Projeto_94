const firebaseConfig = {
    apiKey: "AIzaSyATBdlEvu2x0ukXJI8ocSOX2ZVmiJtKpvI",
    authDomain: "projetoaula95.firebaseapp.com",
    databaseURL: "https://projetoaula95-default-rtdb.firebaseio.com",
    projectId: "projetoaula95",
    storageBucket: "projetoaula95.appspot.com",
    messagingSenderId: "137836216369",
    appId: "1:137836216369:web:dd7f7fd2b54f3ef9729510"
  };  
firebase.initializeApp(firebaseConfig)
function entrar(){
    userName = document.getElementById("UserName")
    firebase.database().ref("/").child(userName).update({
        purpose: "Adicionar o usuário" 
    })
};