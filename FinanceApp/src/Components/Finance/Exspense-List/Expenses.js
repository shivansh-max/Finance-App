import ExpenseItem from "../Expense-Item/ExpenseItem";
import './Expenses.css'
import React, { useState } from "react";
import Card from "../../Styling/Card/Card";
import ExpensesFilter from "../Expenses-Filter/ExpensesFilter";

function Exspense(props) {
    const[year, changeYear] = useState('2021')

    const takeFilterState = (val) => {
        
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter onGetFilter={takeFilterState}/>
                {
                    props.expenses.filter(
                        (exspense) => {
                            exspense.date.get ==
                        }
                    ).map
                    ((exspense) =>
                        (
                            <ExpenseItem
                                key={exspense.id}
                                title={exspense.title}
                                amount={exspense.amount}
                                date={exspense.date}>
                            </ExpenseItem>
                        )
                    )
                }
            </Card>
        </div>
    );
}

export default Exspense;
