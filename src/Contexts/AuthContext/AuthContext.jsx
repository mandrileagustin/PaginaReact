import { useContext } from "react";
import { createContext, useState} from "react";
import MY_AUTH_APP from "../../../const/const";


const AuthContext = createContext({
    authorization:null,
    login: () => {},
    logout: () => {},
    errorMessage:null
});

export default AuthContext;

export  function AuthContextProvider({children})    {

    const [authorization, setAuthorization] = useState(window.localStorage.getItem(MY_AUTH_APP) ?? null)
    const [errorMessage, setErrorMessage] = useState(null)

    async function login (e, userData)   {
        e.preventDefault();

       const response = await fetch("http://localhost:3000/user/login",{
            method:"POST",
            headers:{"Content-type":"application/json"},
            body: JSON.stringify(userData)
          })
          if (response.status === 200) {
            
            const token = await response.json();
            console.log(token);
            setAuthorization(token.jwt);
            window.localStorage.setItem(MY_AUTH_APP, token.jwt)
          } else {
            setErrorMessage("Email o password incorrectos");
          }
        }
    
        async function registrer (e, userData)   {
          e.preventDefault();
  
         const response = await fetch("http://localhost:3000/user",{
              method:"POST",
              headers:{"Content-type":"application/json"},
              body: JSON.stringify(userData)
            })
            if (response.status === 200) {
              
              const token = await response.json();
              console.log(token);
              setAuthorization(token.jwt);
              window.localStorage.setItem(MY_AUTH_APP, token.jwt)
            } else {
              setErrorMessage("Email o password incorrectos");
            }
          }
  
    function logout(){
      window.localStorage.removeItem(MY_AUTH_APP)
        setAuthorization(null)
    }
   
    const value = {
        authorization,
        errorMessage,
        login,
        logout,
        registrer
    }
 console.log(authorization)
    return(
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider> 
    )
}

export function useAuthContext()   {
    return useContext(AuthContext);
}