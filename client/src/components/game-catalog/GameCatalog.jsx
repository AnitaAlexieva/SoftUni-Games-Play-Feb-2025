import { useEffect, useState } from "react"
import gameServices from "../../services/gameServices"
import GameCatalogItem from "./game-catalog-item/GameCatalogItem";


export default function GameCatalog() {
    const [games, setGames] = useState([]);    

    useEffect(()=>{
            gameServices.getAll()
                .then(setGames)
            //Когато резултатът пристигне подай директно на setGames    
    },[])
    console.log(games);

    return(
        <section id="catalog-page">
        <h1>All Games</h1>
        {games.map(game => <GameCatalogItem key={game._id} {...game} />)}

        <div className="allGames">
            <div className="allGames-info">
                <img src="/images/avatar-1.jpg"/>
                <h6>Action</h6>
                <h2>Cover Fire</h2>
                <a href="#" className="details-button">Details</a>
            </div>
    
        </div>
    
        {/* <!-- Display paragraph: If there is no games  --> */}
        <h3 className="no-articles">No articles yet</h3>
    </section>
    
    )
}