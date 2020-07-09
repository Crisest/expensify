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
            <div className="container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                    type="text" 
                    className="text-input" 
                    value={this.props.filters.text} 
                    onChange={(e) => {
                        this.props.dispatch(setFilterText(e.target.value))
                    }}
                    placeholder="Search Expenses"
                    />
                 </div>
                <div className="input-group__item">
                    <select 
                    value={this.props.filters.sortBy}
                    onChange={(e) => {
                        if(e.target.value === 'date'){
                            this.props.dispatch(sortByDate())
                        }
                        else if( e.target.value === 'amount'){
                            this.props.dispatch(sortByAmount())
                        }
                    }}
                    className="select"
                    >
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
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
            </div>
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