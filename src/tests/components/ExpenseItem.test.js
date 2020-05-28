import React from 'react'
import { shallow } from 'enzyme'
import ExpenseItem from '../../components/ExpenseItem'
import expenses from '../fixtures/expenses'

test('should render expense item with fixture data', () => {
    const expense = expenses[1]
    const wrapper = shallow(<ExpenseItem {...expense}/>)
    expect(wrapper).toMatchSnapshot()
})