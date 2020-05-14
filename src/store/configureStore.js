import {createStore, combineReducers} from 'redux'
import expensesReducer from '../reducers/expenses'
import filterReducer from '../reducers/filters'

export default () => {
    const store = createStore(
        combineReducers({
            //root = reducer
            expenses: expensesReducer,
            filters: filterReducer
        })
        )
        return store
}



