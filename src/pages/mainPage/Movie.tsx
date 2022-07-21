import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { ReadMore } from '../../ReadMore';
import { FilmType } from '../../types/types';

export const Movie = ({ item }: { item: FilmType }) => {

    const [favourites, setFavourites] = useState<Array<number>>([])

    const addToFavourites = () => {
        setFavourites([...favourites, item.id])
        localStorage.setItem("favouriteFilms", JSON.stringify([...JSON.parse(localStorage.getItem("favouriteFilms") ?? ""), item]))
        return toast.success("Film has been added to favourites")
    }
    const removeFromFavourites = () => {
        let newFavourites = JSON.parse(localStorage.getItem("favouriteFilms") ?? "{}").filter((fav: FilmType) => fav.id !== item.id)
        localStorage.setItem("favouriteFilms", JSON.stringify(newFavourites))
        setFavourites(newFavourites.map((fav: FilmType) => fav.id))
        return toast.success("Film has been removed from favourites")
    }

    useEffect(() => {
        let storageFavourites = localStorage.getItem("favouriteFilms") !== null ? JSON.parse(localStorage.getItem("favouriteFilms") ?? "") : []
        setFavourites(storageFavourites?.map((item: FilmType) => item.id))
    }, [])

    return (
        <div className='movie'>
            <img src={item.medium_cover_image} alt="coverImage" className='movie__column' />
            <div>
                <div className='movie__title'>
                    <h3 className='movie__title'>{item.title}</h3>
                    <h5 className='movie__year'>{item.year}</h5>
                    <ul className='movie__genres'>
                        {item?.genres?.map((genre: string, key: number) => {
                            return <li className='genres__genre' key={"genre" + key}>{genre}</li>
                        })}
                    </ul>
                </div>
                <ReadMore text={item.summary} />
                {favourites?.find((id) => id === item.id)
                    ? (<button onClick={() => removeFromFavourites()}>Remove from favourites</button>)
                    : (<button onClick={() => addToFavourites()}>Add to favourites</button>)
                }
            </div>
        </div >
    )
}
