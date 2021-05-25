import React from "react";
import './NewExpense.css'
import Form from "../Form/Form";

function NewExpense(props) {

    function exspenseData(data) {
        const dataMain = {
            ...data,
            id: Math.random().toString()
        }
        props.addExspenseData(dataMain)
    }

    return (
        <div className="new-expense">
            <Form onSaveData={exspenseData}/>
        </div>
    );
}

export default NewExpense;

