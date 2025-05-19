import React, { useState } from 'react';

function AppointmentForm({ businesses, onAddAppointment }) {
  const [selectedBusiness, setSelectedBusiness] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const business = businesses.find(b => b.id === parseInt(selectedBusiness));
    onAddAppointment({
      businessId: selectedBusiness,
      businessName: business.name,
      service: selectedService,
      date,
      time,
      notes
    });
    // Formu temizle
    setSelectedBusiness('');
    setSelectedService('');
    setDate('');
    setTime('');
    setNotes('');
  };

  const getServices = () => {
    const business = businesses.find(b => b.id === parseInt(selectedBusiness));
    return business ? business.services : [];
  };

  return (
    <form onSubmit={handleSubmit} className="appointment-form">
      <div>
        <label>İşletme:</label>
        <select value={selectedBusiness} onChange={(e) => setSelectedBusiness(e.target.value)} required>
          <option value="">Seçiniz</option>
          {businesses.map(business => (
            <option key={business.id} value={business.id}>{business.name}</option>
          ))}
        </select>
      </div>
      
      {selectedBusiness && (
        <div>
          <label>Hizmet:</label>
          <select value={selectedService} onChange={(e) => setSelectedService(e.target.value)} required>
            <option value="">Seçiniz</option>
            {getServices().map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>
      )}
      
      <div>
        <label>Tarih:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      
      <div>
        <label>Saat:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      
      <div>
        <label>Notlar:</label>
        <textarea value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      
      <button type="submit">Randevu Al</button>
    </form>
  );
}

export default AppointmentForm;