import React, {useState, useEffect } from 'react';
import {Event} from './Event';
import events from "./TestData.json";
import './Main.css';

export const EventList = () => {

      const [filterText, setFilterText] = useState("");
      const [filterDate, setFilterDate] = useState(new Date().toLocaleDateString());
      const [filteredEvents, setFilteredEvents] = useState(events);

        const handleFilterChange = (event) => {
            setFilterText(event.target.value);
        };
        // Update filteredEvents whenever filterText or filterDate changes
        useEffect(() => {
            const filtered = events.filter(
              (event) => {
              const eventDate = new Date(event.dateTime);
              const filterDateObj = new Date(filterDate);
              return (
                event.name.toLowerCase().includes(filterText.toLowerCase()) ||
                event.desc.toLowerCase().includes(filterText.toLowerCase())
              ) && 
              eventDate.getFullYear() === filterDateObj.getFullYear() &&
              eventDate.getMonth() === filterDateObj.getMonth() &&
              eventDate.getDate() === filterDateObj.getDate()
            });
            setFilteredEvents(filtered);
          }, [filterText, filterDate, events]);

          const handleDateChange = (event) => {
            const date = new Date(event.target.value);
            const formattedDate = date.toLocaleDateString('en-US', { month: 'numeric', day: '2-digit', year: 'numeric' });
            setFilterDate(formattedDate);
          };
          
      return (
        <main>
        <h2> Events for {filterDate}</h2>
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
          <Event key={event.id} event={event} />
        ))}
        </ul>
      </main>
      );
}
