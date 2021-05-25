import './ExpenseItem.css'
import ExpensiveDate from "../Expense-Date/ExpensiveDate";
import Card from "../../Styling/Card/Card";
import React from "react";

function ExpenseItem(props) {
   return (
        <Card className="expense-item">
            <ExpensiveDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;

