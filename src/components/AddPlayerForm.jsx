import { useState } from 'react'

import { API_URL } from "../App"

const AddPlayerForm = ({getRoster}) => {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('field');
  const [imageUrl, setImageUrl] = useState('');
  const [teamId, setTeamId] = useState(null);

  const addPlayer = async (event) => {
    event.preventDefault();
    try {
      await fetch(API_URL + '/players', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name, breed, status, imageUrl, teamId
        })
      })
      await getRoster();
    } catch (err) {
      console.log('error adding new player', err)
    }
  }

  return (
    <form id='addPlayer' onSubmit={(event) => {addPlayer(event)}}>
      <h2>Add a Player!</h2>
      <div>
        <label htmlFor='name'>Name:</label>
        <input 
          type='text' placeholder='Name' id='name' 
          onChange={(event) => {setName(event.target.value)}}
        />
      </div>
      <div>
        <label htmlFor='breed'>Breed:</label>
        <input 
          type='text' placeholder='Breed' id='breed' 
          onChange={(event) => {setBreed(event.target.value)}}
        />
      </div>
      <div>
        <p style={{display: 'inline-block', margin: '0', float: 'left'}}>Status:</p>
        <div style={{display:'inline'}}>
          <input 
            type='radio' id='field' name='status' value='field'
            onChange={(event) => {setStatus(event.target.value)}}
            style={{float:'none'}}
          />
          <label htmlFor='field' style={{float:'none'}}>Field</label>
        </div>
        <div style={{display:'inline'}}>
          <input 
            type='radio' id='bench' name='status' value='bench' 
            onChange={(event) => {setStatus(event.target.value)}}
            style={{float:'none'}}
          />
          <label htmlFor='bench' style={{float:'none'}}>Bench</label>
        </div>
      </div>
      <div>
        <label htmlFor='imageUrl'>Image URL:</label>
        <input 
          type='url' placeholder='image url' id='imageUrl' 
          onChange={(event) => {setImageUrl(event.target.value)}}
        />
      </div>
      <div>
        <label htmlFor='teamId'>Team ID:</label>
        <input 
          type='number' placeholder='Team ID' id='teamId' 
          onChange={(event) => {setTeamId(event.target.value)}}
        />
      </div>
      <div>
        <button type='submit'>Submit</button>
      </div>
    </form>
  )
}

export default AddPlayerForm