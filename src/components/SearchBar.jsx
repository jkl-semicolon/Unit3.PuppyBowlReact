import { useState, useEffect } from 'react'

const SearchBar = ({setDisplayRoster, roster}) => {

  const filtering = (event) => {
    const filteredRoster = roster.filter((player) => {
      return player.name.toLowerCase().includes(event.target.value.toLowerCase())
    })
    setDisplayRoster(filteredRoster);
  }

  return (
    <form>
        <label style={{fontSize: 'large'}} htmlFor='filter'>Filter:</label>
        <input 
          type='text' placeholder='filter' id='filter' 
          onChange={filtering}
        />
    </form>
  )
}

export default SearchBar