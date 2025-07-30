import { Logos } from "../../shared/types";

type TypeAppStoreItem = {
  item: Logos;
};

const AppStoreItem = ({ item }: TypeAppStoreItem) => {
  return (
    <a
      href={item.link}
      className="app-store"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img src={item.logo} alt={item.name} loading="lazy" />
    </a>
  );
};

export default AppStoreItem;
