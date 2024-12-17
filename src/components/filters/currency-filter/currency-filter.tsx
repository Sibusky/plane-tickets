import { Currency } from "../../../types/types";
import styles from "./currency-filter.module.css";

interface CurrencyFilterProps {
  currencies: Currency[];
  activeCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export default function CurrencyFilter({
  currencies,
  activeCurrency,
  onCurrencyChange,
}: CurrencyFilterProps) {
  return (
    <div>
      <h3 className={styles.title}>ВАЛЮТА</h3>
      <div className={styles.container}>
        {currencies.map((currency) => (
          <button
            key={currency}
            className={`${styles.option} ${
              activeCurrency === currency ? styles.active : ""
            }`}
            onClick={() => onCurrencyChange(currency)}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
}
