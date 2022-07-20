import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Movie } from '../mainPage/Movie'
import { FilmType } from '../../types/types'

export const Favourites = () => {
    const [films, setFilms] = useState<Array<FilmType>>([])

    useEffect(() => {
        setFilms(JSON.parse(localStorage.getItem("favouriteFilms") ?? ""))
    }, [])

    return (
        <div>
            <h1>Favourites</h1>
            <div className="movies">
                {films?.map((item: FilmType, key: number) => {
                    return (
                        <Movie key={item.id} item={item} />
                    )
                })}
            </div>
        </div>
    )
}
