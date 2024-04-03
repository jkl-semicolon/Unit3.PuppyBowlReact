import { useState, useEffect } from 'react'
import { API_URL } from '../App.jsx'
import IndPlayer from './IndPlayer.jsx';
import AddPlayerForm from './AddPlayerForm.jsx';

export const getRoster = async (setRoster) => {
  try {
    const response = await fetch(API_URL + '/players');
    const json = await response.json();
    setRoster(json.data.players);
  } catch (err) {
    console.log('roster fetch error:', err)
  }
}

const AllPlayers = () => {

  const [roster, setRoster] = useState([]);

  useEffect(() => {getRoster(setRoster)}, []);

  return (
    <>
      <AddPlayerForm/>
      {roster.map((player) => {
        return <IndPlayer key={player.id} player={player}/>  
      })}
    </>
  )
}

export default AllPlayers