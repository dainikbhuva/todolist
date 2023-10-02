import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function List(props) {

  const [line, setLine] = useState(false);
  const cutIt = () => {
    setLine(true);
  }
  return (
    <div className='todo_list'>
      <span onClick={cutIt}> <DeleteIcon className='deleteicon' /> </span>
      <li style={{ textDecoration: line ? "line-through" : "none" }}> {props.text} </li>
    </div>
  )
}

export default List;
