import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'
import moment from 'moment'

test('should set default state', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('should remove expense by id' , () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0], expenses[2]])
})

test('should not remove expenses if id not found' , () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: '-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

//adding an expense
test('should add an expense', () => {
    const createdAt = moment()
    const newExpense = {
        id: '3',
        description: 'Bed',
        amount: 35000,
        note: 'Bed is good',
        createdAt
        
    }
    const action = {
        type: 'ADD_EXPENSE',
        expense: newExpense
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([...expenses, newExpense])
})

// should edit expense
test('Should edit expense by id', () => { 
    const updates = {
        description: 'Rent and hydro'
    }  
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state[1].description).toBe('Rent and hydro')

})
// should not edit expense if expense not found

test('Should not edit expense witnout valid id', () => { 
    const updates = {
        description: 'Rent and hydro'
    }  
    const action = {
        type: 'EDIT_EXPENSE',
        id: '-1',
        updates
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)

})

test('should set expenses', () => {
    const newExpenses = [
        {
            id: '34',
            description: 'computer',
            amount: 350000,
            note: 'needed one',
            createdAt: 10000
        },
        {
            id: '35',
            description: 'Bed',
            amount: 35000,
            note: 'Bed is good',
            createdAt: 20000
        }
    ]
    const action = {
        type: 'SET_EXPENSES',
        expenses: newExpenses
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(newExpenses)
})