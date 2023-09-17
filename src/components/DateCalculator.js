import "./DateBox.css";

function DateCalculator(props) {
  const { startDate, endDate } = props;

  const timeDifference = endDate - startDate;
  const dayDifference = Math.floor(timeDifference / (24 * 60 * 60 * 1000));
  const days = [];

  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    days.push(new Date(date));
  }

  const getClassName = (day) => {
    const today = new Date();
    const timestampToday = Date.parse(today);
    const timestampComapare = Date.parse(day);

    if (today.toDateString() === day.toDateString()) {
      return "today-dateBox";
    } else if (timestampComapare < timestampToday) {
      return "past-dateBox";
    } else return "dateBox";
  };

  return (
    <>
      <div className="dateBoxContainer">
        {days.map((day) => (
          <div className={getClassName(day)}>{day.toDateString()}</div>
        ))}
      </div>
    </>
  );
}
export default DateCalculator;
