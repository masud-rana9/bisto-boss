import React from "react";

const AppFormInput = ({
  name,
  label,
  type = "text",
  placeholder,
  validation,
  register,
  errors,
}) => {
  // Adjust validation to handle boolean values for required
  const validationRules = {
    ...validation,
    required:
      validation?.required === true
        ? `${label} field is required`
        : validation?.required,
  };

  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name, validationRules)}
        className="input"
      />
      {errors[name] && (
        <p className="error-message text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default AppFormInput;
