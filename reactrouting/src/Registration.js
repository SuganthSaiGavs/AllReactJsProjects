import React, { useState, useEffect } from 'react';

function Registration() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    emailId: ''
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    // On component mount, retrieve data from session storage
    const storedData = JSON.parse(sessionStorage.getItem('registrationData') || '[]');
    setData(storedData);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const updatedData = [...data, formData];
    setData(updatedData);

    // Store the updated data array to session storage
    sessionStorage.setItem('registrationData', JSON.stringify(updatedData));

    setFormData({ firstName: '', lastName: '', emailId: '' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        First Name <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} /><br />
        Last Name <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} /><br />
        Email ID <input type="email" name="emailId" value={formData.emailId} onChange={handleChange} /><br />
        <input type="submit" value="Add" />
      </form>

      {/* Display data in a table */}
      {data.length > 0 && (
        <table border="1" style={{ marginTop: '20px' }}>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email ID</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.emailId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

  


export default Registration;
