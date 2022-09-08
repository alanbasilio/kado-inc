import { Controller } from "react-hook-form";
import Select from "react-select";

const SelectKADO = ({
  placeholder,
  options,
  control,
  name,
  required = false,
  setValue,
  multiple = false,
  errors,
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field: { value } }) => (
        <Select
          placeholder={placeholder}
          options={options}
          value={options.find((c) => c.value === value)}
          onChange={(results) => {
            if (multiple) {
              const temp = [];
              results.map((result) => {
                temp.push(result.value);
              });
              setValue(name, temp);
            } else {
              setValue(name, results.value);
            }
          }}
          className={
            errors[name]
              ? "form-control p-0 is-invalid react-select"
              : "react-select"
          }
          isMulti={multiple}
        />
      )}
    />
  );
};

export default SelectKADO;
