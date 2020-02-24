import { Todo } from './Todo'
import { deleteTodo } from '../../actions'

export interface AppProps {
  todos: Todo[],
  fetchTodos(): any,
  deleteTodo: typeof deleteTodo
}
