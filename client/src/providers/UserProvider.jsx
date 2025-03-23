import { UserContext } from "../contexts/UserContext";
import usePersistedState from "../hooks/usePersistedState";


export function UserProvider({
    children,
}){
    const [authData, setAthData] = usePersistedState('auth',{});
    
      const useLoginHandler  = (resultData) =>{
        setAthData(resultData);
      }
    
      const userLogoutHandler = () =>{
        setAthData({});
      }

    return(
        
        <UserContext.Provider value={{...authData, useLoginHandler, userLogoutHandler}}>
            {children}
        </UserContext.Provider>    
        
    )
}