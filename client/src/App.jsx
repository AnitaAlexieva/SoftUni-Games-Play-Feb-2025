import Header from './components/header/header'
import Home from './components/home/Home'

import './App.css'

function App() {

  return (
    <div id="box">
       
       <Header/>
       {/* <!-- Main Content --> */}
      <main id="main-content">
          <Home/>
      </main>

    </div>
  )
}

export default App
