import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyB2I8GhOuOCqFAFlYW4AYVoRYNigesSShA",
    authDomain: "crwn-db-6a8b9.firebaseapp.com",
    databaseURL: "https://crwn-db-6a8b9.firebaseio.com",
    projectId: "crwn-db-6a8b9",
    storageBucket: "crwn-db-6a8b9.appspot.com",
    messagingSenderId: "574611911295",
    appId: "1:574611911295:web:f3a1f818efe3c3d184c54a",
    measurementId: "G-FBNJDZJ6S9"
  };
  
  export const createUserProfileDocument = async(userAuth, additionalData) =>{
        if(!userAuth) return;

       const userRef = firestore.doc(`users/${userAuth.uid}`);
       
       const snapShot = await userRef.get();

       if(!snapShot.exists){
             const { displayName, email} = userAuth;
             const createdAt = new Date();
             
             try{
                  await userRef.set({
                  displayName,
                  email,
                  createdAt,
                ...additionalData
            })
            }catch(error){
            console.log("errror:", error.message );
                   }  
                     }
            return userRef;
       
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore =  firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: "select_account"});

  export const SignInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase; 