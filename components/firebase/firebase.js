import * as firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAc-Nd09N643B9wfrKbBg520m3qakWABpc",
    authDomain: "codetrain-contacts.firebaseapp.com",
    projectId: "codetrain-contacts",
    storageBucket: "codetrain-contacts.appspot.com",
    messagingSenderId: "762161880332",
    appId: "1:762161880332:web:8faee8a3cafbd46720fd29"
  };


  firebase.initializeApp(firebaseConfig);

  export default firebase;