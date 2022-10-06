import { Controller, ControllerProps } from "react-hook-form";
import DatePicker from "react-datepicker";

const DatePickerKado = (props) => {
  return (
    <Controller
      control={props.control}
      name={props.name}
      rules={{ required: props.required }}
      render={({ field: { value } }) => (
        <DatePicker
          {...props}
          selected={value}
          onChange={(date) => props.setValue(props.name, date)}
          className={`form-control ${props.errors[props.name] && "is-invalid"}`}
        />
      )}
    />
  );
};

export default DatePickerKado;
