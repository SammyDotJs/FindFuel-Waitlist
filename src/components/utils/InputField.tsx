import React from "react";

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  placeholder,
  value,
  type,
  onChange,
}: InputProps) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 w-full">
      <label className="f-label text-base font-semibold ">{label}</label>
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        className="f-placeholder py-3 px-4 rounded-md bg-white text-sm w-full"
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
