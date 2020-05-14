import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore'
import { addExpense, removeExpense, editExpense } from './actions/expenses'
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from './actions/filters'
import getVisibleExpenses from './selectors/expenses'
import 'normalize.css/normalize.css'
import './styles/styles.scss'

const store = configureStore()

store.dispatch(addExpense({description: 'Water bill', amount: 4500}))
store.dispatch(addExpense({description: 'Gas bill', createdAt: 1000}))
store.dispatch(addExpense({description: 'Rent', amount: 19500}))
store.dispatch(setFilterText())

const state = store.getState()
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters)

console.log(visibleExpenses);

const jsx = (
    <Provider store={store}>
            <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))
