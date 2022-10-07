import moment from "moment";

const PercentageDays = (startDate, dueDate) => {
  const today = moment();
  if (moment(dueDate).isAfter(today, "day")) {
    const diffToday = moment(dueDate).diff(today, "days");
    const diffStart = moment(dueDate).diff(startDate, "days");
    return Math.round((diffToday / diffStart) * 100);
  } else {
    return 100;
  }
};

export default PercentageDays;
