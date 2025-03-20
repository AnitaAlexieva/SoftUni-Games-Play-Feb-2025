import { useContext, useEffect, useRef } from "react";
import request from "../utils/request";
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/users';

export const useLogin = () =>{
    const abortRef = useRef( new AbortController());
    
    const login =async (email, password) =>{
        const result = await request.post(`${baseUrl}/login`, {email, password}, {signal: abortRef.current.signal});
        
        return result;
    }
    
    useEffect(()=>{
        const abortController = abortRef.current;

        return () => abortController.abort();
    }, []);
    return {
        login,
    }
}
export const useRegister = () => {
    const register = async (email, password) => {
        return await request.post(`${baseUrl}/register`, { email, password });
    };

    return { register };
};
export const useLogout = () =>{

    const {accessToken,userLogoutHandler} = useContext(UserContext)

    useEffect(() =>{
        if(!accessToken){
            return;
        }

        const options = {
            headers:{
                'X-Authorization': accessToken,
            }
        }
        request.get(`${baseUrl}/logout`, null, options) 
            .then(userLogoutHandler)

    }, [accessToken]);

    return {
        isLoggedOut: !!accessToken,
    }
}