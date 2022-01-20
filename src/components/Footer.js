import React from 'react';
import Filter from './Filter';

function Footer(props) {
  const { count, filter, changeFilter } = props;

  return (
    <div className="todo-footer clearfix">
      <div className='float-start'>
        <strong className="count-todos">{count}</strong>
        {' items left'}
      </div>
      <div className='float-end'>
        <Filter filter={filter} change={changeFilter} />
      </div>
    </div>
  );
}

export default Footer;
