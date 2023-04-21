import Icon from "../Common/Icon";

function Searchbar({ value, onSearch }) {
  return (
    <div className="mr-[5%]">
      <input
        type="text"
        className={`border-[--secondary-color] focus:outline-none border-2 rounded-lg px-4`}
        placeholder="Search"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default Searchbar;
