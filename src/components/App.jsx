import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { Suspense, useEffect } from 'react';
// import { useEffect } from 'react';
// import { lazy } from 'react';
// import PrivateRoute from './PrivateRote';
// import PublicRoute from './PublicRoute';
import { Layout } from './Layout/Layout';
import ContactForm from './ContactForm/ContactForm';
import LogIn from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound';
import { selectIsLoggedIn } from 'redux/selectors';

export default function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  // const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
  // const LogIn = lazy(() => import('./pages/Login/Login'));
  // const Register = lazy(() => import('./pages/Register/Register'));
  // const NotFound = lazy(() => import('./pages/NotFound'));

  return (
    <>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<LogIn />} />
          <Route
            path="/contacts"
            element={isLoggedIn ? <ContactForm /> : <LogIn />}
          />
          <Route
            path="/login"
            element={isLoggedIn ? <ContactForm /> : <LogIn />}
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
