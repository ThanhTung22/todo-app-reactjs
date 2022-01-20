import React from 'react';
import CheckBox from './Checkbox';

function TodoItem(props) {
  const { data, changeStatus } = props;
  const handleChange = (checked) => changeStatus(data.id, checked)

  return (
    <li className="ui-state-default">
      <label className='checkbox'>
        <CheckBox checked={data.completed} onChange={handleChange} /> {data.text}
      </label>
    </li>
  );
}

export default TodoItem;
