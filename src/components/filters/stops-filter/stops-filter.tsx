import styles from "./stops-filter.module.css";

interface StopsFilterProps {
  selectedStops: number[];
  onStopsChange: (stops: number[]) => void;
}

export default function StopsFilter({
  selectedStops,
  onStopsChange,
}: StopsFilterProps) {
  const options = [
    { value: -1, label: "Все" },
    { value: 0, label: "Без пересадок" },
    { value: 1, label: "1 пересадка" },
    { value: 2, label: "2 пересадки" },
    { value: 3, label: "3 пересадки" },
  ];

  const handleOptionClick = (value: number) => {
    if (value === -1) {
      if (selectedStops.length === options.length - 1) {
        onStopsChange([]);
      } else {
        onStopsChange(options.slice(1).map((opt) => opt.value));
      }
    } else {
      const newSelected = selectedStops.includes(value)
        ? selectedStops.filter((s) => s !== value)
        : [...selectedStops, value];
      onStopsChange(newSelected);
    }
  };

  const handleOnlyClick = (value: number, e: React.MouseEvent) => {
    e.preventDefault(); // Prevent label click
    onStopsChange([value]);
  };

  return (
    <div className={styles.stopsFilter}>
      <h3 className={styles.title}>КОЛИЧЕСТВО ПЕРЕСАДОК</h3>
      {options.map(({ value, label }) => (
        <label key={value} className={styles.option}>
          <input
            type="checkbox"
            checked={
              value === -1
                ? selectedStops.length === options.length - 1
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
      ))}
    </div>
  );
}
