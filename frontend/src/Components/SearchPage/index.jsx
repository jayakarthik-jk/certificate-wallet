import { useParams } from "react-router-dom";

function Search() {
  const { query } = useParams();
  console.log(query);
  return <div>Search</div>;
}

export default Search;
