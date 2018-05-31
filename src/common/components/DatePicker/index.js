import React, { Component } from "react";
import DateRangePicker from 'react-bootstrap-daterangepicker';

class DateTimeFieldComponent extends Component {

	constructor(props) {
		super(props);
		this.state = {
			date: null
		}
		this.dateInputBox = {
			background: 'white',
			border: '1px solid gray',
			height: '30px',
			borderRadius: '4px 0px 0px 4px',
			padding: '3px'
		}

		this.dateIcon = {
			padding: '6px',
			border: '1px solid gray',
			background: 'lightgray',
			borderRadius: '0px 4px 4px 0px'
		}
	}

	setdate = (event,picker) => {
		this.setState({
			date : picker.startDate._d
		})
	}

	formatDate = (date) => {
		let d = date,
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return [year, month, day].join('-');
	}

	render() {
		return (
			<DateRangePicker onApply={this.setdate} singleDatePicker>
				<input style={this.dateInputBox} className="date-picker-input-box" type="text" 
				value={this.state.date?this.formatDate(this.state.date):'Select Date'} disabled />
				<span style={this.dateIcon} className="date-picker-icon"><i className="fa fa-calendar" aria-hidden="true"></i></span>
			</DateRangePicker>
		)
	}
}

export default DateTimeFieldComponent