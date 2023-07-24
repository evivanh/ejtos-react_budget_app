import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext'

const Budget = () => {
    const { dispatch, budget, expenses} = useContext(AppContext);
    const [editableBudget, setEditableBudget] = useState(budget);
    const totalExpenses = expenses.reduce((total, item) => {
        return (total = total + item.cost);
    },0); 

    const handleChange = (event) => {
        if(editableBudget > 20000){
            alert("The value cannot exceed €20000")
            setEditableBudget(budget)
            return;
        }

        if(editableBudget <  totalExpenses){
            alert("The value cannot be less then the total expenses")
            setEditableBudget(budget)
            return;
        }

        dispatch({
            type: 'SET_BUDGET',
            payload: editableBudget,
        });
   
        setEditableBudget(event);

    }


    return (
        <div className='alert alert-secondary'>
            <span>Budget: €</span>
            <input
                    required='required'
                    type='number'
                    id='budget'
                    value={editableBudget}
                    step='10'
                    style={{ marginLeft: '2rem' , size: 10}}
                    onChange={(event) => handleChange(event.target.value)}>
                    </input>
        </div>
    );
};

export default Budget;
