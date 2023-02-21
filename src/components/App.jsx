import { useSelector } from 'react-redux';
import Modal from './Modal/Modal';
import PokemonList from './PokemonList/PokemonList';

import { TodoList } from './TodoList/TodoList';

export const App = () => {
  const pokemon = useSelector(state => state.pokemons.pokemonName);

  return (
    <>
      {/* <PokemonList />
      {pokemon && <Modal />} */}
      <TodoList />
    </>
  );
};
