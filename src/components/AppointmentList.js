import React from 'react';

function AppointmentList({ appointments, onDelete, isAdmin = false }) {
  return (
    <div className="appointment-list">
      {appointments.length === 0 ? (
        <p>Randevu bulunamadı.</p>
      ) : (
        <ul>
          {appointments.map(appointment => (
            <li key={appointment.id} className="appointment-item">
              <div>
                <strong>{appointment.businessName}</strong> - {appointment.service}
              </div>
              <div>
                {appointment.date} {appointment.time}
              </div>
              {isAdmin && (
                <div>
                  Kullanıcı: {appointment.userName || `ID: ${appointment.userId}`}
                </div>
              )}
              {appointment.notes && (
                <div>Not: {appointment.notes}</div>
              )}
              {onDelete && (
                <button onClick={() => onDelete(appointment.id)}>Sil</button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default AppointmentList;