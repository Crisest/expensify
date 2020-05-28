import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'
test('should rednder Expense', () => {
    const wrapper = shallow(<ExpenseDashboardPage / >)
    expect(wrapper).toMatchSnapshot()
})