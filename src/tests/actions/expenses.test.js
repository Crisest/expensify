import {addExpense, editExpense, removeExpense} from '../../actions/expenses'

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
    const expenseData = {
        description: 'rent',
        amount: 109500,
        createdAt: 1000,
        note: 'this was last mont rent'
    }
    const action = addExpense(expenseData)
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should setup add expense action object with default values', () => {
    const action = addExpense()
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            id: expect.any(String),
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0
        }
    })
})