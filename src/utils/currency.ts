import { Currency } from "../types/types";

export const getCurrencySymbol = (currency: Currency) => {
  switch (currency) {
    case "RUB":
      return " ₽";
    case "EUR":
      return " €";
    case "USD":
      return " $";
    default:
      return " ₽";
  }
};

export const convertPrice = (price: number, currency: Currency) => {
  const rates = {
    RUB: 1,
    EUR: 0.0093,
    USD: 0.0097,
  };

  return Math.round(price * rates[currency]);
};

export const formatPrice = (price: number): string => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
};
