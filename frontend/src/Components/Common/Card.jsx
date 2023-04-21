import { NavLink as Link } from "react-router-dom";
import Icon from "./Icon";

function Card({ name, category, type, id, date, description, isImportant }) {
  return (
    <Link
      to={
        type === "new"
          ? `/certificate/new?category=${category}`
          : `/certificate/${id}`
      }
      className="card relative w-60 h-40 rounded-lg bg-[--secondary-color] flex-shrink-0 flex justify-center items-center cursor-pointer"
    >
      {type === "new" ? (
        <Icon name="add" className="icon-container" />
      ) : (
        <div className="text-white">{name}</div>
      )}
    </Link>
  );
}

export default Card;
