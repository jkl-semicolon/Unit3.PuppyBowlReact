import { Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import './App.css'
import AllPlayers from './components/AllPlayers.jsx'
import SinglePlayer from './components/SinglePlayer.jsx'

export const API_URL = 'https://fsa-puppy-bowl.herokuapp.com/api/2402-FTB-ET-WEB-FT'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<AllPlayers/>}/>
      <Route path='/playerId/:id' element={<SinglePlayer/>}/>
    </Routes>
    </>
  )
}
export default App
