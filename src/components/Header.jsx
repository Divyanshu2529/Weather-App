export default function Header() {
  return (
    <>
      <form className="search-form" role="search">
        <label htmlFor="site-search" className="search-label">
        </label>

        <input
          value = {location}
          onChange = {event => setLocation(event.target.value)}
          onKeyPress = {searchLocation}
          id="site-search"
          name="q"
          type="search"
          placeholder="Which City ?"
          className="search-input"
        />

        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </>

  );
}
