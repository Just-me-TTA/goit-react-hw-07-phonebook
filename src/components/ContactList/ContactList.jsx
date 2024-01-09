import { ContactItem } from 'components/ContactItem/ContactItem';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectContacts,
  selectError,
  selectFilteredContacts,
} from '../../redux/selectors';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/operations';
import { Error } from 'components/Error/Error';
import { CounterMessage, List } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filteredContacts = useSelector(selectFilteredContacts);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {error && <Error />}
      <List>
        {filteredContacts.map(contact => (
          <ContactItem contact={contact} key={contact.id} />
        ))}
      </List>
      {!error && (
        <CounterMessage>
          You have {contacts.length} contacts. You filtered{' '}
          {filteredContacts.length} contacts.
        </CounterMessage>
      )}
    </>
  );
};
