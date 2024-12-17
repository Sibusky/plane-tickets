import styles from "./ticket.module.css";

export interface ITicket {
  origin: string;
  origin_name: string;
  destination: string;
  destination_name: string;
  departure_date: string;
  departure_time: string;
  arrival_date: string;
  arrival_time: string;
  carrier: string;
  stops: number;
  price: number;
}

export default function Ticket({ ticket }: { ticket: ITicket }) {
  const getStopsText = (stops: number) => {
    if (stops === 0) return "БЕЗ ПЕРЕСАДОК";
    if (stops === 1) return "1 ПЕРЕСАДКА";
    return `${stops} ПЕРЕСАДКИ`;
  };

  return (
    <div className={styles.ticket}>
      <div className={styles.leftSection}>
        <div className={styles.airline}>
          <img
            src={`/logos/${ticket.carrier.toLowerCase()}.png`}
            alt={`Логотип компании ${ticket.carrier}`}
          />
        </div>
        <button className={styles.buyButton}>
          Купить
          <br />
          за {ticket.price}₽
        </button>
      </div>

      <div className={styles.rightSection}>
        <div className={styles.flightInfo}>
          <div className={styles.time}>{ticket.departure_time}</div>
          <div className={styles.stops}>
            <span className={styles.stopsText}>
              {getStopsText(ticket.stops)}
            </span>
          </div>
          <div className={styles.time}>{ticket.arrival_time}</div>
        </div>

        <div className={styles.cityInfo}>
          <div className={styles.city}>
            {ticket.origin}, {ticket.origin_name}
          </div>
          <div className={styles.city}>
            {ticket.destination}, {ticket.destination_name}
          </div>
        </div>

        <div className={styles.dateInfo}>
          <div className={styles.date}>{ticket.departure_date}</div>
          <div className={styles.date}>{ticket.arrival_date}</div>
        </div>
      </div>
    </div>
  );
}
