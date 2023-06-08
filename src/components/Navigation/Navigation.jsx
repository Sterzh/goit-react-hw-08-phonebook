import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import css from './Navigation.module.css';

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

export const Navigation = () => {
  return (
    <div className={css.Nav}>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/contacts">Contacts</StyledLink>
    </div>
  );
};
