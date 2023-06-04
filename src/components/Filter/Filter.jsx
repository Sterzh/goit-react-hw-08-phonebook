import { useDispatch } from 'react-redux';
import { filterStorageContacts } from '../../redux/filterSlice';
import css from './Filter.module.css';

export function Filter() {
  const dispatch = useDispatch();
  const handleChange = event => {
    dispatch(filterStorageContacts(event.target.value.trim()));
  };

  return (
    <>
      <p className={css.filterText}>Find contacts by name</p>
      <input
        name="filter"
        type="text"
        onChange={handleChange}
        className={css.filterInput}
      />
    </>
  );
}
