type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

const Input = ({ ...props }: InputProps) => {
  return (
    <input
      className="w-full rounded-xl border border-zinc-300 px-4 py-3 outline-none focus:border-primary"
      {...props}
    />
  );
};

export default Input;
