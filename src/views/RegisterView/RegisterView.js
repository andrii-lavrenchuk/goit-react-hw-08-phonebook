import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import s from './RegisterView.module.css';

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      toast.info('Please, fill all fields');
      return;
    } else if (password.length < 7) {
      toast.error('Password must contains at least 7 characters');
      return;
    }
    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1> Sign up</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <TextField
          label="Name"
          helperText="*Required"
          variant="outlined"
          className={s.field}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          helperText="*Required"
          variant="outlined"
          className={s.field}
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          helperText="*Required"
          variant="outlined"
          className={s.field}
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <Button variant="contained" color="primary" type="submit">
          Sign up
        </Button>
      </form>
    </div>
  );
}
