import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import gameServices from "../../services/gameServices";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsCreate from "../comments-create/ComentsCreate";

export default function GameDetails({
    email,
}) {
    const navigate = useNavigate();
    const [game, setGame] = useState({});
    const {gameId} = useParams();
    useEffect(() =>{
        (async () =>{
            const result = await gameServices.getOne(gameId);
            setGame(result)
        })();
    },[gameId])

    const gameDeleteClickHnadler = async() =>{
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title} game?`);
        if(!hasConfirmed){
            return;
        }

        await gameServices.deleteOne(gameId);

        navigate('/games');
    }
    return(
        <section id="game-details">
        <h1>Game Details</h1>
        <div className="info-section">
    
            <div className="game-header">
                <img className="game-img" src={game.imageUrl} />
                <h1>{game.title}</h1>
                <span className="levels">MaxLevel: {game.maxLevel}</span>
                <p className="type">{game.category}</p>
            </div>
    
            <p className="text">
                {game.summary}
            </p>
    
            <CommentsShow/>

            {/* <!-- Edit/Delete buttons ( Only or creator of this game )  --> */}
            <div className="buttons">
                <Link to={`/games/${gameId}/edit`} className="button">Edit</Link>

                <button 
                    onClick={gameDeleteClickHnadler}
                    className="button"
                >
                    Delete
                </button>

            </div>
        </div>
    
            <CommentsCreate email={email}/>
    </section>
    
    )
}