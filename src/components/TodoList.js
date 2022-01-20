import React from 'react';
import Header from './Header';
import Footer from './Footer';
import { applyFilter } from '../service/filter';
import FilteredList from './FilteredList';

function TodoList(props) {
  const { title, items, addNew, filter, changeFilter, changeStatus } = props;
  const count = items.length;
  const filteredList = applyFilter(items, filter);

  return (
    <div>
      <div className="todolist">
        <Header title={title} addNew={addNew} />
        <FilteredList items={filteredList} changeStatus={changeStatus} />
        <Footer {...{ count, filter, changeFilter }} />
      </div>
    </div>
  );
}

export default TodoList;
