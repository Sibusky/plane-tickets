import { Currency } from "../../types/types";
import CurrencyFilter from "./currency-filter";
import styles from "./filters.module.css";
import SortFilter from "./sort-filter/sort-filter";
import StopsFilter from "./stops-filter";

interface FiltersProps {
  currencies: Currency[];
  selectedStops: number[];
  handleOptionClick: (value: number) => void;
  handleOnlyClick: (value: number, e: React.MouseEvent) => void;
  activeCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
  sortByPrice: "asc" | "desc" | null;
  onSortChange: (sort: "asc" | "desc" | null) => void;
}

export default function Filters({
  currencies,
  activeCurrency,
  onCurrencyChange,
  selectedStops,
  handleOptionClick,
  handleOnlyClick,
  sortByPrice,
  onSortChange,
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
        handleOptionClick={handleOptionClick}
        handleOnlyClick={handleOnlyClick}
      />
      <SortFilter sortByPrice={sortByPrice} onSortChange={onSortChange} />
    </div>
  );
}
