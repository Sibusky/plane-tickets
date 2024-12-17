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
    <div className={styles.list}>
      {tickets.map((ticket, index) => (
        <Ticket key={index} ticket={ticket} activeCurrency={activeCurrency} />
      ))}
      {/* // В данном случае использование index в качестве key не является ошибкой, потому что с билетами не происходит никаких действий (удаление, добавление)
    // Всё же лучше использовать id билета в качестве key, но его нет в json. */}
    </div>
  );
}
