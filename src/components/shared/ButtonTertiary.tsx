import { Btn } from "../../types";

const ButtonTertiary = ({ size, value }: Btn) => {
  return <button className={`button-tertiary ${size}`}>{value}</button>;
};

export default ButtonTertiary;
