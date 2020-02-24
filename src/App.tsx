import React from 'react'
import { connect } from 'react-redux'
import { Todo, StoreState } from './types/interfaces'
import { fetchTodos, deleteTodo } from './actions'
import { AppProps } from './types/interfaces'

class _App extends React.Component<AppProps, { fething: boolean }> {
  state = { fething: false }
  componentDidUpdate(prevProps: AppProps): void {
    if (!prevProps.todos.length && this.props.todos.length) {
      this.setState({ fething: false })
    }
  }

  renderList(): JSX.Element[] {
    return this.props.todos.map((todo: Todo) => {
      return <div onClick={() => this.props.deleteTodo(todo.id)} key={todo.id}>{todo.title}</div>
    })
  }

  render() {
    return (
      <div>
        <button
          onClick={() => {
            this.setState({ fething: true });
            this.props.fetchTodos()
          }}
        >发起请求</button>
        {this.state.fething ? '加载中...' : null}
        {this.renderList()}
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): StoreState => {
  return { todos }
}

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(_App)
