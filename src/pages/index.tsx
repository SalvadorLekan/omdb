import Hero from "components/hero";
import SearchInput from "components/searchinput";
import Result from "components/result";

function Home() {
  return (
    <div>
      <Hero />
      <SearchInput />
      <Result type="movie" />
      <Result type="series" />
    </div>
  );
}

export default Home;
