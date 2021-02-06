import { useSelector } from 'react-redux';
import Container from '../../Components/Container/Container';
import ContactList from '../../Components/ContactList/ContactList';
import Filter from '../../Components/Filter/Filter';
import Form from '../../Components/Form/Form';
import Title from '../../Components/Title/Title';
import { contactsSelectors } from '../../redux/contacts';

export default function TodosView(params) {
  const contacts = useSelector(contactsSelectors.getContacts);

  return (
    <Container>
      <Title title="Phonebook" />
      <Form />
      {contacts.length > 0 && <Title title="Contacts" />}
      <Filter />

      <ContactList />
    </Container>
  );
}
