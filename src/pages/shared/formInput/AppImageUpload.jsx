const AppTextAreaInput = ({
  name,
  label,
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
        ? "This field is required"
        : validation?.required,
  };

  return (
    <div className="form-control">
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <textarea
        id={name}
        placeholder={placeholder}
        {...register(name, validationRules)} // Register field with validation rules
        className="textarea w-full h-32 resize-none border rounded p-2" // Disable resizing
      />
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default AppTextAreaInput;
