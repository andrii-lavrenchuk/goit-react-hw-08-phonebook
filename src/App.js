import { lazy, Suspense, useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar';

const HomeView = lazy(
  () => import('./views/HomeView/HomeView') /* webpackChunkName: "home-view" */,
);

const RegisterView = lazy(
  () =>
    import(
      './views/RegisterView/RegisterView'
    ) /* webpackChunkName: "register-view" */,
);

const ContactsView = lazy(
  () =>
    import(
      './views/ContactsView/ContactsView'
    ) /* webpackChunkName: "contacts-view" */,
);

const LoginView = lazy(
  () =>
    import('./views/LoginView/LoginView') /* webpackChunkName: "login-view" */,
);

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <AppBar />
      <Suspense fallback={null}>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route path="/register" component={RegisterView} />
          <Route path="/login" component={LoginView} />
          <Route path="/contacts" component={ContactsView} />
        </Switch>
      </Suspense>
      {/* <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <ContactList /> */}
    </Container>
  );
}
