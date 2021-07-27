import './ExpensesFilter.css';

const ExpensesFilter = ({ onOptionChange, selected }) => {
  const dropdownChangeHandler = (event) => {
    onOptionChange(event.target.value);
  };

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Выбрать год</label>
        <select value={selected} onChange={dropdownChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
