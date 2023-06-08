import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { Suspense, useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { selectIsLoggedIn } from 'redux/selectors';
import { lazy } from 'react';

export default function App() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const ContactForm = lazy(() => import('./ContactForm/ContactForm'));
  const LogIn = lazy(() => import('./pages/Login/Login'));
  const Register = lazy(() => import('./pages/Register/Register'));
  const NotFound = lazy(() => import('./pages/NotFound'));

  return (
    <>
      <Layout />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            index
            element={
              isLoggedIn ? (
                <Navigate to="/contacts" />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/contacts" element={<ContactForm />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}
