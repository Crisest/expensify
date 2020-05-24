import {setStartDate, setEndDate, setFilterText, sortByAmount, sortByDate} from '../../actions/filters'
import moment from 'moment'

test('test should generate set start date action object' , () => {
    const action = setStartDate(moment(0))
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0)
    })
})

test('should generate set end date action object', () => {
    const action  = setEndDate(moment(0))
    expect(action).toEqual({
        type:'SET_END_DATE',
        endDate: moment(0)
    })
})

test('should generate set filter text action object with default values', () => {
    const action = setFilterText()
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: ''
    })
})

test('should generate set filter text action object with provided values', () => {
    const action = setFilterText('TEST')
    expect(action).toEqual({
        type: 'SET_TEXT_FILTER',
        text: 'TEST'
    })
})

test('should generate sort by amount option object', () => {
    const action = sortByAmount()
    expect(action).toEqual({
        type: 'SORT_BY_AMOUNT'
    })
})

test('should generate sort by amount option object', () => {
    const action = sortByDate()
    expect(action).toEqual({
        type: 'SORT_BY_DATE'
    })
})