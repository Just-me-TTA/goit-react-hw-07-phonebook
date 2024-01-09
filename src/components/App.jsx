import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { MainTitle, Title, Wrapper } from './App.styled';
import { useSelector } from 'react-redux';
import { selectIsLoading } from '../redux/selectors';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <Wrapper>
      <GlobalStyle />
      {isLoading && <Loader />}
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Filter />
      <Title>Contacts</Title>
      <ContactList />
    </Wrapper>
  );
};
