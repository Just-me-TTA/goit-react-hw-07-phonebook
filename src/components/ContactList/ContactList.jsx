import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filterContactsByName = () => {
    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase().trim())
    );
    return filteredContacts;
  };

  return (
    <ul>
      {filterContactsByName().map(contact => (
        <ContactItem contact={contact} key={contact.id} />
      ))}
    </ul>
  );
};
