import { useState } from "react";
import DatePicker from "react-datepicker";
import "./KatDatePicker.css";

function KatDatePicker({ getRange }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const today = new Date();

  const setRange = () => {
    getRange(startDate, endDate);
  };

  const handleStartDate = (date) => {
    const timestampToday = Date.parse(today);
    const timestampComapare = Date.parse(date);

    if (timestampComapare < timestampToday) {
      setStartDate(date);
    }
    else console.log ("no start");
  };

  const handleEndDate = (date) => {
    const timestampToday = Date.parse(today);
    const timestampComapare = Date.parse(date);

    if (timestampComapare > timestampToday) {
      setEndDate(date);
    }
    else console.log ("no end");
  };

  return (
    <div className="datePicker_Container">
      <div id="datePicker_start">
        <label>Select Start Date:</label>
        <DatePicker
          wrapperClassName="datePicker"
          selectsStart
          selected={startDate}
          onChange={handleStartDate}
          startDate={startDate}
          dateFormat="dd/MM/yyyy" // Customize the date format
          isClearable // Add a clear button
          showYearDropdown // Show a dropdown for selecting years
          scrollableYearDropdown // Allow scrolling in the year dropdown
          previousMonthButtonLabel="<"
          nextMonthButtonLabel=">"
          yearDropdownItemNumber={2}
        />
      </div>

      <div id="datePicker_end">
        <label>Select End Date:</label>
        <DatePicker
          wrapperClassName="datePicker"
          selectsEnd
          selected={endDate}
          onChange={handleEndDate}
          endDate={endDate}
          dateFormat="dd/MM/yyyy" // Customize the date format
          isClearable // Add a clear button
          showYearDropdown // Show a dropdown for selecting years
          scrollableYearDropdown // Allow scrolling in the year dropdown
          previousMonthButtonLabel="<"
          nextMonthButtonLabel=">"
          yearDropdownItemNumber={2}
        />
      </div>

      <button className="progressButton" onClick={setRange}>
        Show my Progress
      </button>
    </div>
  );
}

export default KatDatePicker;
