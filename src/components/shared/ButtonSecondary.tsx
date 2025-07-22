import { Btn } from "../../types";

const ButtonSecondary = ({ size, value }: Btn) => {
  return <button className={`button-secondary ${size}`}>{value}</button>;
};

export default ButtonSecondary;
