import selectExpenseTotal from '../../selectors/selectExpenseTotal' 
import expenses from '../fixtures/expenses'

test('should return 0 if no expenses', () => {
    const result = selectExpenseTotal([])
    expect(result).toBe(0)
})

test('should correctly add multiple expenses', () => {
    const result = selectExpenseTotal(expenses)
    expect(result).toBe(114195)
})

test('should correctly add add up a single expense', () => {
    const result = selectExpenseTotal([expenses[0]])
    expect(result).toBe(195)
})
