import dayjs from "dayjs";
import "../components/TodoHead.css";

const TodoHead = () => {
  const date = dayjs().get("date");
  const monthList = [
    "JAN",
    "FAB",
    "MAR",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];
  const month = monthList[dayjs().get("month")];
  const year = dayjs().get("year");

  return (
    <div className="TodoHead">
      <div className="all_date">
        <div className="left_col"> {date}</div>
        <div className="right_col">
          <div className="month"> {month}</div>
          <div className="year">{year}</div>
        </div>
      </div>
      <div className="phrase"> TODO LIST</div>
    </div>
  );
};

export default TodoHead;
