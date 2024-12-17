import { useState } from "react";
import { useMemo } from "react";
import "./App.css";
import Filters from "./components/filters";
import List from "./components/list";
import ticketsData from "./data/tickets.json";
import { Currency, ITicket } from "./types/types";

function App() {
  const [activeCurrency, setActiveCurrency] = useState<Currency>("RUB");
  const [selectedStops, setSelectedStops] = useState<number[]>([]);

  const tickets: ITicket[] = ticketsData.tickets;
  const currencies: Currency[] = ["RUB", "USD", "EUR"];

  const filteredTickets = useMemo(() => {
    if (selectedStops.length === 0) return tickets;
    return tickets.filter((ticket) => selectedStops.includes(ticket.stops));
  }, [tickets, selectedStops]);

  return (
    <main>
      <h1>Plane Tickets</h1>
      <div className="container">
        <Filters
          currencies={currencies}
          activeCurrency={activeCurrency}
          onCurrencyChange={setActiveCurrency}
          selectedStops={selectedStops}
          onStopsChange={setSelectedStops}
        />
        <List tickets={filteredTickets} activeCurrency={activeCurrency} />
      </div>
    </main>
  );
}

export default App;
