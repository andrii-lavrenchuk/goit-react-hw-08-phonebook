import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import s from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { contactsOperations, contactsSelectors } from '../../redux/contacts';

export default function ContactList() {
  const contacts = useSelector(contactsSelectors.getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(contactsOperations.deleteContact(id));

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);

  return contacts.length > 0 ? (
    <ul className={s.list}>
      {contacts.map(({ id, name, number }) => (
        <li className={s.item} key={id}>
          <Contact
            name={name}
            number={number}
            onDeleteContact={() => onDeleteContact(id)}
          />
        </li>
      ))}
    </ul>
  ) : (
    <h2>Add your first contact</h2>
  );
}
