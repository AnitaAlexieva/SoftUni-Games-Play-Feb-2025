import { Routes, Route } from 'react-router'

import Header from './components/header/header'
import Home from './components/home/Home'
import './App.css'
import Login from './components/login/Login'
import Register from './components/register/Register'
import GameCatalog from './components/game-catalog/GameCatalog'
import GameCreate from './components/game-create/GameCreate'
import GameDetails from './components/game-details/GameDetails'
import GameEdit from './components/game-edit/GameEdit'
import Logout from './components/logout/Logout'
import { UserProvider } from './providers/UserProvider'

function App() {
  
  return (

    <UserProvider>
      <div id="box">
          <Header/>
      
          <main id="main-content">
              <Routes>
                  <Route index element={<Home/>} />
                  <Route path='/games' element={<GameCatalog/>} />
                  <Route path='/register' element={<Register/>} />
              </Routes>
          </main>

      </div>
    </UserProvider>

   
  )
}

export default App
