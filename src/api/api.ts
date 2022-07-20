import axios from "axios";

export const getFilms = (page: number) => {
    return axios.get(`https://yts.torrentbay.to/api/v2/list_movies.json?limit=10&page=${page}`).then(res => {
        return res.data.data.movies
    })
}

export const searchFilms = (name: string) => {
    return axios.get(`https://yts.torrentbay.to/api/v2/list_movies.json?query_term=${name}`).then(res => {
        return res.data.data.movies
    })
}

