import React from 'react';
import { connect } from 'react-redux';
import selectExpenseTotal from '../selectors/selectExpenseTotal'
import selectExpenses from '../selectors/expenses'
import numeral from 'numeral'

export const ExpenseSummary = (props) => {
    const expenseWord = props.expenseCount === 1 ? 'expense' : 'expenses'
    return (
        <div>
            <h3> Viewing {props.expenseCount} {expenseWord} totalling {numeral(props.expenseTotal / 100).format('$0,0.00')}</h3>
            
        </div>
    )
}

const mapStatetoProps = (state) => ({
    expenseTotal: selectExpenseTotal(selectExpenses(state.expenses, state.filters)),
    expenseCount: selectExpenses(state.expenses, state.filters).length
})

export default connect(mapStatetoProps)(ExpenseSummary)