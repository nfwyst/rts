import axios from 'axios'
import { Dispatch } from 'redux'
import { Todo } from '../types/interfaces'
import { ActionType } from '../types/enums'
import { FetchTodosAction, DeleteTodoAction } from '../types/interfaces'

export const fetchTodos = () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  return async (dispatch: Dispatch) => {
    const response = await axios.get<Todo[]>(url)
    dispatch<FetchTodosAction>({
      type: ActionType.FETCH_TODOS,
      payload: response.data
    })
  }
}

export const deleteTodo = (id: number): DeleteTodoAction => {
  return {
    type: ActionType.DELETE_TODO,
    payload: id
  }
}
