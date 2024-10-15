import React from "react";

const AppSelectorInput = ({
  name,
  label,
  options = [],
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
      <select
        id={name}
        {...register(name, validationRules)}
        className="select-input input"
      >
        <option value="" className="text-gray-300">
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <p className="error-message text-red-600">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default AppSelectorInput;
