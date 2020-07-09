import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import selectExpenseTotal from '../selectors/selectExpenseTotal'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div className="page-header">
            <div className="container">
                <h1 className="page-header__title"> Viewing <span>{props.expenseCount}</span> {expenseWord} totalling <span>{numeral(props.expenseTotal / 100).format('$0,0.00')}</span></h1>
                <div className="page-header__actions">
                    <Link className="button" to="/create">Add Expense</Link>
                </div>
            </div>          
        </div>
    )
}

const mapStatetoProps = (state) => ({
    expenseTotal: selectExpenseTotal(selectExpenses(state.expenses, state.filters)),
    expenseCount: selectExpenses(state.expenses, state.filters).length
})

export default connect(mapStatetoProps)(ExpenseSummary)