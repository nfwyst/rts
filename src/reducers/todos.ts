import { Todo, FetchTodosAction } from '../types/interfaces'
import { ActionType } from '../types/enums'

export const todosReducer = (
  state: Todo[] = [],
  action: FetchTodosAction
): Todo[] => {
  switch (action.type) {
    case ActionType.FETCH_TODOS:
      return action.payload
    default:
      return state
  }
}
