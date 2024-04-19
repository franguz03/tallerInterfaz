
import './App.css';
import CandidateForm from './forms/candidateForm'
import CandidateTable from './tables/CandidateTable'
import DocumentTable from './tables/DocumentTable'
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const candidatesData = [
    {
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-05-15',
      documentType: 'Cédula',
      documentNumber: '1234567890'
    },
    {
      email: 'jane@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '1992-09-20',
      documentType: 'Tarjeta de Identidad',
      documentNumber: '0987654321'
    },
    {
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Smith',
      dateOfBirth: '1988-03-10',
      documentType: 'Pasaporte',
      documentNumber: 'ABCDE12345'
    },
    {
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-05-15',
      documentType: 'Cédula',
      documentNumber: '1234567890'
    },
    {
      email: 'jane@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '1992-09-20',
      documentType: 'Tarjeta de Identidad',
      documentNumber: '0987654321'
    },
    {
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Smith',
      dateOfBirth: '1988-03-10',
      documentType: 'Pasaporte',
      documentNumber: 'ABCDE12345'
    }, {
      email: 'john@example.com',
      firstName: 'John',
      lastName: 'Doe',
      dateOfBirth: '1990-05-15',
      documentType: 'Cédula',
      documentNumber: '1234567890'
    },
    {
      email: 'jane@example.com',
      firstName: 'Jane',
      lastName: 'Doe',
      dateOfBirth: '1992-09-20',
      documentType: 'Tarjeta de Identidad',
      documentNumber: '0987654321'
    },
    {
      email: 'alice@example.com',
      firstName: 'Alice',
      lastName: 'Smith',
      dateOfBirth: '1988-03-10',
      documentType: 'Pasaporte',
      documentNumber: 'ABCDE12345'
    }
  ];
  // const [data, setData] = useState(null);
  
  // const fetchData = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:puerto/tu-ruta-de-api');
  //       setData(response.data);
  //     } catch (error) {
  //       console.error('Error fetching data:', error);
  //     }
  //   };

  //   const postData = async (newItem) => {
  //     try {
  //       await axios.post('http://localhost:puerto/tu-ruta-de-api', newItem);
  //       // Una vez enviado el nuevo dato, actualizamos los datos para reflejar los cambios
  //       fetchData();
  //     } catch (error) {
  //       console.error('Error posting data:', error);
  //     }
  //   };

  // useEffect(() => {
    

  //   fetchData(); 


  //   const intervalId = setInterval(fetchData, 5000); 

  //   return () => clearInterval(intervalId);
  // }, []);


  return (
    <div className="App">
      <CandidateForm/>
      <div className='tables'>

      <CandidateTable candidates={candidatesData} />
      <DocumentTable/>
      </div>
  
    </div>
  );
}

export default App;
