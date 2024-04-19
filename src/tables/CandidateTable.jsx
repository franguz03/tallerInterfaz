import React from 'react';
import './CandidateTable.css'; // Importamos el archivo de estilos CSS

export default function CandidateTable({ candidates }) {
  return (
    <div className="table-container">
      <h2>Candidate Table</h2>
      <div style={{ maxHeight:'280px',overflowY:'auto'
      }}>
      <table className="candidate-table">
        <thead>
          <tr>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Date of Birth</th>
            <th>Document Type</th>
            <th>Document Number</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((candidate, index) => (
            <tr key={index}>
              <td>{candidate.email}</td>
              <td>{candidate.firstName}</td>
              <td>{candidate.lastName}</td>
              <td>{candidate.dateOfBirth}</td>
              <td>{candidate.documentType}</td>
              <td>{candidate.documentNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
}
