import { Todo } from '../types/interfaces'
import { ActionType } from '../types/enums'
import { Action } from '../types/'

export const todosReducer = (
  state: Todo[] = [],
  action: Action
): Todo[] => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload
    case ActionType.DELETE_TODO:
      return state.filter((todo: Todo) => todo.id !== action.payload)
    default:
      return state
  }
}
