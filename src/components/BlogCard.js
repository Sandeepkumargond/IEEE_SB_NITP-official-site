"use client";
import { useState } from 'react';

export default function Card({ title, description, date, details, background = 'transparent' }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: background === 'white' ? '#ffffff' : 'transparent',
        padding: '15px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <div>
        <h3 style={{ fontWeight: 'bold', margin: 0 }}>{title}</h3>
        <p style={{ fontSize: 14, lineHeight: 1.4, margin: '10px 0', color: '#222' }}>
          {expanded ? details : description + '...'}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          style={{
            fontSize: 14,
            background: 'none',
            border: 'none',
            color: '#0047ab',
            cursor: 'pointer',
            textDecoration: 'underline',
            padding: 0,
            textAlign: 'left',
          }}
        >
          {expanded ? 'Close' : 'Read More'}
        </button>
      </div>
      <div style={{ fontSize: 12, textAlign: 'right', color: '#444' }}>{date}</div>
    </div>
  );
}