import { stopsOptions } from "../../constants/stops";
import StopFilterOption from "./stop-filter-option";
import styles from "./stops-filter.module.css";

interface StopsFilterProps {
  selectedStops: number[];
  handleOptionClick: (value: number) => void;
  handleOnlyClick: (value: number, e: React.MouseEvent) => void;
}

export default function StopsFilter({
  selectedStops,
  handleOptionClick,
  handleOnlyClick,
}: StopsFilterProps) {
  return (
    <div className={styles.stopsFilter}>
      <h3 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      <ul className={styles.list}>
        {stopsOptions.map(({ value, label }) => (
          <StopFilterOption
            key={value}
            value={value}
            label={label}
            selectedStops={selectedStops}
            handleOptionClick={handleOptionClick}
            handleOnlyClick={handleOnlyClick}
          />
        ))}
      </ul>
    </div>
  );
}
