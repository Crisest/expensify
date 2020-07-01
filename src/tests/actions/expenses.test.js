import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import {startAddExpense, addExpense, editExpense, removeExpense, setExpenses, startSetExpenses, startRemoveExpense} from '../../actions/expenses'
import expenses from '../fixtures/expenses'
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({id, description, note, amount, createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt }
    })
    database.ref('expenses').set(expensesData).then(() => {
        return done()
    })
})


test('Should setup remove expense action object', () => {
    const action = removeExpense({id: '213123'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '213123'
    })
})

test('Should setup edit expense action object', () => {
    const action = editExpense('asdasd', {descripton: 'Banana', amount: 1000})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: 'asdasd',
        updates: {
            descripton: 'Banana',
            amount: 1000
        }
    })
})

test('Should setup add expense ation object with provide values', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[2]
    })
})

test('should add expense to database and store', (done) => {

    const store = createMockStore({})
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    }

    store.dispatch(startAddExpense(expenseData)).then(() => {  
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
        
    })

})

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({})
    const expenseData = {
        description: '', 
        note: '', 
        amount: 0, 
        createdAt: 0 
    }
    store.dispatch(startAddExpense({})).then(() => {  
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        })

        database.ref(`expenses/${actions[0].expense.id}`).once('value').then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData)
            done()
        })
        
    })
})

test('should setup set expenses action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type: 'SET_EXPENSES',
        expenses
    })
})

test('should set the expenses from firebase', (done) => {
    const store = createMockStore({})
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        })
        done()
    })
})

test('should remove expenses from firebase', (done) => {
    const store = createMockStore({})
    const id = expenses[2].id

    store.dispatch(startRemoveExpense({id})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type: 'REMOVE_EXPENSE',
            id
        })
        return database.ref(`expenses/${id}`).once('value')
    }).then((snapshot) => {
        expect(snapshot.val()).toBeFalsy()
        done()
    })
})