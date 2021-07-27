import { useState } from 'react';

import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Ремонт машины',
    amount: 12350,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'Подарки', amount: 4900, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Еда',
    amount: 3400,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'Аренда жилья',
    amount: 11000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
