import { Currency } from "../../../types/types";
import styles from "./currency-filter.module.css";
import CurrencyOption from "./currency-option/currency-option";

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
      <ul className={styles.container}>
        {currencies.map((currency) => (
          <CurrencyOption
            key={currency}
            currency={currency}
            activeCurrency={activeCurrency}
            onCurrencyChange={onCurrencyChange}
          />
        ))}
      </ul>
    </div>
  );
}
