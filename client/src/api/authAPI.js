import request from "../utils/request";

export const useLogin = () =>{
    
    const baseUrl = 'http://localhost:3030/users';

    const login =async (email, password) =>{
        const result = await request.post(`${baseUrl}/login`, {email, password});

        return result;
    }

    return {
        login,
    }
}