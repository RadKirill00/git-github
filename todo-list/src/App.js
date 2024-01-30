import Cards from "./components/cards/Cards";
import MyLinks from "./components/milinks/MyLinks";
import "./reset.css";
import { FaPlus } from "react-icons/fa";

function App() {
  return (
    <>
      <MyLinks />
      <h1 className="tittle">My todo list</h1>
      <FaPlus className="plus" />
      <Cards />
    </>
  );
}

export default App;
