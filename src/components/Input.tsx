interface InputProps {
  type?: 'text' | 'number';
  text: string;
  value: any;
  readOnly?: boolean;
  onChange?: (value: any) => void;
  className?: string;
}

function Input({
  text, type = 'text', value, readOnly = false, onChange, className
}: InputProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label className="mb-2">
        {text}
      </label>
      <input
        type={type}
        value={value}
        readOnly={readOnly}
        className={`
          border border-purple-500 rounded-lg
          focus:outline-none bg-gray-100 px-4 py-2
          ${readOnly ? '' : 'focus:bg-white'}
        `}
        onChange={e => onChange?.(e.target.value)}  
      />
    </div>
  );
}

export default Input;
