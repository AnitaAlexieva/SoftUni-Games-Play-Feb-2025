import { Routes, Route } from 'react-router'
import { UserContext } from './contexts/UserContext'

import Header from './components/header/header'
import Home from './components/home/Home'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'
import { useState } from 'react'

function App() {
  const [authData, setAthData] = useState({});

  const useLoginHandler  = (resultData) =>{
    setAthData(resultData);
  }

  return (

    <UserContext.Provider value={{...authData, useLoginHandler}}>

    <div id="box">
        <Header/>

        <main id="main-content">
            <Routes>
                <Route index element={<Home/>} />
                <Route path='/games' element={<GameCatalog/>} />
                <Route path='/games/:gameId/details' element={<GameDetails />}/>
                <Route path='/games/create' element={<GameCreate/>} />
                <Route path='/games/:gameId/edit' element={<GameEdit/>}/>
                <Route path='/login' element={<Login/>} />
                <Route path='/register' element={<Register/>} />
            </Routes>
        </main>

    </div>
    </UserContext.Provider>
  )
}

export default App
