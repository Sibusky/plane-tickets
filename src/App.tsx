import { useCallback, useState, useMemo } from "react";
import "./App.css";
import Filters from "./components/filters";
import List from "./components/list";
import ticketsData from "./data/tickets.json";
import { Currency, ITicket } from "./types/types";
import { stopsOptions } from "./components/constants/stops";

function App() {
  const [activeCurrency, setActiveCurrency] = useState<Currency>("RUB");
  const [selectedStops, setSelectedStops] = useState<number[]>([]);
  const [sortByPrice, setSortByPrice] = useState<"asc" | "desc" | null>(null);

  const tickets: ITicket[] = ticketsData.tickets;
  const currencies: Currency[] = ["RUB", "USD", "EUR"];

  const handleOptionClick = useCallback(
    (value: number) => {
      if (value === -1) {
        if (selectedStops.length === stopsOptions.length - 1) {
          setSelectedStops([]);
        } else {
          setSelectedStops(stopsOptions.slice(1).map((opt) => opt.value));
        }
      } else {
        const newSelected = selectedStops.includes(value)
          ? selectedStops.filter((s) => s !== value)
          : [...selectedStops, value];
        setSelectedStops(newSelected);
      }
    },
    [selectedStops]
  );

  const handleOnlyClick = useCallback((value: number, e: React.MouseEvent) => {
    e.preventDefault();
    setSelectedStops([value]);
  }, []);

  const filteredTickets = useMemo(() => {
    let result =
      selectedStops.length === 0
        ? tickets
        : tickets.filter((ticket) => selectedStops.includes(ticket.stops));

    if (sortByPrice) {
      result = [...result].sort((a, b) => {
        return sortByPrice === "asc" ? a.price - b.price : b.price - a.price;
      });
    }

    return result;
  }, [tickets, selectedStops, sortByPrice]);

  return (
    <main>
      <h1>Билеты</h1>
      <div className="container">
        <Filters
          currencies={currencies}
          activeCurrency={activeCurrency}
          onCurrencyChange={setActiveCurrency}
          selectedStops={selectedStops}
          handleOptionClick={handleOptionClick}
          handleOnlyClick={handleOnlyClick}
          sortByPrice={sortByPrice}
          onSortChange={setSortByPrice}
        />
        <List tickets={filteredTickets} activeCurrency={activeCurrency} />
      </div>
    </main>
  );
}

export default App;
