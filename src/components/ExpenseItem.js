import React from 'react';
import Trydate from './Trydate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  // const fn = (date) => {
  //   console.log(date);
  //   return (

  //   );
  // };

  return (
    <div className='expense-item'>
      <div>
        <Trydate date={props.date} />
      </div>
      <div className='expense-item__description'>
        <h2>{props.title}</h2>
      </div>
      <div className='expense-item__price'>{props.price}</div>
    </div>
  );
};

export default ExpenseItem;
