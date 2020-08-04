import React from "react";

const InputField = (props) => {
  const { inputType, placeholder, className, name, onChange } = props;
  return (
    <div className={className}>
      <input
        className="bg-transparent w-full  border-grey-400 text-grey-400 border outline-none px-3 py-2 focus:outline-none focus:border-yellow-600"
        type={inputType}
        placeholder={placeholder}
        required
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export const TextArea = (props) => {
  const { inputType, placeholder, className, name, onChange } = props;
  return (
    <div className={className}>
      <textarea
        className="bg-transparent w-full border-grey-400 text-grey-400 border px-3 py-2 resize-none focus:outline-none focus:border-yellow-600"
        type={inputType}
        placeholder={placeholder}
        rows="5"
        required
        name={name}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
