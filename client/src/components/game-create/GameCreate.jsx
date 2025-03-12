import gameServices from "../../services/gameServices";
//useNavigate is a hook
import { useNavigate } from "react-router";

export default function GameCreate() {
    const navigate = useNavigate();

    const submitAction =async (formData) =>{
        const gameData = Object.fromEntries(formData);

        await gameServices.create(gameData);

        navigate('/games');
    }
    return(
        <section id="create-page" className="auth">
        <form id="create" action={submitAction}>
            <div className="container">
    
                <h1>Create Game</h1>
                <label or="leg-title">Legendary title:</label>
                <input type="text" id="title" name="title" placeholder="Enter game title..."/>
    
                <label or="category">Category:</label>
                <input type="text" id="category" name="category" placeholder="Enter game category..."/>
    
                <label or="levels">MaxLevel:</label>
                <input type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1"/>
    
                <label or="game-img">Image:</label>
                <input type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..."/>
    
                <label or="summary">Summary:</label>
                <textarea name="summary" id="summary"></textarea>
                <input className="btn submit" type="submit" value="Create Game"/>
            </div>
        </form>
    </section>
    )
}