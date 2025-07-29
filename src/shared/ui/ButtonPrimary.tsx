import { BtnPrimary } from "../types";

const ButtonPrimary = ({ size, color, value, type = "button" }: BtnPrimary) => {
  return (
    <button className={`button-primary ${size} ${color}`} type={type}>
      {value}
    </button>
  );
};

export default ButtonPrimary;
