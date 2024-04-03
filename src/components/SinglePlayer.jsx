import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from 'react'

import { API_URL } from "../App.jsx"

const SinglePlayer = ({getRoster}) => {

  const [chosenPlayer, setChosenPlayer] = useState({});

  const {id} = useParams();

  const getPlayer = async () => {
    try {
      const response = await fetch(API_URL + '/players/' + id)
      const json = await response.json()
      setChosenPlayer(json.data.player);
      console.log(chosenPlayer);
    } catch (err) {
      console.log('error fetching single player', err)
    }
  }

  useEffect(() => {getPlayer()}, []);

  const deletePlayer = async () => {
    try {
      await fetch(API_URL + '/players/' + id, {method: 'DELETE'});
      getRoster();
    }
    catch (err) {console.log('error deleting player!', err)}
  }

  let team = '';
  if (!chosenPlayer.team) team = "Free Agent";
  else team = chosenPlayer.team;

  return(
    <div style={{display:'block'}} id='singlePlayerContainer'>
      <div>
        <img 
          src={chosenPlayer.imageUrl} 
          alt={`photo of ${chosenPlayer.name}`}
          style={{maxHeight:'500px'}}
        />
        <h1 style={{fontSize: '3rem', lineHeight: '1'}}>{chosenPlayer.name}</h1>
        <h2>{`Breed: ${chosenPlayer.breed}`}</h2>
        <h2>{`Team: ${team}`}</h2>
        <h3>{`Status: ${chosenPlayer.status}`}</h3>
      </div>
      <Link to='/'><button style={{fontWeight: '800'}}>Return to all players.</button></Link>
      <Link to='/'>
        <button 
          style={{backgroundColor: 'red', color: 'black', fontWeight: '800'}}
          onClick={() => {deletePlayer()}}
        >
          DELETE PLAYER
        </button>
      </Link>
    </div>
  )
}

export default SinglePlayer