import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import contactOperations from '../../redux/contacts/contacts-operations';
import s from './Form.module.css';
import IconButton from '../IconButton/IconButton';
import { ReactComponent as AddIcon } from '../../icons/add.svg';
import NumberFormat from 'react-number-format';

export default function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name === '' || number === '') {
      toast.info('Please fill all fields');
      return;
    }
    setName('');
    setNumber('');

    dispatch(contactOperations.addContact(name, number));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <label className={s.label}>
        Name
        <input
          className={s.input}
          type="text"
          name="name"
          placeholder="John Jonson"
          value={name}
          onChange={handleChange}
        ></input>
        <label className={s.label}>
          Number
          <NumberFormat
            placeholder="Enter phone number"
            type="tel"
            format="+38 (###) ###-####"
            allowEmptyFormatting
            mask="_"
            name="number"
            value={number}
            onChange={handleChange}
            className={s.input}
          />
        </label>
      </label>
      <IconButton type="submit" aria-label="Add contact">
        <AddIcon width="20" height="20" fill="#fff" />
      </IconButton>
    </form>
  );
}
