import css from './Login.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { logInUserThunk } from '../../../redux/operations';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

const LogIn = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'email' ? setEmail(value) : setPassword(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(logInUserThunk({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <>
      {isLoggedIn ? (
        <Navigate to="/contacts" />
      ) : (
        <form onSubmit={handleSubmit} className={css.contactForm}>
          <label htmlFor="email" className={css.contactFormLabel}>
            Email
            <input
              id="email"
              type="email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              title="Invalid email address"
              required
              value={email}
              onChange={handleChange}
              className={css.inputForm}
            />
          </label>
          <label htmlFor="password" className={css.contactFormLabel}>
            Password
            <input
              id="password"
              type="password"
              name="password"
              pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
              title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
              required
              value={password}
              onChange={handleChange}
              className={css.inputForm}
            />
          </label>
          <button className={css.contactFormButton} type="submit">
            Sign In
          </button>
        </form>
      )}
    </>
  );
};

export default LogIn;
