import './Form.css'
import {useState} from "react";

function Form(props) {
    // const [title, setTitle] = useState('');
    // const [amount, setAmount] = useState('');
    // const [date, setDate] = useState('');

    const [userInput, changeUserInput] = useState({
        title: '',
        amount: '',
        date: ''
    })

    function titleChangeHandler(event) {
        changeUserInput((prev) => {
            return {...prev, title: event.target.value}
        })
    }

    function amountChangeHandler(event) {
        changeUserInput((prev) => {
            return {...prev, amount: event.target.value}
        })
    }

    function dateChangeHandler(event) {
        changeUserInput((prev) => {
            return {...prev, date: event.target.value}
        })
    }
    
    function submitHandler(event) {
        event.preventDefault();
        
        const exspenseData = {
            ...userInput,
            date : new Date(userInput.date)
        };

        props.onSaveData(exspenseData);

        changeUserInput({
            title: '',
            amount: '',
            date: '',
        })
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.title} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.amount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={userInput.date} max="2022-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Exspense</button>
            </div>
        </form>
    );
}

export default Form;
