import styles from "./sort-filter.module.css";

interface SortFilterProps {
  sortByPrice: "asc" | "desc" | null;
  onSortChange: (sort: "asc" | "desc" | null) => void;
}

export default function SortFilter({
  sortByPrice,
  onSortChange,
}: SortFilterProps) {
  return (
    <div className={styles.sortFilter}>
      <h3 className={styles.title}>СОРТИРОВАТЬ ПО ЦЕНЕ</h3>
      <div className={styles.sortButtons}>
        <button
          className={`${styles.sortButton} ${
            sortByPrice === "asc" ? styles.active : ""
          }`}
          onClick={() => onSortChange(sortByPrice === "asc" ? null : "asc")}
        >
          По возрастанию
        </button>
        <button
          className={`${styles.sortButton} ${
            sortByPrice === "desc" ? styles.active : ""
          }`}
          onClick={() => onSortChange(sortByPrice === "desc" ? null : "desc")}
        >
          По убыванию
        </button>
      </div>
    </div>
  );
}
