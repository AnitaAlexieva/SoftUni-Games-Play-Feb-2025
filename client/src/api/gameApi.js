import { useContext, useEffect, useState } from "react";
import request from "../utils/request"; 
import { UserContext } from "../contexts/UserContext";

const baseUrl = 'http://localhost:3030/data/games';

export default {

    getOne(gameId) {
        return request.get(`${baseUrl}/${gameId}`);  
    },
  
    deleteOne(gameId){
        return request.delete(`${baseUrl}/${gameId}`);
    },
    edit(gameId, gameData){
        return request.put(`${baseUrl}/${gameId}`, {...gameData,_id: gameId});
    }
};

export const useGames = () =>{
    const [games, setGames] = useState([]);

    useEffect(() =>{
            //Правим заявка към басик юрл за взимане на данни
            request.get(baseUrl)
            //след като отговора пристигне го сетваш в games
                .then(setGames)
    },[])

    return {games};
}

export const useCreateGame = () =>{
    const {accessToken} = useContext(UserContext);

    const options = {
        headers:{
            'X-Authorization':accessToken,
        }
    }
    const create = (gameData) =>
        request.post(baseUrl, gameData,options);

        return{
            create
        }
    
}

export const useGame = (gameId) =>{
    const [game, setGame] = useState({});

    useEffect(() =>{
        request.get(`${baseUrl}/${gameId}`)
            .then(setGame);
    }, [gameId])

    return{game}
}