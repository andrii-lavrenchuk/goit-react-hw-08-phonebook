import { lazy, Suspense, useEffect } from 'react';
import { Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations, authSelectors } from './redux/auth';
import 'react-toastify/dist/ReactToastify.css';
import Container from './Components/Container/Container';
import AppBar from './Components/AppBar/AppBar';
import PrivateRoute from './Components/PrivateRoute';
import PublicRoute from './Components/PublicRoute';

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
  const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <Container>
        <ToastContainer autoClose={3000} />
        <AppBar />
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PrivateRoute path="/contacts" redirectTo="/login">
              <ContactsView />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    )
  );
}
