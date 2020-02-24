import { combineReducers } from 'redux'
import { todosReducer } from './todos'
import { StoreState } from '../types/interfaces'

export const reducers = combineReducers<StoreState>({
  todos: todosReducer
})
