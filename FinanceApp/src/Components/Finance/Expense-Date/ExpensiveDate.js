import './ExpenseDate.css'

function ExpensiveDate(props) {
    const month = props.date.toLocaleString('en-Us', {month:'long'})
    const year = props.date.getFullYear()
    const date = props.date.toLocaleString('en-Us', {day:'2-digit'})

    return (
        <div className="expense-date">
            <div>
                <div className="expense-date__month">{month}</div>
                <div className="expense-date__year">{year}</div>
                <div className="expense-date__date">{date}</div>
            </div>
        </div>
    );
}

export default ExpensiveDate;
