import { stopsOptions } from "../../../constants/stops";
import styles from "./stop-filter-option.module.css";

interface StopFilterOptionProps {
  value: number;
  label: string;
  selectedStops: number[];
  handleOptionClick: (value: number) => void;
  handleOnlyClick: (value: number, e: React.MouseEvent) => void;
}

export default function StopFilterOption({
  value,
  label,
  selectedStops,
  handleOptionClick,
  handleOnlyClick,
}: StopFilterOptionProps) {
  return (
    <li>
      <label key={value} className={styles.option}>
        <input
          type="checkbox"
          checked={
            value === -1
              ? selectedStops.length === stopsOptions.length - 1
              : selectedStops.includes(value)
          }
          onChange={() => handleOptionClick(value)}
        />
        <span>{label}</span>
        {value !== -1 && (
          <button
            className={styles.onlyButton}
            onClick={(e) => handleOnlyClick(value, e)}
          >
            ТОЛЬКО
          </button>
        )}
      </label>
    </li>
  );
}
