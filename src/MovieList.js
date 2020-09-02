import React, { useState } from 'react'

const MovieList = () => {
    const [movies, setMovies] = useState([
        {
            name: 'Nairobi Half Life',
            price: 'Ksh 20',
            id: 23
        },
        {
            name: 'Rafiki',
            price: 'Ksh 20',
            id: 25
        },
        {
            name: 'Makutano Junction',
            price: 'Ksh 20,000',
            id: 230
        },
    ])
    return (
        

        <div>
        {movies.map(movies => (
        <li>{movies.name}</li>
        ))}
        </div>

    )
}

export default MovieList
