import Exspense from "./Components/Finance/Exspense-List/Expenses";
import NewExpense from "./Components/AddForm/NewExpense/NewExpense";
import {useState} from "react";

const dummy_expenses = [
    {
        id: 'e1',
        title: 'Toilet Paper',
        amount: 94.12,
        date: new Date(2020, 7, 14),
    },
    {
        id: 'e2',
        title: 'New TV',
        amount: 799.49,
        date: new Date(2021, 2, 12)
    },
    {
        id: 'e3',
        title: 'Car Insurance',
        amount: 294.67,
        date: new Date(2021, 2, 28),
    },
    {
        id: 'e4',
        title: 'Wooden Desk (Maple, Walnut & Mahogny)',
        amount: 300,
        date: new Date(2021)
    },
    {
        id: 'e5',
        title: 'Space-Gray MacBook Air (Ram : 8gb, Storage : 512gb, M1)',
        amount: 1199,
        date: new Date(2021)
    }
];

function App() {
    // {title : 'Wooden Desk (Maple, Walnut & Mahogny)', amount : 300, date : new Date(2021)}
    const [expenses, setExpenses] = useState(dummy_expenses)


    function addExspense(exspense) {
        setExpenses((prev) => {
            return [
                exspense,
                ...prev
        ]
        });
    }

    return (
        <div>
            <NewExpense addExspenseData={addExspense}/>
            <Exspense expenses={expenses}></Exspense>
        </div>
    );
}

export default App;
