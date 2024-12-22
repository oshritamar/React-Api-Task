import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props){
    return(
        <div className='expenseItem'>
        <img src={props.image} alt={props.name}/>
        <div className='expenseItemName'> {props.name}</div>
        <div className='showSummary'>
        <span>Summary:</span> 
        <div> 
        </div> {props.summary.replace(/<[^>]+>/g, '')} </div>
        <ExpenseDate date={props.date} />
    </div>
    )
}
export default ExpenseItem;