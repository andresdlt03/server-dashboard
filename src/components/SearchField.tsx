
export const SearchField = () => {
  return (
    <div className="search__container">
      <label htmlFor="search">
        <img 
          src="./src/assets/icons/magnifier.svg"
          alt="Magnifier Search"
          className="search__magnifier"
        />
      </label>
      <input
        type="text"
        id="search"
        className="search__field"
        placeholder="Search..."
      />
    </div>
  )
}
