import React, { useState } from 'react';
import './candidateForm.css'
export default function CandidateForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    documentType: '',
    documentNumber: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos del formulario
    console.log(formData);
  };

  return (
    <div className='container'>
      <h2>Completa el formulario :&#41;</h2>
      <form onSubmit={handleSubmit} className='form'>
        <div className='data'>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className='data'>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='data'>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className='data'>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
            required
          />
        </div>
        <div className='data'>
          <label>Document Type:</label>
          <select
            name="documentType"
            value={formData.documentType}
            onChange={handleChange}
            required
          >
            <option value="">Select Document Type</option>
            <option value="cedula">Cédula</option>
            <option value="tarjeta de identidad">Tarjeta de Identidad</option>
            <option value="tarjeta de extranjeria">Tarjeta de Extranjería</option>
            <option value="nit">NIT</option>
            <option value="pasaporte">Pasaporte</option>
          </select>
        </div>
        <div className='data'>
          <label>Document Number:</label>
          <input
            type="text"
            name="documentNumber"
            value={formData.documentNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
