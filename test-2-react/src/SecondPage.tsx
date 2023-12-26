import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => {
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const storedEmail = localStorage.getItem('storedEmail');
    if (storedEmail) {
      setEmail(storedEmail);
    }
  }, []);

  const handleConfirm = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus('Request send successfully');
        setSuccess(true);
      } else {
        setStatus('Request failed to send');
        setSuccess(false);
      }
      setModalVisible(true);
    } catch (error) {
      setSuccess(false);
      setStatus('Error occurred');
      setModalVisible(true);
    }
  };

  const closeModal = () => {
    setModalVisible(false);
    setSuccess(false);
  };

  if (modalVisible) {
    return (
        <div>
            <div className={`modal-content ${success ? 'success' : 'error'}`}>
                <h2 className="section-title">Status is {status}</h2>
                <button onClick={closeModal} className="bg-blue-600 text-white p-2 rounded-md focus:outline-none">Close</button>
            </div>
        </div>
    );
  } else {
    return (
      <div className="flex h-screen justify-center items-center">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <div className="login-container flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Confirm email</h2>
          </div>
          <form>
            <div className="mb-12">
              <label htmlFor="email" className="block text-sm font-medium text-gray-800">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                className="mt-1 p-4 w-full border border-gray-300 rounded-md focus:ring focus:border-blue-300 bg-white"
                disabled
              />
            </div>
            <div className="button-container-second">
              <Link to="/login/step-1">
                <button type="button" className="back-button">
                  Back
                </button>
              </Link>
              <button onClick={ (e) => handleConfirm(e)} className="bg-blue-600 text-white p-2 rounded-md focus:outline-none">
                Confirm
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default SecondPage;
