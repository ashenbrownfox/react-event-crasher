import React from 'react'

export const Event = ({event}) => {
  return (
    <li key={event.id}>
      <h3>{event.name}</h3>
      <p>{event.desc}</p>
      <p>{new Date(event.dateTime).toLocaleString()}</p>
      <p>{event.address}</p>
      <a href={event.link}>Event Details</a>
    </li>
  )
}
