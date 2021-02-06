import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth';
import { toast } from 'react-toastify';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import s from './LogiView.module.css';

export default function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    if (email.trim() === '' || password.trim() === '') {
      toast.info('Please, fill all fields');
      return;
    } else if (password.length < 7) {
      toast.error('Password must contains at least 7 characters');
      return;
    }
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Sign in</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
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
          Sign in
        </Button>
      </form>
    </div>
  );
}
