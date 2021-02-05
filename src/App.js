import { Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import Form from './Components/Form/Form';
// import ContactList from './Components/ContactList/ContactList';
// import Filter from './Components/Filter/Filter';
// import Title from './Components/Title/Title';
import Container from './Components/Container/Container';

import AppBar from './Components/AppBar';
import ContactsView from './views/ContactsView/ContactsView';
import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';

export default function App() {
  return (
    <Container>
      <ToastContainer autoClose={3000} />
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
      {/* <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      <ContactList /> */}
    </Container>
  );
}
