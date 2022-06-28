import { useDispatch } from 'react-redux';
import { setSearchTerm } from '../redux/notes/notesSLice';

function Header() {
  const dispatch = useDispatch();
  return (
    <div>
      <h1 className="appTitle">NotesApp</h1>
      <form>
        <input
          type="text"
          placeholder="Search..."
          className="noteAppSearch"
          onChange={(e) => dispatch(setSearchTerm(e.target.value))}
        />
      </form>
    </div>
  );
}

export default Header;
