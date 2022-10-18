import moment from "moment";

export const DaysLeft = (date) => {
  const today = moment();
  if (moment(date).isAfter(today, "day")) {
    return `${moment(date).diff(today, "days")} days left`;
  } else {
    return `0 days left`;
  }
};

export const IsTodo = (startDate) => {
  const today = moment();
  if (today.isBefore(moment(startDate), "day")) {
    return true;
  }
  return false;
};

export const IsOngoing = (startDate, dueDate) => {
  const today = moment();
  if (today.isBetween(moment(startDate), moment(dueDate), "day")) {
    return true;
  }
  return false;
};

export const isCompleted = (dueDate) => {
  const today = moment();
  if (today.isAfter(moment(dueDate), "day")) {
    return true;
  }
  return false;
};
