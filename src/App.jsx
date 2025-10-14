import "./App.scss";
import { Person } from "./CustomerCard";

let _name = "Imhotep";
let age = 57;
function App() {
  return <Person name={_name} age={age} closable />;
}

export default App;
