import React from "react";
import { Currency } from "../../../../types/types";
import styles from "./currency-option.module.css";

interface CurrencyOptionProps {
  currency: Currency;
  activeCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export function CurrencyOption({
  currency,
  activeCurrency,
  onCurrencyChange,
}: CurrencyOptionProps) {
  return (
    <li className={styles.item}>
      <button
        key={currency}
        className={`${styles.option} ${
          activeCurrency === currency ? styles.active : ""
        }`}
        onClick={() => onCurrencyChange(currency)}
      >
        {currency}
      </button>
    </li>
  );
}

export default React.memo(CurrencyOption);
