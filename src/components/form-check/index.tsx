import { Controller } from "react-hook-form";
import { Form } from "react-bootstrap";

const FormCheck = ({ control, name, required = false, type }) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={{ required: required }}
      render={({ field: { value } }) => <Form.Check inline type={type} />}
    />
  );
};

export default FormCheck;
