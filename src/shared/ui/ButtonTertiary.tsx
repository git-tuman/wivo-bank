import { Btn } from "../types";

const ButtonTertiary = ({ size, value, type = "button" }: Btn) => {
  return (
    <button className={`button-tertiary ${size}`} type={type}>
      {value}
    </button>
  );
};

export default ButtonTertiary;
