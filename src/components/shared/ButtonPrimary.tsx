import { BtnPrimary } from "../../types";

const ButtonPrimary = ({ size, color, value }: BtnPrimary) => {
  return <button className={`button-primary ${size} ${color}`}>{value}</button>;
};

export default ButtonPrimary;
