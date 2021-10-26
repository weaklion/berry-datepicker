import React from 'react';
import DPicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.scss'


const DatePicker = (props) => {
  return (
    <div className="date-picker">
    
      <DPicker //input
        {...props}
        timeInputLabel="Time:"
        dateFormat="MM/dd/yyyy h:mm aa"
        showTimeInput
        showDisabledMonthNavigation
        disabledKeyboardNavigation
        open={false}
      />
      <DPicker //calendar
        {...props}
        inline
      />
    </div>  
  )
}

export default DatePicker;
