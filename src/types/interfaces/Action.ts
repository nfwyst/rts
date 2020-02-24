import { ActionType } from '../enums'
import { Todo } from './Todo'

export interface FetchTodosAction {
  type: ActionType.FETCH_TODOS
  payload: Todo[]
}

export interface DeleteTodoAction {
  type: ActionType.DELETE_TODO,
  payload: number
}
