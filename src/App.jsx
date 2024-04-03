import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'

export const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'

function App() {

  const [roster, setRoster] = useState([]);

  const getRoster = async () => {
    try {
      const response = await fetch(API_URL + '/players');
      const json = await response.json();
      setRoster(json.data.players);
    } catch (err) {
      console.log('roster fetch error:', err)
    }
  }

  return (
    <>
      <div id='titleContainer'>
        <h1 id='title'>🐕🐕🐕 PUPPY BOWL COMMENCES 🐕🐕🐕</h1>
      </div>
      <div id='rootroot'>
        <Routes>
          <Route path='/' element={<AllPlayers getRoster={getRoster} roster={roster}/>}/>
          <Route path='/playerId/:id' element={<SinglePlayer getRoster={getRoster}/>}/>
        </Routes>
      </div>
    </>
  )
}
export default App
