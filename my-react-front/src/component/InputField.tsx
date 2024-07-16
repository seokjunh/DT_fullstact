interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const InputField = ({
  label,
  type,
  placeholder,
  id,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="mb-4">
      <div>{label}</div>
      <div className="border-2 border-blue-500 h-14 rounded-xl flex items-center p-4">
        <input
          type={type}
          placeholder={placeholder}
          required
          className="w-full outline-none"
          id={id}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  );
};
