import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
import { Suspense } from 'react';
import css from './Layout.module.css';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthNav } from 'components/AuthNav/AuthNav';
import { selectIsLoggedIn } from 'redux/selectors';
import { useSelector } from 'react-redux';

const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 700;
  color: #ffff;
  font-size: 18px;
  padding: 0px 0px;
  &.active {
    color: orange;
  }
`;

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <header className={css.Header}>
        <h1 className={css.HeaderTitle}>Phonebook</h1>
        <nav className={css.Nav}>
          {isLoggedIn ? <StyledLink to="/contacts">Contacts</StyledLink> : ' '}
          {/* <StyledLink to="/contacts">Contacts</StyledLink> */}
          {isLoggedIn ? <UserMenu /> : <AuthNav></AuthNav>}
        </nav>
      </header>
      <main>
        {/* <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
        </Suspense> */}
      </main>
    </>
  );
};
