
function ExpenseDate(props) {
  var date = new Date(props.date);
  var month = date.toLocaleString('en-US', { month: 'long' });
  var day = date.toLocaleString('en-US', { day: '2-digit' });
  var year = date.getFullYear();
  return (
    <div className='expenseDate'>
     <span>Release Date:</span>  
      <div>{day} {month} {year}</div>
    </div>
  );
}

export default ExpenseDate;