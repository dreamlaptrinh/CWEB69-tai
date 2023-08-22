import { FaRegCircle, FaRegCheckCircle } from "react-icons/fa";

const Header = ({ numOfTodosLeft, setStatusFilter, status, content }) => {
  return (
    <div className="header">
      <div>
        {content.a} {numOfTodosLeft} {content.b}!
      </div>
      <div className={status ? "Checktasks active" : "Checktasks"}>
        {status ? (
          <FaRegCheckCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => setStatusFilter("")}
          />
        ) : (
          <FaRegCircle
            className="item-done-button"
            color="#9a9a9a"
            onClick={() => setStatusFilter("active")}
          />
        )}
        <div> {content.check}</div>
      </div>
    </div>
  );
};

export default Header;
