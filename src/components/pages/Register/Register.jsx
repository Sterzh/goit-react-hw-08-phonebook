import css from './Register.module.css';
import { useDispatch } from 'react-redux';
import { registerUserThunk } from '../../../redux/operations';
import { useState } from 'react';

const Register = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = event => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);

      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '') {
      dispatch(registerUserThunk({ name, email, password }));
    }
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={css.contactForm}>
        <label htmlFor="name" className={css.contactFormLabel}>
          UserName
          <input
            id="name"
            type="text"
            name="name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleChange}
            className={css.inputForm}
            autoComplete="true"
          />
        </label>
        <label htmlFor="email" className={css.contactFormLabel}>
          Email
          <input
            id="email"
            type="email"
            name="email"
            // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            // title="Invalid email address"
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
          Sign Up
        </button>
      </form>
    </>
  );
};

export default Register;
