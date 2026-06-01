type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="input-base"
      {...props}
    />
  );
};

export default Input;
