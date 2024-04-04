import { Link } from 'react-router-dom'

const IndPlayer = ({player}) => {

  return (
    <Link to={`/playerId/${player.id}`}>
      <h2 style={{marginLeft: '10px', marginRight: '10px'}}>{player.name}</h2>
      <img src={player.imageUrl} alt={`photo of ${player.name}`}/>
    </Link>
  )
}

export default IndPlayer