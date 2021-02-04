import { useSelector, useDispatch } from 'react-redux';
import * as contactActions from '../../redux/contacts/contacts-actions';
import { contactsSelectors } from '../../redux/contacts';

import s from './Filter.module.css';

export default function Filter() {
  const value = useSelector(contactsSelectors.getFilter);

  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => dispatch(contactActions.changeFilter(e.target.value))}
      ></input>
    </label>
  );
}
