import React, { useState } from 'react';
import './index.css';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import List from './List';

const Todolist = () => {

  const [item, setItem] = useState('');
  const [newItem, setNewItem] = useState([]);

  const inp = (event) => {
    setItem(event.target.value);
  };

  const add = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  };

  return (
    <>
      <div className='main_div'>
        <div className='center_div'>
          <h1> ToDo List </h1>
          <input type='text' value={item} placeholder='Add item' onChange={inp} />
          <Button onClick={add} className='newBtn'>
            <AddIcon />
          </Button>
          <ol>
            {newItem.map((val, index) => {
              return <List key={index} text={val} />
            })}
          </ol>
        </div>
      </div>
    </>
  )
}

export default Todolist;
