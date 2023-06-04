import { useDispatch, useSelector } from 'react-redux';
import { selectToken, selectUser } from 'redux/selectors';
import css from './UserMenu.module.css';
import { logOutUserThunk } from 'redux/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const token = useSelector(selectToken);

  return (
    <div className={css.UserMenu}>
      <p className={css.UserMenuText}>Hello, {user.name}</p>
      <button
        className={css.Button}
        onClick={() =>
          dispatch(logOutUserThunk(`Authorization: Bearer ${token}`))
        }
      >
        Logout
      </button>
    </div>
  );
};
