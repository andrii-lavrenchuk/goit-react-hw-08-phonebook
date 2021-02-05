// import { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Container from '../../Components/Container/Container';
import ContactList from '../../Components/ContactList/ContactList';
// import TodoEditor from '../components/TodoEditor';
import Filter from '../../Components/Filter/Filter';
import Form from '../../Components/Form/Form';
import Title from '../../Components/Title/Title';
// import Stats from '../components/Stats';
// import Modal from '../components/Modal';
// import IconButton from '../components/IconButton';
// import { ReactComponent as AddIcon } from '../icons/add.svg';
// import { todosOperations, todosSelectors } from '../redux/todos';

const barStyles = {
  display: 'flex',
  alignItems: 'flex-end',
  marginBottom: 20,
};

export default function TodosView(params) {
  //   const dispatch = useDispatch();
  //   const isLoadingTodos = useSelector(todosSelectors.getLoading);

  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const toggleModal = () => setIsModalOpen(state => !state);

  //   useEffect(() => dispatch(todosOperations.fetchTodos()), [dispatch]);

  return (
    <Container>
      {/* <div style={barStyles}> */}
      <Title title="Phonebook" />
      <Form />
      <Title title="Contacts" />
      <Filter />
      {/* <Stats /> */}
      {/* <IconButton onClick={toggleModal} aria-label="Добавить todo">
          <AddIcon width="40" height="40" fill="#fff" />
        </IconButton> */}

      {/* {isLoadingTodos && <h1>Загружаем...</h1>} */}
      {/* </div> */}

      <ContactList />

      {/* {isModalOpen && (
        <Modal onClose={toggleModal}>
          <TodoEditor onSave={toggleModal} />
        </Modal>
      )} */}
    </Container>
  );
}
