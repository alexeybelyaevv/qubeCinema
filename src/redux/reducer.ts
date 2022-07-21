import { getFilms, searchFilms } from './../api/api';
import { ThunkAction } from "redux-thunk";
import { InferActionsTypes, RootState } from "./redux";
import { Dispatch } from 'redux';
import { FilmType } from '../types/types';

const initialState = {
    films: [] as Array<FilmType>,
    searchedFilms: [] as Array<FilmType>,
    isLoading: false,
    page: 1 as number,
    favorites: [] as Array<FilmType>
};

const reducer = (
    state = initialState,
    action: { type: string, payload: any }
): InitialStateType => {
    switch (action.type) {
        case "SET_IS_LOADING":
            return {
                ...state,
                isLoading: true
            }
        case "SET_ISNT_LOADING":
            return {
                ...state,
                isLoading: false
            }
        case "SET_FILMS":
            return {
                ...state,
                films: [...state.films, ...action.payload]
            }

        case "SET_FAVORITES":
            return {
                ...state,
                favorites: action.payload
            }
        case "SET_SEARCHED_FILMS":
            return {
                ...state,
                searchedFilms: [...state.searchedFilms, ...action.payload]
            }
        case "CLEAR_SEARCHED":
            return {
                ...state,
                searchedFilms: []
            }

        case "SET_PAGE": {
            return {
                ...state,
                page: action.payload
            }
        }
        default:
            return state;
    }
};
export const filmsActions = {
    setIsLoading: () => {
        return {
            type: "SET_IS_LOADING",
        }
    },
    setIsntLoading: () => {
        return {
            type: "SET_ISNT_LOADING",
        }
    },
    setFavorites: (favorites: Array<FilmType>) => {
        return {
            type: "SET_FAVORITES",
            payload: favorites
        }
    },
    setFilms: (
        films: Array<any>
    ) => {
        return {
            type: "SET_FILMS",
            payload: films
        };
    },
    clearSearched: () => {
        return {
            type: "CLEAR_SEARCHED"
        }
    },
    setPage: (page: number
    ) => {
        debugger
        return {
            type: "SET_PAGE",
            payload: page
        };
    },
    setSearchedFilms: (
        films: Array<any>
    ) => {
        return {
            type: "SET_SEARCHED_FILMS",
            payload: films
        };
    },
};

export const getFilmsThunk = (page: number): any => async (dispatch: DispatchType) => {
    dispatch(filmsActions.setIsLoading())
    dispatch(filmsActions.setPage(page + 1))
    const films = await getFilms(page)
    dispatch(filmsActions.setFilms(films))
    dispatch(filmsActions.setIsntLoading())
}

export const searchFilmsThunk = (text: string): any => async (dispatch: DispatchType) => {
    dispatch(filmsActions.setIsLoading())
    const films = await searchFilms(text)
    dispatch(filmsActions.setSearchedFilms(films))
    dispatch(filmsActions.setIsntLoading())
}


//  Types

type AllActionsType = InferActionsTypes<typeof filmsActions>;

type DispatchType = Dispatch<AllActionsType>;

export type InitialStateType = typeof initialState;

type Thunk = ThunkAction<Promise<void>, RootState, unknown, AllActionsType>;

export default reducer;
