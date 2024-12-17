import React from "react";
import { Currency, ITicket } from "../../../types/types";
import { getCurrencySymbol } from "../../../utils/currency";
import { convertPrice } from "../../../utils/currency";
import { formatPrice } from "../../../utils/currency";
import { getStopsText } from "../../../utils/stops";
import styles from "./ticket.module.css";

export function Ticket({
  ticket,
  activeCurrency,
}: {
  ticket: ITicket;
  activeCurrency: Currency;
}) {
  return (
    <li className={styles.ticket}>
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
          за {formatPrice(convertPrice(ticket.price, activeCurrency))}
          {getCurrencySymbol(activeCurrency)}
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
    </li>
  );
}

export default React.memo(Ticket);
