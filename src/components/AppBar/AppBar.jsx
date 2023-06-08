import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import css from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={css.Header}>
        <h1 className={css.HeaderTitle}>Phonebook</h1>
        <nav className={css.Nav}>
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <AuthNav></AuthNav>}
        </nav>
      </header>
    </>
  );
};
