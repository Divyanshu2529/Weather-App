export default function Header({location, setLocation, searchLocation}) {
  return (
    <>
      <form className="search-form" role="search" onSubmit={searchLocation}>
        <label htmlFor="site-search" className="search-label">
        </label>

        <input
          value = {location}
          onChange = {(event) => setLocation(event.target.value)}
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
