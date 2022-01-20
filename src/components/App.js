import React, { Component } from 'react';
import { FILTER_ACTIVE } from '../service/filter';
import { addToList, getAll, updateStatus } from '../service/todo';
import TodoList from './TodoList';
class App extends Component {
  constructor() {
    super();
    this.state = {
      filter: FILTER_ACTIVE,
      items: getAll()
    }
  }


  render() {
    let title = 'Things to do';

    return (
      <div className="container">
        <div className="row">
          <TodoList title={title}
            addNew={this.addNew.bind(this)}
            changeFilter={this.changeFilter.bind(this)}
            changeStatus={this.changeStatus.bind(this)}
            {...this.state} />
        </div>
      </div>
    );
  }

  addNew(text) {
    let updateList = addToList(this.state.items, { text, completed: false });

    this.setState({ items: updateList })
  }

  changeFilter(filter) {
    this.setState({ filter });
  }

  changeStatus(itemId, completed) {
    const updateList = updateStatus(this.state.items, itemId, completed);

    this.setState({ items: updateList });
  }
}

export default App;
