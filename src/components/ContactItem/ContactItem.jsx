import { useDispatch } from 'react-redux';
import { BinIcon, DelButton, Item, Letter } from './ContactItem.styled';
import { removeContactAction } from '../../redux/contactsSlice';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const deleteContact = e => {
    const contactToDelete = e.currentTarget.id;
    dispatch(removeContactAction(contactToDelete));
  };

  return (
    <Item>
      <Letter>{contact.name[0]}</Letter>
      {contact.name}: {contact.number}
      <DelButton type="button" id={contact.id} onClick={deleteContact}>
        <BinIcon />
      </DelButton>
    </Item>
  );
};
