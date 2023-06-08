import { useSelector } from 'react-redux';
import { Route, redirect } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/selectors';

export default function PrivateRoute({ children, ...routeProps }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : redirect('/contacts')}
    </Route>
  );
}
