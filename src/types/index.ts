import { COLOR, SIZE } from "../constants";

export interface Nav {
  callback?: () => void;
  value: string;
  href: string;
}

export interface Btn {
  size: (typeof SIZE)[keyof typeof SIZE];
  value: string;
}

export interface BtnPrimary extends Btn {
  color: (typeof COLOR)[keyof typeof COLOR];
}

export interface Company {
  name: string;
  logo: string;
  link: string;
}

export interface ItemAccordion {
  head: string;
  info: string;
}
