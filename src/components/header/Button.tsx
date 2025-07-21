interface Btn {
  value: string;
}

const Button = ({ value }: Btn) => {
  return <button className="button">{value}</button>;
};

export default Button;
