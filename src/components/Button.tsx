interface ButtonProps {
  children: any;
  color?: 'green' | 'blue' | 'gray';
  className?: string;
  onClick?: () => void;
}

function Button({
  children, color = 'gray', className, onClick
}: ButtonProps) {
  return (
    <>
      <button
        onClick={onClick}
        className={`
          bg-gradient-to-r from-${color}-400 to-${color}-700
          text-white px-4 py-2 rounded-md
          ${className}
        `}
      >
        {children}
      </button>
      <span className={`
          hidden
          from-gray-400 to-gray-700
          from-blue-400 to-blue-700
          from-green-400 to-green-700
          ${className}
        `}></span>
    </>
  );
}

export default Button;
