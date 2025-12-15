"use client"
import { fetchDevelopers } from '@/lib/adminAction';
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function DevelopersSection() {
  const [developers, setDevelopers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchDevelopers();
      setDevelopers(res?.data || []);

      console.log(res)
    };

    fetchData();
  }, []);

  console.log(developers)

  return (
    <section
      style={{
        minHeight: '800px',
        padding: '80px 24px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        backgroundColor: '#f9f9f9',
      }}
    >
      <h2 style={{ fontSize: '36px', fontWeight: 700, marginBottom: '8px' }}>
        <span style={{ color: '#000' }}>Meet our </span>
        <span style={{ color: '#195289' }}>Developers</span>
      </h2>

      <p style={{ fontSize: '16px', color: '#444', marginBottom: '50px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
        Crafting the future, one line of code at a time. Meet the developers behind the IEEE NIT Patna website.
      </p>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '48px',
        }}
      >
        {developers.map((dev, idx) => (
          <div
            key={idx}
            style={{
              width: '190px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <img
              src={dev.image}
              alt={dev.name}
              style={{
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                objectFit: 'cover',
                boxShadow: '0 6px 18px rgba(0,0,0,0.12)',
                display: 'block',
                margin: '0 auto',
              }}
            />
            <div style={{ marginTop: '14px', fontWeight: 700, fontSize: '15px', color: '#222' }}>{dev.name}</div>
            <div style={{ fontSize: '13px', color: '#666' }}>{dev.role}</div>

            <div style={{ marginTop: '10px', display: 'flex', justifyContent: 'center', gap: '12px' }}>
              <a href="#" aria-label={`${dev.name} GitHub`} style={{ color: '#333' }}><FaGithub style={{ fontSize: '18px' }} /></a>
              <a href="#" aria-label={`${dev.name} LinkedIn`} style={{ color: '#0077b5' }}><FaLinkedin style={{ fontSize: '18px' }} /></a>
              <a href="#" aria-label={`${dev.name} Instagram`} style={{ color: '#e1306c' }}><FaInstagram style={{ fontSize: '18px' }} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}