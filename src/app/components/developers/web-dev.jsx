'use client';
import React from 'react';
import Navbar from '../Navbar';
import Footer from '../../../components/Footer';

const MEMBERS = [
  { id: 'suryansh-verma', name: 'Suryansh Verma', dept: 'Electrical Engineering Department', photo: '/img1.jpeg' },
  { id: 'aditya-raj', name: 'Aditya Raj', dept: 'Computer Science Department', photo: '/img2.jpeg' },
  { id: 'manu-gupta', name: 'Manu Gupta', dept: 'Computer Science Department', photo: '/img3.jpeg' },
  { id: 'rutbaosh-pandey', name: 'Rutbaosh Pandey', dept: 'Civil Engineering Department', photo: '/img4.jpeg' },
  { id: 'anshu-kant', name: 'Anshu Kant', dept: 'Computer Science Department', photo: '/img5.jpeg' },
  { id: 'anshu-manoj-mahato', name: 'Anshu Manoj Mahato', dept: 'Computer Science Department', photo: '/img6.jpeg' },
  { id: 'harshit-verma', name: 'Harshit Verma', dept: '', photo: '/img4.jpeg' },
  { id: 'vasu-chouhan', name: 'Vasu Chouhan', dept: '', photo: '/img1.jpeg' }
];

export default function WebDev() {
  return (
    <>
      <Navbar />
      <main style={{ background: '#000', color: '#fff', minHeight: '80vh', paddingTop: 96, paddingBottom: 48 }}>
        <section style={{ padding: 24 }}>
          <div style={{ maxWidth: 1200, margin: '0 auto' }}>
            <h2 style={{ margin: '0 0 8px', fontSize: 32, fontWeight: 800, textAlign: 'center' }}>Web Dev Team Members</h2>
            <p style={{ margin: '0 0 20px', textAlign: 'center', color: 'rgba(255,255,255,0.75)' }}>
              Developers and team members across departments
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: 20
            }}>
              {MEMBERS.map(member => (
                <div key={member.id} style={{
                  background: 'linear-gradient(180deg,#0f1113,#070708)',
                  borderRadius: 12,
                  padding: 18,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 12,
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
                  textAlign: 'center'
                }}>
                  <img
                    src={member.photo}
                    alt={member.name}
                    style={{ width: 120, height: 120, borderRadius: 12, objectFit: 'cover', boxShadow: '0 6px 18px rgba(0,0,0,0.4)' }}
                  />
                  <div style={{ fontSize: 18, fontWeight: 800, color: '#fff' }}>{member.name}</div>
                  <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.75)' }}>{member.dept || 'Department not listed'}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}