import { createContext, useContext } from 'react'
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const authUserContext = createContext({
  authUser: null,
  loading: true,
  signIn_WithEmailAndPassword: async(email:string,password:string) => {},
  createUser_WithEmailAndPassword: async (email:string,password:string) => {},
  signOut_: async () => {}
});

export function AuthUserProvider({ children }:any) {
  const auth = useFirebaseAuth();
  return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}
// custom hook to use the authUserContext and access authUser and loading
export const useAuth = () => useContext(authUserContext);