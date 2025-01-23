import React from "react";

const InputField = (props) => {
  const { label, type, required, name,placeholder, onChange, value } = props;

  return (
    <div>
      <label
        htmlFor={label}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          id={label}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          autoComplete={label}
          onChange={onChange}
          value={value}
          className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 p-3"
        />
      </div>
    </div>
  );
};

export default InputField;
