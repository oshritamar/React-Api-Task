import './Expenses.css';
import ExpenseItem from './ExpenseItem';
function Expenses(props){
    return(
        <div className="expenseItemsContainer">
            {props.items.map((item,index)=>(
                <ExpenseItem

                name={item.name}
                date={item.date}
                image={item.image}
                summary={item.summary}
                key={index}

                />
            ))}

        </div>
    )
}
export default Expenses;