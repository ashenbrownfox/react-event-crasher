import React, {useState} from 'react'
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
        },
        {
            id: 4,
            name: "Top G Party",
            desc: "Party in Dubai address TBD",
            dateTime: "2023-04-07T18:30:00",
            address: "67674 Maple St, Anytown, USA",
            link: "https://example.com/event3"
          }
      ];
      const today = new Date().toLocaleDateString();

      const [filterText, setFilterText] = useState("");
      const [filterDate, setFilterDate] = useState("");

        const handleFilterChange = (event) => {
            setFilterText(event.target.value);
        };
        const filteredEvents = events.filter(
            (event) =>
              event.name.toLowerCase().includes(filterText.toLowerCase()) ||
              event.desc.toLowerCase().includes(filterText.toLowerCase())
          );
          const handleDateChange = (event) => {
            setFilterDate(event.target.value);
          };
          
      return (
        <main>
        <h2>Upcoming Events - {today}</h2>
        <div className="filter-container">
            <input
                type="date"
                value={filterDate}
                onChange={handleDateChange}
                className="date-picker"
            />
            </div>
        <div className='filter-input-container'>
        <input className="filter-input"
          type="text"
          placeholder="Filter events by name or description"
          value={filterText}
          onChange={handleFilterChange}
        />
        </div>
        
        <ul>
          {filteredEvents.map((event) => (
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
