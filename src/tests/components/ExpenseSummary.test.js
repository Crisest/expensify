import React from 'react';
import { shallow } from 'enzyme'
import { ExpenseSummary } from '../../components/ExpenseSummary';

test('should correctly render ExpenseSummary with 1 expense', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expenseTotal={123}  />)
    expect(wrapper).toMatchSnapshot()
})

test('should correctly render ExpenseSummary with multiple expenses', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={22} expenseTotal={123456}  />)
    expect(wrapper).toMatchSnapshot()
})