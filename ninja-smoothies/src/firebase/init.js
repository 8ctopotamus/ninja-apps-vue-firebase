import firebase from 'firebase'
import firestore from 'firebase/firestore'

var config = {
  // your firebase config
};

const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

// export firestore database
export default firebaseApp.firestore()
