import React, { useState } from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = ({ onGettingSavedData }) => {
  const [isEditing, setEditing] = useState(false);

  const onSaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      key: Math.random(),
    };
    onGettingSavedData(expenseData);
  };

  const startEditingHandler = () => {
    setEditing(true);
  };
  const handelCancelClick = () => {
    setEditing(false);
  };

  return (
    <div className='new-expense'>
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={onSaveExpenseDataHandler}
          handelCancelClick={handelCancelClick}
        />
      )}
    </div>
  );
};

export default NewExpense;
