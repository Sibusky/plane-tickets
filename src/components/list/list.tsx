import { Currency, ITicket } from "../../types/types";
import styles from "./list.module.css";
import Ticket from "./ticket";

export default function List({
  tickets,
  activeCurrency,
}: {
  tickets: ITicket[];
  activeCurrency: Currency;
}) {
  return (
    <ul className={styles.list}>
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} activeCurrency={activeCurrency} />
      ))}
    </ul>
  );
}
