import { ItemAccordion, Logos, Nav } from "../types";
import BonoLogo from "../assets/bono_logo.svg";

import IconFb from "../assets/icon-fb.svg";
import IconFbMob from "../assets/icon-fb-mob.svg";
import IconIn from "../assets/icon-in.svg";
import IconInMob from "../assets/icon-in-mob.svg";
import IconInst from "../assets/icon-inst.svg";
import IconInstMob from "../assets/icon-inst-mob.svg";
import IconX from "../assets/icon-x.svg";
import IconXMob from "../assets/icon-x-mob.svg";
import IconTg from "../assets/icon-tg.svg";
import IconTgMob from "../assets/icon-tg-mob.svg";

import IconGooglePlay from "../assets/google-play.svg";
import IconAppStore from "../assets/app-store.svg";

export const HERO = "Hero";
export const MARQUEE = "Marquee";
export const CARD = "Card";
export const APP = "App";
export const CUSTOMIZE = "Customize";
export const FAQS = "FAQs";
export const FOOTER = "Footer";

export const LIST_NAV: Nav[] = [
  { value: CARD, href: `#${CARD}` },
  { value: APP, href: `#${APP}` },
  { value: CUSTOMIZE, href: `#${CUSTOMIZE}` },
  { value: FAQS, href: `#${FAQS}` },
];

export const LINK_BONO = "https://www.bono.digital";

export const LIST_COMPANIES: Logos[] = [
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
  { name: "Bono", logo: BonoLogo, link: LINK_BONO },
];

export const LIST_SOCIAL: Logos[] = [
  { name: "Facebook", logo: IconFb, link: LINK_BONO },
  { name: "Linkedin", logo: IconIn, link: LINK_BONO },
  { name: "Instagram", logo: IconInst, link: LINK_BONO },
  { name: "X", logo: IconX, link: LINK_BONO },
  { name: "Telegram", logo: IconTg, link: LINK_BONO },
];

export const LIST_SOCIAL_MOB: Logos[] = [
  { name: "Facebook", logo: IconFbMob, link: LINK_BONO },
  { name: "Linkedin", logo: IconInMob, link: LINK_BONO },
  { name: "Instagram", logo: IconInstMob, link: LINK_BONO },
  { name: "X", logo: IconXMob, link: LINK_BONO },
  { name: "Telegram", logo: IconTgMob, link: LINK_BONO },
];

export const COPYRIGHT = "Ⓒ 2025 WIVO Finance Inc. All rights reserved.";
export const GET_STARTED = "Get started";
export const FIND_OUT_MORE = "Find out more";
export const SUBSCRIBE = "Subscribe";
export const SUBMIT = "submit";
export const PRIVACY_POLICY = "Privacy Policy";
export const TERMS_OF_SERVICE = "Terms of Service";
export const COOKIES_SETTINGS = "Cookies Settings";

export const LIST_LEGAL_LINKS: Nav[] = [
  { value: COPYRIGHT, href: LINK_BONO },
  { value: PRIVACY_POLICY, href: LINK_BONO },
  { value: TERMS_OF_SERVICE, href: LINK_BONO },
  { value: COOKIES_SETTINGS, href: LINK_BONO },
];

export const LIST_APP_STORES: Logos[] = [
  { name: "Google Play", logo: IconGooglePlay, link: LINK_BONO },
  { name: "App Store", logo: IconAppStore, link: LINK_BONO },
];

export const LIST_ACCORDION_ITEMS: ItemAccordion[] = [
  {
    head: "How can I sign up?",
    info: "Signing up for WIVO is quick and easy. Simply download the app from the App Store or Google Play, follow the on-screen instructions to create an account, and start managing your finances.",
  },
  {
    head: "How does WIVO work?",
    info: "WIVO is a user-friendly mobile app that allows you to easily manage your finances, track your spending, and set financial goals. It provides personalized insights and recommendations to help you make informed financial decisions.",
  },
  {
    head: "Can I link multiple accounts?",
    info: "Yes, you can link multiple accounts to WIVO. This allows you to have a comprehensive view of your finances and easily track your spending across different accounts.",
  },
  {
    head: "How can I track my expenses?",
    info: "WIVO provides powerful expense tracking tools that categorize your transactions automatically. You can also set spending limits and receive notifications when you're nearing your budget.",
  },
  {
    head: "Can I set financial goals?",
    info: "Yes, WIVO allows you to set financial goals and track your progress. Whether you're saving for a vacation, a new car, or retirement, WIVO can help you stay on track and achieve your goals.",
  },
];

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

export const CUSTOMIZE_HEADING =
  "Get noticed with a custom card to fit your style";
export const CUSTOMIZE_PARAGRAPH =
  "Stand out from the crowd by not settling for a boring bank card. Choose a card color that reflects your style, and the app will adapt to match it.";

export const FAQS_HEADING = "FAQs";
export const FAQS_PARAGRAPH = "Don’t see your question here?";
export const GET_IN_TOUCH = "Get in touch ➔";

export const BACK_TO_TOP = "Back to Top";
export const SUBSCRIBE_PARAGRAPH =
  "Join our newsletter to stay up to date on features and releases";
export const SUBSCRIBE_DISCLAIMER =
  "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.";
export const FOLLOW_US = "Follow us";
