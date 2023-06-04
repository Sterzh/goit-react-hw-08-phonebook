import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './AuthNav.module.css';

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

export const AuthNav = () => {
  return (
    <div className={css.Nav}>
      <StyledLink to="/login">LogIn</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </div>
  );
};
