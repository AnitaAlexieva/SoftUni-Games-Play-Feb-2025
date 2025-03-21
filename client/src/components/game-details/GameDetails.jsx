import { useContext, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router"
import gameServices from "../../services/gameServices";
import CommentsShow from "../comments-show/CommentsShow";
import CommentsCreate from "../comments-create/ComentsCreate";
import commentsService from "../../services/commentsService";
import { UserContext } from "../../contexts/UserContext";
import { useGame } from "../../api/gameApi";

export default function GameDetails() {
    const navigate = useNavigate();
    const {email} = useContext(UserContext);
    
    const [comments, setComments] = useState([]);
    const {gameId} = useParams();
    const {game} = useGame(gameId)

    useEffect(() =>{
          commentsService.getAll(gameId)
                .then(setComments)     
    },[gameId])

    const gameDeleteClickHnadler = async() =>{
        const hasConfirmed = confirm(`Are you sure you want to delete ${game.title} game?`);
        if(!hasConfirmed){
            return;
        }

        await gameServices.deleteOne(gameId);

        navigate('/games');
    }
    const commentsCreateHandler = (newCooment) =>{
        setComments(state => [...state, newCooment])
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
    
            <CommentsShow comments={comments} />

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
    
            <CommentsCreate 
            email={email} 
            gameId={gameId}
            onCreate={commentsCreateHandler}
            />
    </section>
    
    )
}