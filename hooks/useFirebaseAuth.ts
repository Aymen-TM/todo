import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User } from 'firebase/auth';
import { useState, useEffect } from 'react'
import {auth} from '../firebase';


const formatAuthUser = (user:User) => ({
  uid: user.uid,
  email: user.email,
});

export default function useFirebaseAuth() {
  const [authUser, setAuthUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = async (authState:any) => {
    if (!authState) {
      setAuthUser(null)
      setLoading(false)
      return;
    }
    
    setLoading(true)
    let formattedUser = formatAuthUser(authState);
    setAuthUser(formattedUser);    
    setLoading(false);
  };


  const clear = () => {
    setAuthUser(null);
    setLoading(true);
  };

  function signIn_WithEmailAndPassword(email:string, password:string){
    return signInWithEmailAndPassword(auth,email,password)
  }

   function createUser_WithEmailAndPassword(email:string, password:string){
   return createUserWithEmailAndPassword(auth, email, password);
    
  }

  function signOut_(){
    return signOut(auth).then(clear)
  }


  // listen for Firebase state change
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authStateChanged)
    return () => unsubscribe();
  }, []);
 
   

  return {
    authUser,
    loading,
    signIn_WithEmailAndPassword,
    createUser_WithEmailAndPassword,
    signOut_
  };
}