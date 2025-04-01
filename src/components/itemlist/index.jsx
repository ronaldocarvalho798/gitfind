import React from 'react';
import './styles.css';

function ItemList({title, description,hf}) {
  return (
    <div className='item-list'>
        <a href={hf} target='blank'>{title}</a>
        <p>{description}</p>
        <hr></hr>
    </div>
  )
}

export default ItemList;
