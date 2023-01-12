import React, { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
  // const [enteredTitle, setEnteredTitle] = useState('');

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChange = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredTitle: event.target.value };
    });
  };
  // const [enteredAmount, setEnteredAmount] = useState('');

  const amountChange = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredAmount: event.target.value };
    });
  };
  // const [enteredDate, setEnteredDate] = useState('');

  const dateChange = (event) => {
    setUserInput((preState) => {
      return { ...preState, enteredDate: event.target.value };
    });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = userInput;

    // console.log(expenseData);
    setUserInput(() => {
      return {
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: '',
      };
    });
    props.onSaveExpenseData(expenseData);
    // console.log(userInput);
  };

  // const handelCancelClick = () => {
  //   props.handelCancelClick();
  // };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input
            type='text'
            value={userInput.enteredTitle}
            onChange={titleChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={userInput.enteredAmount}
            onChange={amountChange}
          />
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input
            type='date'
            value={userInput.enteredDate}
            onChange={dateChange}
          />
        </div>
      </div>

      <div className='new-expense__actions'>
        <button type='button' onClick={props.handelCancelClick}>
          Cancel
        </button>
        <button type='submit' onClick={props.handelCancelClick}>
          Add expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
