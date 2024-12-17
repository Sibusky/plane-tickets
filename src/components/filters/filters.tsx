import { Currency } from "../../types/types";
import CurrencyFilter from "./currency-filter";
import styles from "./filters.module.css";
import StopsFilter from "./stops-filter";

interface FiltersProps {
  currencies: Currency[];
  selectedStops: number[];
  onStopsChange: (stops: number[]) => void;
  activeCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export default function Filters({
  currencies,
  activeCurrency,
  onCurrencyChange,
  selectedStops,
  onStopsChange,
}: FiltersProps) {
  return (
    <div className={styles.filters}>
      <CurrencyFilter
        currencies={currencies}
        activeCurrency={activeCurrency}
        onCurrencyChange={onCurrencyChange}
      />
      <StopsFilter
        selectedStops={selectedStops}
        onStopsChange={onStopsChange}
      />
    </div>
  );
}
