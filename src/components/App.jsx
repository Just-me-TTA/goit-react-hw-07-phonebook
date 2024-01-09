import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { GlobalStyle } from './GlobalStyle';
import { MainTitle, Title, Wrapper } from './App.styled';

export const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <MainTitle>Phonebook</MainTitle>
      <ContactForm />
      <Filter />
      <Title>Contacts</Title>
      <ContactList />
    </Wrapper>
  );
};
