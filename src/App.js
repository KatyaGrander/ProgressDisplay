import { useState } from "react";
import "./App.css";
import KatDatePicker from "./components/KatDatePicker";
import DateCalculator from "./components/DateCalculator";

function App() {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();

  const getRange = (start, end) => {
    setStartDate(start);

    setEndDate(end);

    console.log(start, end);
  };

  return (
    <div className="App">
      <KatDatePicker getRange={getRange} />
      {startDate && endDate && (
        <DateCalculator startDate={startDate} endDate={endDate} />
      )}
    </div>
  );
}

export default App;

/**/
