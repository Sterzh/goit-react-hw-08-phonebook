import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export default function PublicRoute({
  children,
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const souldRedirect = isLoggedIn && restricted;
  return (
    <Route {...routeProps}>
      {souldRedirect ? redirect('/contacts') : children}
    </Route>
  );
}
