import { Company, Nav } from "../types";
import BonoLogo from "../assets/bono_logo.svg";

export const listNav: Nav[] = [
  { value: "Card", href: "#Card" },
  { value: "App", href: "#App" },
  { value: "Customize", href: "#Customize" },
  { value: "FAQs", href: "#FAQs" },
];

export const LINK_BONO = "https://www.bono.digital";

export const LIST_COMPANIES: Company[] = [
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
];

export const HERO = "Hero";
export const MARQUEE = "Marquee";
export const CARD = "Card";
export const APP = "App";

export const ACTIVE = "active";

export const SIZE = {
  S: "S",
  M: "M",
};

export const COLOR = {
  WHITE: "white",
  BLACK: "black",
};

export const MARQUEE_PARAGRAPH = "Used by the world's most amazing companies";

export const COPYRIGHT = "Ⓒ 2025 WIVO Finance Inc. All rights reserved.";
export const GET_STARTED = "Get started";
export const FIND_OUT_MORE = "Find out more";

export const MAIN_HEADING = "Your future revolutionary banking";
export const HERO_PARAGRAPH =
  "Introducing our innovative banking website that we can design for your unique needs. Offering both physical and virtual debit cards in addition to a user-friendly banking app. Create your personalized site with customized functionalities today.";
export const HERO_PARAGRAPH_MOB =
  "Introducing our innovative website featuring customized banking solutions that we can tailor to your unique needs";

export const CARD_HEADING = "Spend anywhere with a physical debit card";
export const CARD_PARAGRAPH =
  "Experience the ease of using WIVO, a digital bank that offers a physical debit card tailored for effortless daily transactions. This card comes equipped with an integrated RFID transponder to enable fast, contactless payments.";

export const APP_HEADING = "Spending insights at your fingertips";
export const APP_PARAGRAPH =
  "Crafted to enhance your day-to-day spending with a focus on transparency and efficiency. Instant transfers, virtual cards, and heads-up displays offer reassurance and peace of mind when it comes to managing your finances.";
export const APP_TOOLTIP_BALANCE_PARAGRAPH = "Financial control";
export const APP_TOOLTIP_BALANCE_SPAN = "Improving visibility of transactions";
export const APP_TOOLTIP_BUTTON_PARAGRAPH = "Easily get paid";
export const APP_TOOLTIP_BUTTON_SPAN = "Make payments in a few minutes";
