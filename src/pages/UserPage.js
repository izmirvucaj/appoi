import React, { useState, useEffect } from 'react';
import AppointmentForm from '../components/AppointmentForm';
import AppointmentList from '../components/AppointmentList';

function UserPage({ userId }) {
  const [appointments, setAppointments] = useState([]);
  const [businesses, setBusinesses] = useState([
    { id: 1, name: 'Kuaför Salonu', services: ['Saç Kesimi', 'Sakal Tıraşı', 'Cilt Bakımı'] },
    { id: 2, name: 'Doktor Randevu', services: ['Genel Muayene', 'Diş Kontrolü', 'Göz Muayenesi'] }
  ]);

  const addAppointment = (newAppointment) => {
    setAppointments([...appointments, { ...newAppointment, id: Date.now(), userId }]);
  };

  return (
    <div className="user-page">
      <h1>Randevu Al</h1>
      <div className="content">
        <div className="form-section">
          <AppointmentForm businesses={businesses} onAddAppointment={addAppointment} />
        </div>
        <div className="list-section">
          <h2>Randevularım</h2>
          <AppointmentList appointments={appointments.filter(app => app.userId === userId)} />
        </div>
      </div>
    </div>
  );
}

export default UserPage;