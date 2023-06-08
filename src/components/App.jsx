import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { useEffect } from 'react';
import { Layout } from './Layout/Layout';
import { lazy } from 'react';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  const HomePage = lazy(() => import('./Pages/Home'));
  const ContactsPage = lazy(() => import('./Pages/Contacts'));
  const LogInPage = lazy(() => import('./LoginForm/LoginForm'));
  const RegisterPage = lazy(() => import('./RegisterForm/RegisterForm'));
  const NotFoundPage = lazy(() => import('./Pages/NotFound'));

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}
