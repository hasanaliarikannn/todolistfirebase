import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCI8OWLuUV9Vbq4Vh7VKth50NXxhCMg3Jk",
  authDomain: "fir-todo-app-fa725.firebaseapp.com",
  projectId: "fir-todo-app-fa725",
  storageBucket: "fir-todo-app-fa725.appspot.com",
  messagingSenderId: "338952782525",
  appId: "1:338952782525:web:77629d4573479912abedd4",
  measurementId: "G-1ZN31GWT2Y"
});

const database = firebaseApp.firestore();

export default database;
