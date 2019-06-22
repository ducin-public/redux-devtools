import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from '../components/Header';
import MainSection from '../components/MainSection';
import * as TodoActions from '../actions/TodoActions';
import * as FilterActions from '../actions/FilterActions';

class TodoApp extends Component {
  render() {
    const { todos, actions, filter } = this.props;

    return (
      <div>
        <Header addTodo={actions.addTodo} />
        <MainSection todos={todos} actions={actions} filter={filter} />
      </div>
    );
  }
}

function mapState(state) {
  return {
    todos: state.todos,
    filter: state.filter
  };
}

function mapDispatch(dispatch) {
  return {
    actions: bindActionCreators({ ...TodoActions, ...FilterActions }, dispatch)
  };
}

export default connect(mapState, mapDispatch)(TodoApp);
