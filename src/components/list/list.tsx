import styles from "./list.module.css";
import ticketsData from "../../data/tickets.json";
import Ticket, { ITicket } from "./ticket";

export default function List() {
  const tickets: ITicket[] = ticketsData.tickets;

  return (
    <div className={styles.list}>
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} />
      ))}
    </div>
  );
}
