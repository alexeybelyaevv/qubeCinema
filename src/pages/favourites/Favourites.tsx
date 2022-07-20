import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Movie } from '../mainPage/Movie'

export const Favourites = () => {
    const [films, setFilms] = useState<Array<any>>([])

    useEffect(() => {
        setFilms(JSON.parse(localStorage.getItem("favouriteFilms") ?? ""))
    }, [])

    console.log(films);
    debugger



    return (
        <div>
            <h1>Favourites</h1>
            <div className="movies">
                {films?.map((item: any, key: number) => {
                    return (
                        <Movie key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
