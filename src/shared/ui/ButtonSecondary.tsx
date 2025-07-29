import { Btn } from "../types";

const ButtonSecondary = ({ size, value, type = "button" }: Btn) => {
  return (
    <button className={`button-secondary ${size}`} type={type}>
      {value}
    </button>
  );
};

export default ButtonSecondary;
