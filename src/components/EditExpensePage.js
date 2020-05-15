import React from 'react'
import ExpenseForm from './ExpenseForm'
import { connect } from 'react-redux'
import { editExpense, removeExpense } from '../actions/expenses'

const EditExpensePage = (props) => {
    return (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense) => {
                    console.log('updated', expense);
                    props.dispatch(editExpense(props.expense.id, expense))
                    props.history.push('/')
                }}    
            />
            <button onClick={() => {
                props.dispatch(removeExpense({id: props.expense.id}))
                props.history.push('/')
            }}>Remove</button>
            Editing the expense with id of {props.match.params.id}
        </div>
    )
}

const mapStatetoProps = (state, props) => {
    return {
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    }
    
}

export default connect(mapStatetoProps)(EditExpensePage)