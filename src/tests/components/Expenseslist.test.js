import React from 'react'
import { shallow } from 'enzyme'
import { ExpenseList } from '../../components/ExpenseList'
import expenses from '../fixtures/expenses'

test('should render Expense:ist with expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()

})

test('Should render Expenselist with empty messages', () =>{
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
}) 