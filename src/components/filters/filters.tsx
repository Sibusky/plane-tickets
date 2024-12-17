import { useState } from "react";
import CurrencyFilter from "./currency-filter";
import styles from "./filters.module.css";
import StopsFilter from "./stops-filter";

export default function Filters() {
  const [selectedStops, setSelectedStops] = useState<number[]>([]);

  //   const filterTickets = (tickets) => {
  //     if (selectedStops.length === 0) return tickets;
  //     return tickets.filter((ticket) => selectedStops.includes(ticket.stops));
  //   };

  return (
    <div className={styles.filters}>
      <CurrencyFilter />
      <StopsFilter
        selectedStops={selectedStops}
        onStopsChange={setSelectedStops}
      />
    </div>
  );
}
