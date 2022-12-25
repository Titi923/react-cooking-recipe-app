import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBiGcdonf8JBezNjIyJKbYiJM2wli08pq0',
  authDomain: 'cookingapp-react-site.firebaseapp.com',
  projectId: 'cookingapp-react-site',
  storageBucket: 'cookingapp-react-site.appspot.com',
  messagingSenderId: '807451336813',
  appId: '1:807451336813:web:d6f222f2acff211eea5f64',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
