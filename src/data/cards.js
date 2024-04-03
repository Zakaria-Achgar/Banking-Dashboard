import MasterCard from "../assets/master_card_logo.svg";

export const creditCards = [
  {
    id: 0,
    name: "Black",
    balance: "2000$",
    last_four: "**** **** **** 4140",
    expiry_date: "10/24",
    icon: MasterCard,
    isPrimary: true,
  },
  {
    id: 1,
    name: "Grey",
    balance: "2000",
    last_four: "**** 3202",
    expiry_date: "10/24",
    icon: MasterCard,
    isPrimary: false,
  },
];