import { applyMiddleware, combineReducers, createStore } from 'redux'
import filmsReducer from './reducer'
import thunkMiddleware from "redux-thunk";

const reducers = combineReducers({
    films: filmsReducer
});

type rootReducer = typeof reducers;

type PropertiesType<T> = T extends { [key: string]: infer U } ? U : never;

export type InferActionsTypes<
    T extends { [key: string]: (...args: any[]) => any }
    > = ReturnType<PropertiesType<T>>;

export type RootState = ReturnType<rootReducer>;

const middlewares = [thunkMiddleware];

const store = createStore(
    reducers, applyMiddleware(...middlewares)
);


export default store