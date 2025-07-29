import Burger from "../../../shared/assets/burger.svg";
import Close from "../../../shared/assets/close.svg";

interface MenuBtn {
  callback: () => void;
  open: boolean;
}

const MenuButton = ({ callback, open }: MenuBtn) => {
  return (
    <button onClick={callback} className="button-menu">
      <img src={open ? Close : Burger} alt="Button Menu" />
    </button>
  );
};

export default MenuButton;
