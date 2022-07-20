import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Movie } from './Movie'
import preloader from '../../preloader.gif'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/redux'
import { useDispatch } from 'react-redux'
import { filmsActions, getFilmsThunk, searchFilmsThunk } from '../../redux/reducer'
import { FilmType } from '../../types/types'

export const MainPage = () => {
    const films = useSelector((state: RootState) => state.films.films)
    const page = useSelector((state: RootState) => state.films.page)
    const isLoading = useSelector((state: RootState) => state.films.isLoading)
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState<string>('')
    const searchedFilms = useSelector((state: RootState) => state.films.searchedFilms)

    const scrollHandler = (e: any) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 200 && !isLoading) {
            return dispatch(filmsActions.setIsLoading());
        }
    }

    const clearSearch = () => {
        setSearchValue("")
        dispatch(filmsActions.clearSearched())
    }
    const searchFilms = async () => {
        dispatch(filmsActions.clearSearched())
        dispatch(searchFilmsThunk(searchValue))
    }

    useEffect(() => {
        if (isLoading || page === 1) {
            dispatch(getFilmsThunk(page))
        }
    }, [isLoading])

    useEffect(() => {
        document.addEventListener("scroll", scrollHandler)
        return () => document.removeEventListener("scroll", scrollHandler)
    }, [])


    return (
        <div>
            <h1>Home</h1>
            <div className="search"><h2>Search:</h2>
                <input type="text" value={searchValue} onChange={(e: React.FormEvent<HTMLInputElement>) => setSearchValue(e.currentTarget.value)} />
                <button style={{ margin: "0px 10px" }} onClick={() => clearSearch()}>clear</button>
                <button onClick={() => searchFilms()} disabled={searchValue.length < 3}>search</button>
            </div>
            {searchedFilms.length >= 1 ? <h1>Search result: {searchedFilms.length}</h1> : null}
            <div className='movies'>
                {searchedFilms?.map((item: FilmType, key: number) => {
                    return (
                        <Movie key={item.id + key} item={item} />
                    )
                })}
            </div>
            <h1> Our Films</h1>
            <div className="movies">
                {films?.map((item: FilmType, key: number) => {
                    return (
                        <Movie key={item.id + key} item={item} />
                    )
                })}
            </div>
            {isLoading ? <img src={preloader} alt="preloader" style={{ marginBottom: "20px" }} /> : null}
        </div>
    )
}
