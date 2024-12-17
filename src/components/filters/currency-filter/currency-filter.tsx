import { useState } from "react";
import styles from "./currency-filter.module.css";

type Currency = "RUB" | "USD" | "EUR";

export default function CurrencyFilter() {
  const [activeCurrency, setActiveCurrency] = useState<Currency>("RUB");

  const currencies: Currency[] = ["RUB", "USD", "EUR"];

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
            onClick={() => setActiveCurrency(currency)}
          >
            {currency}
          </button>
        ))}
      </div>
    </div>
  );
}
