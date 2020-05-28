import React from 'react'
import { shallow } from 'enzyme'
import NotFoundPAge from '../../components/NotFoundPage'

test('should render NotFoundPage' , () => {
    const wrapper = shallow(<NotFoundPAge />)
    expect(wrapper).toMatchSnapshot()
})