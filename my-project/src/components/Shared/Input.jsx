import React from "react";

const Input = ({
  className, // For the container
  labelClasaname, // For the input element
  inputClassName, // For the label element
  textareaClassName, // For the textarea element
  label,
  type,
  name,
  id,
  onChange,
  value,
}) => {
  return (
    <div className={className}>
      <label htmlFor={name} className={labelClasaname}>
        {label && <label htmlFor={id}>{label}</label>}
      </label>
      {type === "textarea" && (
        <textarea
          className={textareaClassName}
          name={name}
          id={id}
          onChange={onChange}
          value={value}
        />
      )}{" "}
      {type === "text" && (
        <input
          type={type}
          name={name}
          id={id}
          className={inputClassName}
          onChange={onChange}
          value={value}
        />
      )}
    </div>
  );
};

export default Input;
