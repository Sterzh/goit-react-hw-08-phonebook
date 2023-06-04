import { Routes, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import { Layout } from './Layout/Layout';
import LogIn from './pages/Login/Login';
import Register from './pages/Register/Register';
import NotFound from './pages/NotFound';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/operations';
import { useEffect } from 'react';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/contacts" index element={<ContactForm />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}
