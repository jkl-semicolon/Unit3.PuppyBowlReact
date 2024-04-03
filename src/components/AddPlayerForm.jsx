import { useState } from 'react'

import { API_URL } from "../App"

const AddPlayerForm = ({getRoster}) => {

  const [name, setName] = useState('');
  const [breed, setBreed] = useState('');
  const [status, setStatus] = useState('field');
  const [imageUrl, setImageUrl] = useState('');
  const [teamId, setTeamId] = useState(57);

  const addPlayer = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(API_URL + '/players', {
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
    <form onSubmit={(event) => {addPlayer(event)}}>
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
        <p>Status:</p>
        <input 
          type='radio' id='field' name='status' value='field'
          onChange={(event) => {setStatus(event.target.value)}}
        />
        <label htmlFor='field'>Field</label>
        <input 
          type='radio' id='bench' name='status' value='bench' 
          onChange={(event) => {setStatus(event.target.value)}}
        />
        <label htmlFor='bench'>Bench</label>
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