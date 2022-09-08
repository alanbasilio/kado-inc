import { Controller, ControllerProps } from "react-hook-form";
import DatePicker from "react-datepicker";
import moment from "moment";

const DatePickerKado = ({
  control,
  name,
  required = false,
  setValue,
  errors,
  minDate = null,
  maxDate = null,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field: { value } }) => (
        <DatePicker
          selected={value}
          onChange={(date) => setValue(name, date)}
          className={`form-control ${errors[name] && "is-invalid"}`}
          minDate={minDate}
          maxDate={maxDate}
        />
      )}
    />
  );
};

export default DatePickerKado;
