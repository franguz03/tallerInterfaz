import React from 'react';
import './DocumentTable.css'; // Importamos el archivo de estilos CSS

export default function DocumentTable() {
  return (
    <div className="table-containerD">
      <h2>Document Table</h2>
      <table className="document-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Descripción</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>cc</td>
            <td>Cédula</td>
          </tr>
          <tr>
            <td>ti</td>
            <td>Tarjeta de Identidad</td>
          </tr>
          <tr>
            <td>te</td>
            <td>Tarjeta de Extranjería</td>
          </tr>
          <tr>
            <td>nit</td>
            <td>NIT</td>
          </tr>
          <tr>
            <td>pas</td>
            <td>Pasaporte</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
