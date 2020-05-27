import React from 'react';
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters'

class ExpenseListFilters extends React.Component {
    state = { 
        calendarFocused: null
    }

    onDateChange = ({startDate, endDate}) => {
        this.props.dispatch(setStartDate(startDate))
        this.props.dispatch(setEndDate(endDate))
    }
    onFocusChange = (calendarFocused) => {
        this.setState({calendarFocused})
    }
    render(){
        return (
            <div>
                <input type="text" value={this.props.filters.text} onChange={(e) => {
                    this.props.dispatch(setFilterText(e.target.value))
                }}/> 
                <select 
                value={this.props.filters.sortBy}
                onChange={(e) => {
                    if(e.target.value === 'date'){
                        this.props.dispatch(sortByDate())
                    }
                    else if( e.target.value === 'amount'){
                        this.props.dispatch(sortByAmount())
                    }
                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                    startDate={this.props.filters.startDate}
                    endDate={this.props.filters.endDate}
                    onDatesChange={this.onDateChange}
                    focusedInput={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    showClearDates={true}
                    startDateId="UniqueID"
                    endDateId="SDS"
                />
            </div>
        )
    }
}



const ConnectedExpenseListFilters = (state) => {
    return {
        filters: state.filters
    }
}

export default connect(ConnectedExpenseListFilters)(ExpenseListFilters)