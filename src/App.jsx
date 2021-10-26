import React from 'react';
import DatePicker from './DatePickerPopup';
import Clock from './Clock'
import "tailwindcss/tailwind.css"



const App = () => {
  return (
    <div>
      <Clock />
      <DatePicker />
    </div>
  )  
}

export default App;
