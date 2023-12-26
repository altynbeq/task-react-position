import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [formValid, setFormValid] = useState(false);
  const [emailValid, setEmailValid] = useState(false);
  const [checkboxValid, setCheckboxValid] = useState(false);
  const [buttonHeld, setButtonHeld] = useState(false);
  const [email, setEmail] = useState('');

  const validateEmail = (email) => {
    return email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };

  const handleEmailChange = (e) => {
    const emailValue = e.target.value.trim();
    const emailCheck = validateEmail(emailValue);

    setEmail(emailValue);
    setEmailValid(emailCheck);
    setFormValid(emailCheck && checkboxValid);
  };

  const handleCheckBox = (e) => {
    const checkboxChecked = e.target.form.agree.checked;

    setCheckboxValid(checkboxChecked);
    setFormValid(emailValid && checkboxChecked);
  };

  const handleButtonHold = () => {
    setButtonHeld(true);

    setTimeout(() => {
      setButtonHeld(false);
    }, 2000);
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('storedEmail');
    if (storedEmail) {
      setEmail(storedEmail);
      setEmailValid(true);
    }
  }, []);

  useEffect(() => {
    if (emailValid) {
      localStorage.setItem('storedEmail', email);
    }
  }, [emailValid, email]);

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <div className="login-container flex flex-col items-center">
          <h2 className="text-2xl font-bold mb-4 text-blue-600">Login</h2>
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
              onChange={(e) => handleEmailChange(e)}
              value={email}
              className="mt-1 p-4 w-full border border-gray-300 rounded-md focus:ring focus:border-blue-300 bg-white"
              required
            />
          </div>
          <div className="button-container">
            <div className="mb-4 flex">
              <input
                type="checkbox"
                onChange={(e) => handleCheckBox(e)}
                id="agree"
                name="agree"
                className="mr-2 bg-white"
                required
              />
              <label htmlFor="agree" className="text-sm font-medium text-gray-800">
                I agree to the terms and conditions
              </label>
            </div>
            {formValid ? (
              <Link to={buttonHeld ? "/login/step-2" : "#"}>
                <button
                  className={`bg-blue-600 text-white p-2 rounded-md focus:outline-none ${
                    buttonHeld ? "" : "cursor-not-allowed"
                  }`}
                  onClick={handleButtonHold}
                >
                  Hold to proceed
                </button>
              </Link>
            ) : (
              <button disabled className="bg-gray-400 text-white p-2 rounded-md cursor-not-allowed">
                Hold to proceed
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;