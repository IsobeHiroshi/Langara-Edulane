//---------- Firebase configuration starts from here
import * as firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyAK10RzRApaDyJZfrs4NN-YSxaQvRZyOxg",
  authDomain: "langara-edulane.firebaseapp.com",
  projectId: "langara-edulane",
  storageBucket: "langara-edulane.appspot.com",
  messagingSenderId: "163537109728",
  appId: "1:163537109728:web:76f7da334d591276b08685",
  measurementId: "G-5125DLL6BZ"
};
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//---------- Firebase configuration ends here

alert('Hello Langara Edulane');