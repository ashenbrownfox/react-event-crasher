import React from 'react'
import './Main.css';

export const Main = () => {
    const events = [
        {
          id: 1,
          name: "Event 1",
          desc: "Description for event 1",
          dateTime: "2023-04-05T09:00:00",
          address: "123 Main St, Anytown, USA",
          link: "https://example.com/event1"
        },
        {
          id: 2,
          name: "Event 2",
          desc: "Description for event 2",
          dateTime: "2023-04-06T13:00:00",
          address: "456 Oak St, Anytown, USA",
          link: "https://example.com/event2"
        },
        {
          id: 3,
          name: "Event 3",
          desc: "Description for event 3",
          dateTime: "2023-04-07T18:30:00",
          address: "789 Maple St, Anytown, USA",
          link: "https://example.com/event3"
        }
      ];
      const today = new Date().toLocaleDateString();

      return (
        <main>
          <h2>Upcoming Events {today}</h2>
          <ul>
            {events.map(event => (
              <li key={event.id}>
                <h3>{event.name}</h3>
                <p>{event.desc}</p>
                <p>{new Date(event.dateTime).toLocaleString()}</p>
                <p>{event.address}</p>
                <a href={event.link}>Event Details</a>
              </li>
            ))}
          </ul>
        </main>
      );
}
