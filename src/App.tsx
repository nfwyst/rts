import React from 'react'
import { connect } from 'react-redux'
import { Todo, StoreState } from './types/interfaces'
import { fetchTodos } from './actions'

class _App extends React.Component<{ todos: Todo[], fetchTodos(): any }> {
  render() {
    return (
      <div>
        <button onClick={this.props.fetchTodos}>发起请求</button>
      </div>
    )
  }
}

const mapStateToProps = ({ todos }: StoreState): StoreState => {
  return { todos }
}

export default connect(mapStateToProps, { fetchTodos })(_App)
