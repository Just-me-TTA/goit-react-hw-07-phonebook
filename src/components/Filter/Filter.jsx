import { Title } from 'components/App.styled';
import { FilterField } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilterAction } from '../../redux/filterSlice';
import { getFilter } from '../../redux/selectors';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilter = e => {
    dispatch(updateFilterAction(e.target.value));
  };

  return (
    <div>
      <Title>Find contacts by name</Title>
      <FilterField type="text" value={filter} onChange={handleFilter} />
    </div>
  );
};
