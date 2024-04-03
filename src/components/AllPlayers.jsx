import { useState, useEffect } from 'react'
import IndPlayer from './IndPlayer.jsx';
import AddPlayerForm from './AddPlayerForm.jsx';
import SearchBar from './SearchBar.jsx'

const AllPlayers = ({getRoster, roster}) => {

  const [displayRoster, setDisplayRoster] = useState([]);

  useEffect(() => {getRoster()}, []);
  useEffect(() => {setDisplayRoster(roster)}, [roster])

  return (
    <>
      <div>
        <AddPlayerForm getRoster={getRoster}/>
        <SearchBar setDisplayRoster={setDisplayRoster} roster={roster}/>
      </div>
      {displayRoster.map((player) => {
        return <IndPlayer key={player.id} player={player}/>  
      })}
    </>
  )
}

export default AllPlayers