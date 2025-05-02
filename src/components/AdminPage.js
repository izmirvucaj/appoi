import React, { useState } from 'react';
import AppointmentList from '../components/AppointmentList';

function AdminPage() {
  const [appointments, setAppointments] = useState([
    { id: 1, userId: 'user1', userName: 'Ahmet Yılmaz', businessId: 1, businessName: 'Kuaför Salonu', service: 'Saç Kesimi', date: '2023-06-15', time: '10:00' },
    { id: 2, userId: 'user2', userName: 'Ayşe Demir', businessId: 2, businessName: 'Doktor Randevu', service: 'Genel Muayene', date: '2023-06-16', time: '14:30' }
  ]);

  const deleteAppointment = (id) => {
    setAppointments(appointments.filter(app => app.id !== id));
  };

  return (
    <div className="admin-page">
      <h1>Admin Paneli</h1>
      <div className="appointment-management">
        <h2>Tüm Randevular</h2>
        <AppointmentList appointments={appointments} onDelete={deleteAppointment} isAdmin={true} />
      </div>
    </div>
  );
}

export default AdminPage;