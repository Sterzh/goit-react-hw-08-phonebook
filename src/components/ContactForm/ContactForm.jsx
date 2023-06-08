import css from './ContactForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from '../../redux/operations';
import { useState } from 'react';
import ContactList from '../ContactList';
import { Children } from 'react';
import { selectIsLoggedIn } from 'redux/selectors';
import { Navigate } from 'react-router-dom';

export default function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleChange = event => {
    const { name, value } = event.target;
    name === 'name' ? setName(value) : setNumber(value);

    const maxId = Math.max(...contacts.map(e => e.id));

    setId(maxId + 1);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (name !== '') {
      const checkName = contacts.find(contact => {
        return contact.name === name;
      });

      checkName === undefined
        ? dispatch(addContactThunk({ name: name, number: number, id: id }))
        : alert([name] + ': is already in contacts');
    }

    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <form onSubmit={handleSubmit} className={css.contactForm}>
            <label htmlFor="name" className={css.contactFormLabel}>
              Name
              <input
                id="name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                value={name}
                onChange={handleChange}
                className={css.inputForm}
                autoComplete="true"
              />
            </label>
            <label htmlFor="number" className={css.contactFormLabel}>
              Number
              <input
                id="number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
                value={number}
                onChange={handleChange}
                className={css.inputForm}
              />
            </label>
            <button className={css.contactFormButton} type="submit">
              Add contact
            </button>
          </form>
          <ContactList>({Children})</ContactList>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
