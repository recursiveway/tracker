import React, { useState } from 'react';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense';
import ExpensesFilter from './components/ExpensesFilter';
import ExpensesChart from './components/ExpensesChart';
import Card from './components/Card';
// const showList = [];
var i = 1;
const allList = [
  {
    key: 1,
    date: new Date(2021, 7, 7),
    title: 'A',
    price: Math.random(),
  },
  {
    key: 2,
    date: new Date(2010, 7, 7),
    title: 'B',
    price: Math.random(),
  },
  {
    key: 3,
    date: new Date(2020, 7, 7),
    title: 'C',
    price: Math.random(),
  },
  {
    key: 4,
    date: new Date(2022, 7, 7),
    title: 'D',
    price: Math.random(),
  },
  {
    key: 5,
    date: new Date(2023, 7, 7),
    title: 'E',
    price: Math.random(),
  },
];
const App = () => {
  const [dataa, setDataa] = useState(allList);
  const [showDate, setShowData] = useState([]);
  const onGettingSavedDataHandler = (submittedData) => {
    setDataa((oldArray) => {
      const t = [
        ...oldArray,
        {
          key: submittedData.key,
          date: submittedData.enteredDate,
          title: submittedData.enteredTitle,
          price: submittedData.enteredAmount,
        },
      ];
      console.log(t);
      return t;
    });
  };

  const fn = showDate.map((data) => {
    return (
      <>
        <ExpenseItem
          // key={data.key.toString()}
          key={i++}
          date={data.date}
          title={data.title}
          price={data.price}
        />
      </>
    );
  });

  const onYeareSelect = (value) => {
    if (value === 'All') {
      setShowData(dataa);
      // console.log(value);
    } else {
      const filtered = dataa.filter((data) => {
        return data.date.getFullYear().toString() === value;
      });

      setShowData(filtered);
    }
  };

  return (
    <>
      <NewExpense onGettingSavedData={onGettingSavedDataHandler} />
      <Card>
        <ExpensesFilter onYeareSelect={onYeareSelect} />
        {/* <ExpensesChart expenses={setDataa} /> */}
        {showDate.length !== 0 ? fn : 'Nothing to show'}
      </Card>
    </>
  );
};

export default App;
