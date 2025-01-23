import s from "./SearchBox.module.css";

const SearchBox = ({ searchContacts, onSearchContacts }) => {
  return (
    <>
      <p className={s.text}>Find contacts by name</p>
      <input
        className={s.input}
        type="text"
        value={searchContacts}
        onChange={onSearchContacts}
      />
    </>
  );
};

export default SearchBox;
