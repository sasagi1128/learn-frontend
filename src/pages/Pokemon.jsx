import { useState, useEffect } from 'react'

function Pokemon() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
      .then(res => res.json())
      .then(data => {
        setPokemon(data.results)
        setLoading(false)
      })
  }, [])

  if (loading) return <p style={{ padding: '2rem' }}>Loading...</p>

  return (
    <div className="page">
      <h1>Pokemon List</h1>
      <p>Fetched from PokeAPI using useEffect and fetch()</p>
      <div className="pokemon-grid">
        {pokemon.map(p => (
          <div key={p.name} className="pokemon-card">
            {p.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pokemon